const liquidationBookServvice = require('./liquidationBookService');

exports.add = async (req,res)=> {
    res.render('stockkeeper/liquidation_book/add');
}

exports.detail = async (req,res, next)=> {
    const id = req.params.id;
    try {
        const thanhly = await liquidationBookServvice.detail(id);
        const admin = await liquidationBookServvice.admin(thanhly.nguoithanhly);
        const books = await liquidationBookServvice.getBooks(thanhly.mathanhly);
        thanhly.tennguoithanhly = admin.hoten;
        for(let i = 0; i < books.length; i++){
            const book = await liquidationBookServvice.bookDetail(books[i].masach);
            books[i].tensach=book.tensach;
        }
        const ngayghi = new Date(thanhly.ngaythanhly);
        if (!isNaN(ngayghi.getTime())) {
            let d = ngayghi.getDate();
            let m = ngayghi.getMonth() + 1;
            let y = ngayghi.getFullYear();
            thanhly.ngaythanhly = d + '/' + m + '/' + y;
        }
        for(let i = 0 ; i < books.length; i++){
            books[i].no = i+1;
        }
        res.render('stockkeeper/liquidation_book/detail',{
            thanhly,
            books
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
   
}
const itemPerPage = 5;
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
        const items = await liquidationBookServvice.list(currentPage-1, itemPerPage);
        const total = await liquidationBookServvice.total();
        for(let i = 0; i < items.length;i++){
            const admin = await liquidationBookServvice.admin(items[i].nguoithanhly);
            items[i].tennguoithanhly = admin.hoten
        }
        let totalBook=total;
        let paginationArray = [];
        totalPage = Math.ceil(totalBook/itemPerPage);
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
        const itemsLength = items.length;
        for(let i = 0 ; i  < itemsLength;i++){
            items[i].No = (currentPage -1)*itemPerPage + 1 + i;
            const ngayghi = new Date(items[i].ngaythanhly);
            if (!isNaN(ngayghi.getTime())) {
                let d = ngayghi.getDate();
                let m = ngayghi.getMonth() + 1;
                let y = ngayghi.getFullYear();
                items[i].ngaythanhly = d + '/' + m + '/' + y;
            }

        }
        res.render("stockkeeper/liquidation_book/list",{
            items,
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