
const router = require("express").Router();

const homepageRoutes = require("./homepageRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/homepageRoutes", homepageRoutes);
router.use("/dashboardRoutes", dashboardRoutes);

module.exports = router;