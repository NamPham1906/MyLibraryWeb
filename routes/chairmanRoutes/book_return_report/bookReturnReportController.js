exports.create = async (req,res)=> {
    res.render('chairman/book_return_report/create');
}

exports.print = async (req,res)=> {
    res.render('chairman/book_return_report/print');
}