exports.add = async (req,res)=> {
    res.render('cashier/penalty_form/add');
}

exports.detail = async (req,res)=> {
    res.render('cashier/penalty_form/detail');
}


exports.list = async (req,res)=> {
    res.render('cashier/penalty_form/list');
}

exports.print = async (req,res)=> {
    res.render('cashier/penalty_form/print');
}