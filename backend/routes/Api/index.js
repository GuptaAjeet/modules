const express = require("express");
const router = express.Router();

const userRoutes = require("./User");


router.use("/user", ()=>console.log("call---------2222222222"),userRoutes);

module.exports = router;

