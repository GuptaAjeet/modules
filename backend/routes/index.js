const express = require("express");
const router = express.Router();

const APIRouter = require("./Api");

router.use("/api", ()=>console.log("call---------1111111111"),APIRouter);

module.exports = router;
