exports.add = async (req,res)=> {
    res.render('librarian/return_form/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/return_form/detail');
}

exports.print = async (req,res)=> {
    res.render('librarian/return_form/print');
}


exports.list = async (req,res)=> {
    res.render('librarian/return_form/list');
}