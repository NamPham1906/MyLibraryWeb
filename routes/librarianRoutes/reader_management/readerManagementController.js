exports.add = async (req,res)=> {
    res.render('librarian/reader_management/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/reader_management/detail');
}

exports.edit = async (req,res)=> {
    res.render('librarian/reader_management/edit');
}

exports.list = async (req,res)=> {
    res.render('librarian/reader_management/list');
}