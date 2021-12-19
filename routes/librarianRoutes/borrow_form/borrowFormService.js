
const {models} = require('../../../models/index');

const { Op } = require("sequelize");


exports.list=(page = 0, itemPerPage = 5 ) =>{
    return models.phieumuonsach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.formBookAmount=(formId)=>{
    return models.sachthuocphieumuon.count({
        where:{
            maphieumuon:formId
        }
    })
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
            maphieumuon:formId
        }
    })
}


exports.addForm=(newId, userId, bookIds, createdAt)=>{
    return models.phieumuonsach.create({
        maphieumuon: newId,
        madocgia: userId,
        ngaymuon: createdAt,
    }).then(form=>{
        const pro = bookIds.map(bookId=>{
            return models.sachthuocphieumuon.create({
                maphieumuon: form.maphieumuon,
                maphieutra:null,
                masach:bookId
            })
        })
        return Promise.all(pro);
    })
}

exports.deleteForm=(formId)=>{
    return models.phieumuonsach.destroy({
        where:{
            maphieumuon: formId
        }
    })
}