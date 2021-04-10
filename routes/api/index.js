const router = require("express").Router();
const vendorRoutes = require("./vendors");
const taskRoutes = require("./tasks")

// Vendor routes
router.use("/vendor", vendorRoutes);

router.use("/task", taskRoutes);

module.exports = router;
