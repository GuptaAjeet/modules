const Post = require('../../../models/postgres/User');

// Implement your controller functions using Mongoose methods here
exports.list = (req, res)=>{
    const users = [{name:"3333"}, {name:"444"}]
    return res.status(200).json({
        data: users,
    });
}