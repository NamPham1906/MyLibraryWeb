exports.login = async (req,res)=> {
    req.logout();
    if(req.session){
        req.session.destroy(function(err){
            res.render('login/login');
        });
    }else{
        res.render('login/login');
    }
}

exports.forgetPassword = async (req,res)=> {
    res.render('login/fogot-password');
}