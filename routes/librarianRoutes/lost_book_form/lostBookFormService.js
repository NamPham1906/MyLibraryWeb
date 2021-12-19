const {models} = require('../../../models/index');
const { Op } = require("sequelize");

exports.list = (limit, page) => {
    return models.phieumatsach.findAll({
        offset: (page - 1)*limit, 
        limit: limit,
        raw:true
    });
};

exports.totalForm = () => {
    return models.phieumatsach.count({
        raw: true
    })
}

exports.getReader = (id) => {
    return models.docgia.findOne({
        attributes: ['hoten'],
        raw: true,
        where:{
            madocgia: id
        }
    })
}

exports.getLostBook = (id) => {
    return models.sach.findOne({
        attributes: ['tensach', 'anhbia'],
        raw: true,
        where:{
            masach: id
        }
    })
}

exports.getInfoForm = (id) => {
    return models.phieumatsach.findOne({
        raw: true,
        where:{
            maphieumatsach: id
        }
    })
}

exports.getAdmin = (id) => {
    return models.nhanvien.findOne({
        attributes: ['hoten'],
        raw: true,
        where:{
            manv: id
        }
    })
}