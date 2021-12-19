var express = require('express');
var router = express.Router();
const passport = require('passport');
const loginService = require('./loginService');
const loginController = require('./loginController');

router.get('/',loginController.login);
router.post('/login', passport.authenticate('local',
    { 
        failureRedirect: '/librarian',
        failureFlash: true 
    }),
    function(req, res, next) {
        if(req.user){
            const bophan = req.user.bophan;
            if(bophan === "Ban Giám Đốc"){
                res.redirect("/chairman");
            }else if(bophan==="Thủ Thư"){
                res.redirect("/librarian");
            }else if(bophan==="Thủ Kho"){
                res.redirect("/stockkeeper");
            }else if(bophan==="Thủ Quỹ"){
                res.redirect("/cashier");
            }else{
                res.redirect("/");
            }
        }else{
            res.redirect("/");
        }
});
router.get('/foget-password', loginController.forgetPassword);

module.exports = router;