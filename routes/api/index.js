const router = require("express").Router();
const vendorRoutes = require("./vendors");

// Vendor routes
router.use("/vendor", vendorRoutes);

module.exports = router;
