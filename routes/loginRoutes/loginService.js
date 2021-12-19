const {models} = require('../../models/index');
const { Op } = require("sequelize");


exports.findAccount=(username ="0") =>{
    return models.taikhoan.findOne({
        where: {
            tentaikhoan: username,
          },
        raw:true
    });
}