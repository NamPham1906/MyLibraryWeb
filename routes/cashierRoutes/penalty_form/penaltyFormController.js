const penaltyFormService = require('./penaltyFormService');

exports.add = async (req,res)=> {
    res.render('cashier/penalty_form/add');
}

exports.detail = async (req,res)=> {
    res.render('cashier/penalty_form/detail');
}

const formPerPage = 6;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;
exports.list = async (req,res, next)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;
    try{
        const forms = await penaltyFormService.list(currentPage-1, formPerPage);
        const total = await penaltyFormService.total();
        for(let i = 0 ; i < forms.length;i++){
            const admin = await penaltyFormService.getAdmin(forms[i].nguoithu);
            const user = await penaltyFormService.getUser(forms[i].madocgia);
            forms[i].docgia = user.hoten;
            forms[i].nguoithu = admin.hoten;
            forms[i].tienno = user.tongno;
            forms[i].conlai = user.tongno - forms[i].tienthu;
        }
        let totalBook=total;
        let paginationArray = [];
        totalPage = Math.ceil(totalBook/formPerPage);
        let pageDisplace = Math.min(totalPage - currentPage + 2, maximumPagination);
        if(currentPage === 1){
            pageDisplace -= 1;
        }
        for(let i = 0 ; i < pageDisplace; i++){
            if(currentPage === 1){
                paginationArray.push({
                    page: currentPage + i,
                    isCurrent:  (currentPage + i)===currentPage
                });
            }
            else{
                paginationArray.push({
                    page: currentPage + i - 1,
                    isCurrent:  (currentPage + i - 1)===currentPage
                });
            }
        }
        if(pageDisplace < 2){
            paginationArray=[];
        }
        const formsLength = forms.length;
        for(let i = 0 ; i  < formsLength;i++){
            forms[i].No = (currentPage -1)*formPerPage + 1 + i;
        }
        res.render("cashier/penalty_form/list",{
            forms,
            currentPage,
            paginationArray,
            prevPage: (currentPage > 1) ? currentPage - 1 : 1,
            nextPage: (currentPage < totalPage) ? currentPage + 1 : totalPage,
        });
    }
    catch (error){
        console.log(error);
        next(error)
    }
    
}

exports.print = async (req,res, next)=> {
    const id = req.params.id;
    try {
        const form = await penaltyFormService.getDetail(id);
        const admin = await penaltyFormService.getAdmin(form.nguoithu);
        const user = await penaltyFormService.getUser(form.madocgia);
        form.docgia = user.hoten;
        form.nguoithu = admin.hoten;
        form.tienno = user.tongno;
        form.conlai = user.tongno - form.tienthu;
        res.render('cashier/penalty_form/print', {
            form
        });
    } catch (error) {
        console.log(error);
        next();
    }
    
}
