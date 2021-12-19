const penaltyFormService = require('./penaltyFormService');

exports.add = async (req,res)=> {
    res.render('cashier/penalty_form/add');
}

exports.detail = async (req,res)=> {
    res.render('cashier/penalty_form/detail');
}


exports.list = async (req,res)=> {
    try{
        const penalty = await penaltyFormService.list(!isNaN(req.query.page) && req.query.page > 0? req.query.page - 1:0);
        res.render('cashier/penalty-form/list', { penalty,page:req.query.page });
    }
    catch{
        console.log(error);
    }
    
}

exports.print = async (req,res)=> {
    res.render('cashier/penalty_form/print');
}
