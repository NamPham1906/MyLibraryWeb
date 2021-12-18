exports.add = async (req,res)=> {
    res.render('librarian/reader/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/reader/detail');
}

exports.edit = async (req,res)=> {
    res.render('librarian/reader/edit');
}

exports.list = async (req,res)=> {
    res.render('librarian/reader/list');
}