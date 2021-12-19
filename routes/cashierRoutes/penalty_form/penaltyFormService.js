const { raw } = require('express');
const { NULL } = require('node-sass');
const {models} = require('../../../models/index');

const { Op } = require("sequelize");

exports.list=(page = 0, itemPerPage = 10 ) =>{
    return models.phieuthutienphat.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.total=()=>{
    return models.phieuthutienphat.count();
}

exports.getUser=(userId)=>{
    return models.docgia.findOne({
        where:{
            madocgia: userId
        },
        raw: true
    })
}

exports.getAdmin=(adminId)=>{
    return models.nhanvien.findOne({
        where:{
            manv: adminId,
        },
        raw: true   
    })
}

exports.getDetail=(id)=>{
    return models.phieuthutienphat.findOne({
        where:{
            maphieuthu: id
        },
        raw: true
    })
}
