const staffService = require('./staffService');

const staffPerPage = 5;
const maximumPagination = 5;
let currentPage = 1;
let totalPage = 1;

exports.add = async (req,res)=> {
    res.render('chairman/staff/add');
}

exports.detail = async (req,res,next)=> {
    const id = req.params.id;
    Promise.all([staffService.getProfileStaff(id), staffService.getStaffUsername(id)])
    .then(([staff, result])=>{
        // const ngsinh = new Date(staff.ngaysinh);
        // if (!isNaN(ngsinh.getTime())) {
        //     let d = ngsinh.getDate();
        //     let m = ngsinh.getMonth() + 1;
        //     let y = ngsinh.getFullYear();
        //     staff.dob = d + '/' + m + '/' + y;
        // }
        staff.username = result.tentaikhoan;
        res.render("chairman/staff/detail",{
            staff
        });
    })
    .catch(err=>{
        console.log(err);
        next();
    })
}

exports.list = async (req,res)=> {
    const pageNumber = req.query.page;
    currentPage = (pageNumber && !Number.isNaN(pageNumber)) ? parseInt(pageNumber) : 1;
    currentPage = (currentPage > 0) ? currentPage : 1;
    currentPage = (currentPage <= totalPage) ? currentPage : totalPage
    currentPage = (currentPage < 1) ? 1 : currentPage;

    Promise.all([staffService.list(staffPerPage,currentPage),staffService.totalStaff()])
    .then(([staffs,total])=>{
        
        let totalStaff = total;
        let paginationArray = [];
        totalPage = Math.ceil(totalStaff/staffPerPage);
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
        const staffsLength = staffs.length;
        const usernameStaff = staffs.map(staff=>{
            return staffService.getStaffUsername(staff.manv);
        });

        Promise.all(usernameStaff)
        .then(result=>{
            for(let i = 0 ; i  < staffsLength;i++){
                //staffs[i].No = (currentPage -1)*userPerPage + 1 + i;
                const ngsinh = new Date(staffs[i].ngaysinh);
                if (!isNaN(ngsinh.getTime())) {
                    let d = ngsinh.getDate();
                    let m = ngsinh.getMonth() + 1;
                    let y = ngsinh.getFullYear();
                    staffs[i].dob = d + '/' + m + '/' + y;
                }
                staffs[i].username = result[i].tentaikhoan;
            }
            res.render("chairman/staff/list",{
                staffs,
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

