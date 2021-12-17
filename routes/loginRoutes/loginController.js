exports.login = async (req,res)=> {
    res.render('login/login');
}

exports.forgetPassword = async (req,res)=> {
    res.render('login/fogot-password');
}