exports.add = async (req,res)=> {
    res.render('stockkeeper/liquidation_book/add');
}

exports.detail = async (req,res)=> {
    res.render('stockkeeper/liquidation_book/detail');
}

exports.list = async (req,res)=> {
    res.render('stockkeeper/liquidation_book/list');
}