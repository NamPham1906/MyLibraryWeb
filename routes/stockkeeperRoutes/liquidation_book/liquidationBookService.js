const {models} = require('../../../models/index');

exports.list=(page = 0, itemPerPage = 10 ) =>{
    return models.thanhlysach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.total = ()=>{
    return models.thanhlysach.count();
}

exports.getBooks=(mathanhly)=>{
    return models.chitietthanhlysach.findAll({
        where:{
            mathanhly: mathanhly
        },
        raw:true
    })
}

exports.bookDetail=(id)=>{
    return models.sach.findOne({
        where:{
            masach:id
        },
        raw: true
    })
}

exports.admin=(adminId)=>{
    return models.nhanvien.findOne({
        where:{
            manv: adminId
        },
        raw:true
    })
}

exports.detail=(id)=>{
    return models.thanhlysach.findOne({
        where:{
            mathanhly: id,
        },
        raw:true
    })
}