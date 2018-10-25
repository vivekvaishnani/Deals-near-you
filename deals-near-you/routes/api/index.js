const router = require("express").Router();
const locationRoutes = require("./locations");

// Location routes
router.use("/locations", locationRoutes);

module.exports = router;
