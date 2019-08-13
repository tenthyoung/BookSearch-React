const router = require("express").Router();
const path = require('path');

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
