exports.menu = async (req,res)=> {
    res.render('cashier/menu');
}

exports.logout = (req,res,next)=> {
    req.logout();
    res.redirect('/');
}