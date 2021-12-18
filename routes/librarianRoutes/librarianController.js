exports.menu = async (req,res)=> {
    res.render('librarian/menu');
}

exports.logout = async (req,res)=> {
    res.redirect('/');
}