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

exports.findUser=(manv="0")=>{
    return models.nhanvien.findOne({
        where:{
            manv: manv,
        },
        raw: true
    })
};