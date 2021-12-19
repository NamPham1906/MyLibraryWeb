const lostBookFormService = require('./lostBookFormService');

const formPerPage = 5;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;

exports.add = async (req,res)=> {
    res.render('librarian/lost_book_form/add');
}

exports.detail = async (req,res,next)=> {
    const id = req.params.id;
    Promise.all([lostBookFormService.getInfoForm(id)])
    .then(([form])=>{
        Promise.all([lostBookFormService.getReader(form.madocgia), lostBookFormService.getLostBook(form.masach), lostBookFormService.getAdmin(form.nguoighinhan)])
        .then(([reader, lostbook, admin])=>{
            const ngayghi = new Date(form.ngayghinhan);
            if (!isNaN(ngayghi.getTime())) {
                let d = ngayghi.getDate();
                let m = ngayghi.getMonth() + 1;
                let y = ngayghi.getFullYear();
                form.ngayghi = d + '/' + m + '/' + y;
            }
            form.readername = reader.hoten;
            form.lostbook = lostbook.tensach;
            form.lostbookimg = lostbook.anhbia;
            form.nguoighi = admin.hoten;
            res.render("librarian/lost_book_form/detail",{
                form
            });
        })
        .catch(err=>{
            console.log(err);
            next();
        })
    })
    .catch(err=>{
        console.log(err);
        next();
    })
}


exports.list = async (req,res,next)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;

    Promise.all([lostBookFormService.list(formPerPage,currentPage),lostBookFormService.totalForm()])
    .then(([forms,total])=>{
        let totalForm = total;
        let paginationArray = [];
        totalPage = Math.ceil(totalForm/formPerPage);
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
        const reader = forms.map(form=>{
            return lostBookFormService.getReader(form.madocgia);
        });
        const lostBook = forms.map(form=>{
            return lostBookFormService.getLostBook(form.masach);
        });
        const myPromiseArr = reader.concat(lostBook);

        Promise.all(myPromiseArr)
        .then(result=>{
            for(let i = 0 ; i  < formsLength;i++){
                forms[i].stt = (currentPage - 1)*formPerPage + 1 + i;
                forms[i].readername = result[i].hoten;
                forms[i].lostbook = result[(formsLength) + i].tensach;
                const ngayghi = new Date(forms[i].ngayghinhan);
                if (!isNaN(ngayghi.getTime())) {
                    let d = ngayghi.getDate();
                    let m = ngayghi.getMonth() + 1;
                    let y = ngayghi.getFullYear();
                    forms[i].ngayghi = d + '/' + m + '/' + y;
                }
            }
            res.render("librarian/lost_book_form/list",{
                forms,
                currentPage,
                paginationArray,
                prevPage: (currentPage > 1) ? currentPage - 1 : 1,
                nextPage: (currentPage < totalPage) ? currentPage + 1 : totalPage,});
            })
        .catch(err=>{
            console.log(err);
            next();
        })
    })
    .catch(err=>{
        console.log(err);
        next();
    })
}