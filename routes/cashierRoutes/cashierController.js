exports.menu = async (req,res)=> {
    res.render('cashier/menu');
}

exports.logout = async (req,res)=> {
    res.redirect('/');
}