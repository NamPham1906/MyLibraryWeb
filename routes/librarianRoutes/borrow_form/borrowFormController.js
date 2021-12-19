const borrowFormService = require('./borrowFormService');

exports.add = async (req,res)=> {
    res.render('librarian/borrow_form/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/borrow_form/detail');
}


const formPerPage = 5;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;
exports.list = async (req, res, next)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;
    try{
        const forms = await borrowFormService.list(currentPage-1, formPerPage);
        const total = await borrowFormService.total();
        for(let i = 0 ; i < forms.length;i++){
            const user = await borrowFormService.getUser(forms[i].madocgia);
            const totalBooks = await borrowFormService.totalBooks(forms[i].maphieumuon);
            forms[i].docgia = user.hoten;
            forms[i].book = totalBooks;
            const ngayghi = new Date(forms[i].ngaymuon);
            if (!isNaN(ngayghi.getTime())) {
                let d = ngayghi.getDate();
                let m = ngayghi.getMonth() + 1;
                let y = ngayghi.getFullYear();
                forms[i].ngay = d + '/' + m + '/' + y;
            }

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
        res.render("librarian/borrow_form/list",{
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

exports.print = async (req,res)=> {
    res.render('librarian/borrow_form/print');
}