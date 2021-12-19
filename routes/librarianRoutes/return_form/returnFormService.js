
const {models} = require('../../../models/index');

const { Op } = require("sequelize");


exports.list=(page = 0, itemPerPage = 5 ) =>{
    return models.phieutrasach.findAll({
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

exports.formBooks=(formId)=>{
    return models.sachthuocphieumuon.findAll({
        where:{
            maphieutra:formId
        }
    })
}


exports.addForm=(newId, userId, bookIds, createdAt, money)=>{
    return models.phieutrasach.create({
        maphieutra: newId,
        madocgia: userId,
        ngaytra: createdAt,
        tientra:money,
    }).then(form=>{
        const pro = bookIds.map(bookId=>{
            return models.sachthuocphieumuon.update({
                maphieutra:form.maphieutra,
            },{
                where:{
                    masach: bookId
                }
            })
        })
        return Promise.all(pro);
    })
}

exports.deleteForm=(formId)=>{
    return models.phieutrasach.destroy({
        where:{
            maphieumuon: formId
        }
    })
}