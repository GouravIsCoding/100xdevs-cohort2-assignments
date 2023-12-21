const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const credentials = req.body;
    const isAdmin = await Admin.findOne({ username: credentials.username });
    if (isAdmin) return res.status(404).json({ msg: "admin already exists" });
    const admin = new Admin(credentials);
    await admin.save();
    res.status(200).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Admin creation failed" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const course = new Course({
      ...req.body,
      published: true,
    });
    const savedCourse = await course.save();
    res.status(200).json({
      message: "Course created successfully",
      courseId: savedCourse._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Course creation failed" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Fetching Course list failed" });
  }
});

module.exports = router;
