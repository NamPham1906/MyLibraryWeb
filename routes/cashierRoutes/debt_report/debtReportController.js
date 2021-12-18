exports.create = async (req,res)=> {
    res.render('cashier/debt_report/create');
}

exports.print = async (req,res)=> {
    res.render('cashier/debt_report/print');
}