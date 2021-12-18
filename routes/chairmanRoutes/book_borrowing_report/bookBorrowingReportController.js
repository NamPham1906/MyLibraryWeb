exports.create = async (req,res)=> {
    res.render('chairman/book_borrowing_report/create');
}

exports.print = async (req,res)=> {
    res.render('chairman/book_borrowing_report/print');
}

