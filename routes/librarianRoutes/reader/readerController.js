
const readerService = require('./readerService');

exports.add = async (req,res)=> {
    res.render('librarian/reader/add');
}

exports.detail = async (req,res,next)=> {
    const id = req.params.id;
    if(id){
        try {
            const user = await readerService.detail(id);
            const admin = await readerService.admin(user.nguoilapthe);
            user.nguoilapthe = admin.hoten;
            res.render('librarian/reader/detail', {
                user
            });
        } catch (error) {
            console.log(error);
            next(error);
        }

    }else{
        next();
    }
}

exports.edit = async (req,res,next)=> {
    const id = req.params.id;
    if(id){
        try {
            const user = await readerService.detail(id);
            const admin = await readerService.admin(user.nguoilapthe);
            user.nguoilapthe = admin.hoten;
            res.render('librarian/reader/edit', {
                user
            });
        } catch (error) {
            console.log(error);
            next(error);
        }

    }else{
        next();
    }
}

const userPerPage = 5;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;
exports.list = async (req,res, next)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;
    try {
        const readers = await readerService.list(currentPage-1, userPerPage);
        const total = await readerService.total();
        for(let i = 0; i < readers.length;i++){
            const admin = await readerService.admin(readers[i].nguoilapthe);
            readers[i].nguoilapthe = admin.hoten;
        }
        
        let totalUser=total;
        let paginationArray = [];
        totalPage = Math.ceil(totalUser/userPerPage);
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
        const usersLength = readers.length;
        for(let i = 0 ; i  < usersLength;i++){
            readers[i].No = (currentPage -1)*userPerPage + 1 + i;
        }
        res.render("librarian/reader/list",{
            readers,
            currentPage,
            paginationArray,
            prevPage: (currentPage > 1) ? currentPage - 1 : 1,
            nextPage: (currentPage < totalPage) ? currentPage + 1 : totalPage,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}