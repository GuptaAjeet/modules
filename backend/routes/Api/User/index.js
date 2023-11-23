const express = require("express");
const router = express.Router();
const { DB_TYPE='postgres' } = process.env;

const userController = require(`../../../controllers/${DB_TYPE}/User`);

router.get("/list", ()=>console.log("call---------333333333333"),userController.list);

module.exports = router;
