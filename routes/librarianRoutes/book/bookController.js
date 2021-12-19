const bookService = require('../book/bookService');
exports.add = async (req,res)=> {
    res.render('librarian/book/add');
}

exports.detail = async (req,res)=> {
    res.render('librarian/book/detail');
}

const bookPerpage = 5;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;
exports.list = async (req,res,next)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;
    try {
        const books = await bookService.list(currentPage-1, bookPerpage);
        const total = await bookService.total();
        for(let i = 0; i < books.length; i++){
            const admin = await bookService.admin(books[i].nguoitiepnhan);
            books[i].nguoitiepnhan = admin.hoten;
        }
        let totalBook=total;
        let paginationArray = [];
        totalPage = Math.ceil(totalBook/bookPerpage);
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
        const booksLength = books.length;
        for(let i = 0 ; i  < booksLength;i++){
            books[i].No = (currentPage -1)*bookPerpage + 1 + i;
        }
        res.render("librarian/book/list",{
            books,
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

exports.edit = async (req,res)=> {
    const id = req.params.id;
    if(id){
        try {
            const book = await bookService.bookDetail(id);
            const admin = await bookService.admin(book.nguoitiepnhan);
            book.nguoitiepnhan = admin.hoten;
            console.log(book);
            res.render('librarian/book/detail', {
                book
            });
        } catch (error) {
            console.log(error);
            next(error);
        }

    }else{
        next();
    }
}