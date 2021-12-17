exports.menu = async (req,res)=> {
    res.render('chairman/menu');
}

exports.logout = async (req,res)=> {
    res.redirect('/');
}