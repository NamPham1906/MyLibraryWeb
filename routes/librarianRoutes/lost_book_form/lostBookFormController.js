exports.add = async (req,res)=> {
    res.render('librarian/lost_book_form/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/lost_book_form/detail');
}


exports.list = async (req,res)=> {
    res.render('librarian/lost_book_form/list');
}