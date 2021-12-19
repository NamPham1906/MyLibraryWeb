

const {models} = require('../../../models/index');

const { Op } = require("sequelize");

exports.list=(page = 0, itemPerPage = 10 ) =>{
    return models.phieumuonsach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};


exports.total=()=>{
    return models.phieumuonsach.count();
};

exports.getUser=(userId)=>{
    return models.docgia.findOne({
        where:{
            madocgia: userId
        },
        raw: true
    })
};



exports.totalBooks=(borrowId)=>{
    return models.sachthuocphieumuon.count({
        where:{
            maphieumuon: borrowId
        }
    });