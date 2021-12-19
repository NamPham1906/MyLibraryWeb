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
