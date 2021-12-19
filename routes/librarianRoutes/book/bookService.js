const { raw } = require('express');
const { NULL } = require('node-sass');
const {models} = require('../../../models/index');

const { Op } = require("sequelize");


exports.list=(page = 0, itemPerPage = 10 ) =>{
    return models.sach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.total =()=>{
    return models.sach.count();
}

exports.bookDetail=(book_id ="0") =>{
    return models.sach.findOne({
        where: {
         masach: book_id
          },
        raw:true
    });
}

exports.updateBook=(book_id ="0", book_name,book_type,publisher,publish_date,author,cost,importer,cover,importdate) =>{
    return models.sach.update({ 
        tensach: book_name,
        theloai: book_type,
        nhaxuatban: publisher,
        namxuatban: publish_date,
        tacgia: author,
        trigia: cost,
        nguoitiepnhan: importer,
        anhbia: cover,
        ngaynhap: importdate
     }, {
        where: {
            masach: book_id
        }
      });
}

exports.addBook=(newid, book_name,book_type,publisher,publish_date,author,cost,importer,cover,importdate) =>{
    
    return models.sach.create({ 
        masach: newid,
        tensach: book_name,
        theloai: book_type,
        nhaxuatban: publisher,
        namxuatban: publish_date,
        tacgia: author,
        trigia: cost,
        nguoitiepnhan: importer,
        anhbia: cover,
        ngaynhap: importdate
      });
}


exports.admin=(adminId)=>{
    return models.nhanvien.findOne({
        where:{
            manv: adminId
        }
    })
}


