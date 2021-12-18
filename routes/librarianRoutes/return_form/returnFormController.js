exports.add = async (req,res)=> {
    res.render('librarian/return_form/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/return_form/detail');
}


exports.list = async (req,res)=> {
    res.render('librarian/return_form/list');
}