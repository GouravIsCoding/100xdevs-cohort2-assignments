require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = 3000;
function isValidEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateOTP(length) {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * digits.length);
    OTP += digits[index];
  }

  return OTP;
}
let curOtp = {};
app.use(cors());
app.use(express.json());

app.post("/otp", async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!isValidEmail(email)) return next(new Error("not valid email"));
    const cur = generateOTP(4);
    curOtp[email] = curOtp[email] ? curOtp[email].push(cur) : [cur];
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true, // Use TLS
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_NAME,
      to: email,
      subject: "otp",
      text: cur,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    console.log(curOtp);

    res.status(200).json({ message: "email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/confirm", (req, res, next) => {
  try {
    const { otp, email } = req.body;

    if (curOtp[email] && curOtp[email].includes(otp)) {
      res.status(200).json({ message: "login successfull" });
      return delete curOtp[email];
    }
    return res.status(404).json({ error: "wrong otp" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
