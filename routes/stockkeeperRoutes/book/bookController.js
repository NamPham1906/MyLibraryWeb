const bookService = require('../book/bookService');
exports.add = async (req,res)=> {
    res.render('stockkeeper/book/add');
}

exports.detail = async (req,res)=> {
    res.render('stockkeeper/book/detail');
}

exports.list = async (req,res)=> {
    const books = await bookService.list(!isNaN(req.query.page) && req.query.page > 0? req.query.page - 1:0);
    res.render('stockkeeper/book/list', { books,page:req.query.page });
}