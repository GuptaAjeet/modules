const express = require("express");
const router = express.Router();

const APIRouter = require("./Api");

router.use("/api", APIRouter);

module.exports = router;
