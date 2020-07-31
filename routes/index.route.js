const express = require("express");

const { getIndex } = require("../controller/index.controller");
const router = express.Router();

router.get("/", getIndex);

module.exports = router;
