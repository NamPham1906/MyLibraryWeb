const {models} = require('../../../models/index');
const { Op } = require("sequelize");

exports.list = (limit, page) => {
    return models.nhanvien.findAll({
        offset: (page - 1)*limit, 
        limit: limit,
        raw:true
    });
};

exports.totalStaff = () => {
    return models.nhanvien.count({
        raw: true
    })
}

exports.getStaffUsername = (id) => {
    return models.taikhoan.findOne({
        attributes: ['tentaikhoan'],
        raw: true,
        where:{
            manv: id
        }
    })
}

exports.getProfileStaff = (id) => {
    return models.nhanvien.findOne({
        raw: true,
        where:{
            manv: id
        }
    })
}



