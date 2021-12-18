exports.add = async (req,res)=> {
    res.render('librarian/borrow_form/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/borrow_form/detail');
}


exports.list = async (req,res)=> {
    res.render('librarian/borrow_form/list');
}