const { QueryTypes } = require("sequelize");
const sequelize = require('../../../config/postgresConfig');
const Post = require('../../../models/postgres/User');

// Implement your controller functions using Mongoose methods here
exports.list = async (req, res)=>{
    const users = await sequelize.query(`select * from "admin_users" limit 1`, { type: QueryTypes.SELECT });
    return res.status(200).json({
        data: users,
    });
}