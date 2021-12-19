
const {models} = require('../../../models/index');

const { Op } = require("sequelize");


exports.list=(page = 0, itemPerPage = 5 ) =>{
    return models.phieumatsach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.formUser=(userId)=>{
    return models.docgia.findOne({
        where:{
            madocgia: userId
        }
    })
}

exports.formAdmin=(adminId)=>{
    return models.nhanvien.findOne({
        where:{
            manv: adminId
        }
    })
}

exports.formBook=(bookId)=>{
    return models.sach.findOne({
        where:{
            masach: bookId
        }
    })
}

exports.addForm=(newId, userId, bookId, adminId, createdAt, money)=>{
    return models.phieumatsach.create({
        maphieumatsach: newId,
        madocgia: userId,
        ngayghinhan: createdAt,
        nguoighinhan: adminId,
        masach: bookId,
        tienphat: money
    });
}

exports.deleteForm=(formId)=>{
    return models.phieumatsach.destroy({
        where:{
            maphieumuon: formId
        }
    })
}