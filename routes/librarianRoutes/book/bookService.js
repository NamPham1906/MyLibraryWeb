
const {models} = require('../../../models/index');

const { Op } = require("sequelize");


exports.list=(page = 0, itemPerPage = 10 ) =>{
    return models.sach.findAll({
        offset:page*itemPerPage,
        limit: itemPerPage,
        raw:true
    });
};

exports.bookDetail=(book_id ="0") =>{
    return models.sach.findOne({
        where: {
         masach: book_id
          },
        raw:true
    });
}
