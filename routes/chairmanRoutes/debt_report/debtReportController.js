exports.create = async (req,res)=> {
    res.render('chairman/debt_report/create');
}

exports.print = async (req,res)=> {
    res.render('chairman/debt_report/print');
}