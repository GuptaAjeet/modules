const Post = require('../../../models/postgres/User');

// Implement your controller functions using Mongoose methods here
exports.list = (req, res)=>{
    const users = [{name:"11111"}, {name:"222222"}]
    return res.status(200).json({
        data: users,
    });
}