const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });
    if (isUser)
      return res.status(404).json({ message: "user already present" });
    const user = new User({ username, password });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const id = req.params.courseId;
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "course not found" });
    const user = await User.findOne({
      username: req.headers.username,
    });
    await User.findByIdAndUpdate(user._id, { $push: { courses: id } });
    res.status(200).json({ message: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const { username, password } = req.headers;
    const user = await User.findOne({ username }).populate({ path: "courses" });
    const courses = user.courses;
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
