const express = require("express");
const router = express.Router();
const { DB_TYPE } = process.env;

const userController = require(`../../../controllers/${DB_TYPE}/User`);

router.get("/list", userController.list);

module.exports = router;
