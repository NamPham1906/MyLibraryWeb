const {models} = require('../../../models/index');

exports.list=(page = 0, itemPerPage = 5 ) =>{
    return models.docgia.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.total=()=>{
    return models.docgia.count();
}

exports.addUser=(userId, userName, userType, dob, address, email, createdAt, admin, avatar)=>{
    return models.docgia.create({
        madocgia: userId,
        hoten: userName,
        loaidocgia: userType,
        ngaysinh: dob,
        diachi: address,
        email: email,
        ngaylapthe: createdAt,
        ngguoilapthe: admin,
        anhdaidien: avatar,
        tongno: 0
    })
}

exports.updateUser=(userId, userName, userType, dob, address, email, avatar)=>{
    return models.docgia.update({
        hoten: userName,
        loaidocgia: userType,
        ngaysinh: dob,
        diachi: address,
        email: email,
        anhdaidien: avatar,
    },{
        where:{
            madocgia: userId,
        }
    })
}

exports.updateUserTotalDept=(userId, money)=>{
    return models.docgia.update({
        tongno:money
    },{
        where:{
            madocgia: userId,
        }
    })
}

exports.admin=(adminId)=>{
    return models.nhanvien.findOne({
        where:{
            manv: adminId
        }
    })
}

exports.detail=(userId)=>{
    return models.docgia.findOne({
        where:{
            madocgia: userId,
        }
    })
}