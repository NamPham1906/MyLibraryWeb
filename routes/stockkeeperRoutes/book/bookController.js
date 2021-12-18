exports.add = async (req,res)=> {
    res.render('stockkeeper/book/add');
}

exports.detail = async (req,res)=> {
    res.render('stockkeeper/book/detail');
}

exports.list = async (req,res)=> {
    res.render('stockkeeper/book/list');
}