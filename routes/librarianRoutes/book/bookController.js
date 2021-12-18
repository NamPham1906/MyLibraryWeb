exports.add = async (req,res)=> {
    res.render('librarian/book/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/book/detail');
}


exports.list = async (req,res)=> {
    res.render('librarian/book/list');
}