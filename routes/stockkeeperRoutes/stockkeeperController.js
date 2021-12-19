exports.menu = async (req,res)=> {
    res.render('stockkeeper/menu');
}

exports.logout = async (req,res)=> {
    req.logout();
    res.redirect('/');
}