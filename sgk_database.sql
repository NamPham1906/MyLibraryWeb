drop database if exists sgk_database;
create database sgk_database;
ALTER DATABASE sgk_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use sgk_database;

CREATE TABLE IF not EXISTS nhanvien (
	manv varchar(10)  NOT NULL,
	hoten varchar(50) ,
	ngaysinh date,
	bangcap enum  ('Tú Tài', 'Cao Đẳng', 'Trung Cấp', 'Đại Học', 'Thạc Sĩ', 'Tiến Sĩ'),
	bophan enum('Thủ Thư', 'Thủ Kho', 'Thủ Quỹ', 'Ban Giám Đốc'),
	chucvu enum('Giám Đốc', 'Phó Giám Đốc', 'Trưởng Phòng', 'Phó Phòng', 'Nhân Viên'),
	diachi varchar(50) ,
	dienthoai varchar(12) ,
    anhdaidien varchar(255),
	PRIMARY KEY (manv)
) ;

CREATE TABLE IF not EXISTS taikhoan (
	tentaikhoan varchar(50) ,
	matkhau varchar(50),
    manv varchar(10)  NOT NULL,
	PRIMARY KEY (tentaikhoan)
) ;

CREATE TABLE IF not EXISTS sach (
	masach varchar(10)  NOT NULL,
	tensach varchar(50) ,
	theloai enum('A', 'B', 'C'),
	nhaxuatban varchar(50)  ,
	namxuatban int unsigned ,
	ngaynhap date ,
    tacgia varchar(50)  ,
	trigia int unsigned ,
	nguoitiepnhan varchar(10) ,
    anhbia varchar(255),
	PRIMARY KEY (masach)
) ;

CREATE TABLE IF not EXISTS docgia (
	madocgia varchar(10)  NOT NULL,
	hoten varchar(50),
	loaidocgia enum ('X', 'Y'),
	ngaysinh date ,
    diachi varchar(200) ,
	email  varchar(50),
	ngaylapthe date ,
    nguoilapthe varchar(10),
	tongno int unsigned,
	anhdaidien varchar(255),
	PRIMARY KEY (madocgia)
) ;

CREATE TABLE IF not EXISTS phieumuonsach (
	maphieumuon varchar(10)  NOT NULL,
    madocgia varchar(10),
	ngaymuon date,
	PRIMARY KEY (maphieumuon)
) ;


CREATE TABLE IF not EXISTS sachthuocphieumuon (
	maphieutra varchar(10) ,
	maphieumuon varchar(10)  NOT NULL,
    masach varchar(10),
	PRIMARY KEY (maphieumuon, masach)
) ;

CREATE TABLE IF not EXISTS phieutrasach (
	maphieutra varchar(10)  NOT NULL,
    madocgia varchar(10),
	ngaytra date,
    tientra int unsigned,
	PRIMARY KEY (maphieutra)
) ;
create table if not exists phieuthutienphat(
	maphieuthu varchar(10)  NOT NULL,
    madocgia  varchar(10),
    tienthu int unsigned,
    nguoithu varchar(10),
    PRIMARY KEY (maphieuthu)
);

create table if not exists phieumatsach(
	maphieumatsach varchar(10)  NOT NULL,
    masach varchar(10),
    ngayghinhan date,
    madocgia varchar(10),
    nguoighinhan varchar(10),
    tienphat int unsigned,
    PRIMARY KEY (maphieumatsach)
);

create table if not exists thanhlysach(
	mathanhly varchar(10)  NOT NULL,
    ngaythanhly date,
    nguoithanhly varchar(10),
    PRIMARY KEY (mathanhly)
);

create table if not exists chitietthanhlysach(
	mathanhly varchar(10)  NOT NULL,
    masach varchar(10),
    lydothanhly enum ('Mất', 'Hư Hỏng', 'Người Dùng Làm Mất'),
    PRIMARY KEY (mathanhly, masach)
);

alter table taikhoan
add foreign key (manv) references nhanvien(manv);

alter table sach
add foreign key (nguoitiepnhan) references nhanvien(manv);

alter table docgia
add foreign key (nguoilapthe) references nhanvien(manv);

alter table phieumuonsach
add foreign key (madocgia) references docgia(madocgia);

alter table sachthuocphieumuon
add foreign key (maphieutra) references phieutrasach(maphieutra);

alter table sachthuocphieumuon
add foreign key (maphieumuon) references phieumuonsach(maphieumuon);

alter table sachthuocphieumuon
add foreign key (masach) references sach(masach);

alter table phieutrasach
add foreign key (madocgia) references docgia(madocgia);

alter table phieuthutienphat
add foreign key (nguoithu) references nhanvien(manv);

alter table phieuthutienphat
add foreign key (madocgia) references docgia(madocgia);

alter table phieumatsach
add foreign key (masach) references sach(masach);

alter table phieumatsach
add foreign key (madocgia) references docgia(madocgia);

alter table phieumatsach
add foreign key (nguoighinhan) references nhanvien(manv);

alter table thanhlysach
add foreign key (nguoithanhly) references nhanvien(manv);

alter table chitietthanhlysach
add foreign key (mathanhly) references thanhlysach(mathanhly);

alter table chitietthanhlysach
add foreign key (masach) references sach(masach);

insert into nhanvien 
values('XXXXXTT','Trần Minh Tuyết', '1988-01-15','Đại Học', 'Thủ Thư','Nhân Viên','42A Lam Sơn, phường 2, quận Tân Bình, HCM', '0332224561','https://via.placeholder.com/150' ),
	('XXXXXGD','Triệu Thủy Trang','1962-01-16', 'Tiến Sĩ', 'Ban Giám Đốc','Giám Đốc','42A Lam Sơn, phường 2, quận Tân Bình, HCM', '0919123456','https://via.placeholder.com/150' ),
    ('XXXXXTK','Trần Minh Kỳ','1982-05-05', 'Đại Học', 'Thủ Kho','Nhân Viên','198 Phan Xích Long, phường 2, quận Phú Nhuận, HCM', '0341234556','https://via.placeholder.com/150' ),
    ('XXXXXTQ','Phạm Sơn Nam','2000-12-30', 'Đại Học', 'Thủ Quỹ','Nhân Viên','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM', '0351789423','https://via.placeholder.com/150' ),
    ('XXXXXTT1','Trần Minh Hoa', '1988-01-15','Đại Học', 'Thủ Thư','Nhân Viên','42A Lam Sơn, phường 2, quận Tân Bình, HCM', '0332224561','https://via.placeholder.com/150' ),
	('XXXXXTT2','Triệu Thủy Trung','1962-01-16', 'Tiến Sĩ', 'Thủ Thư','Nhân viên','42A Lam Sơn, phường 2, quận Tân Bình, HCM', '0919123456','https://via.placeholder.com/150' ),
    ('XXXXXTK1','Trần Minh Công','1982-05-05', 'Đại Học', 'Thủ Kho','Nhân Viên','198 Phan Xích Long, phường 2, quận Phú Nhuận, HCM', '0341234556','https://via.placeholder.com/150' ),
    ('XXXXXTQ1','Phạm Sơn Kê','2000-12-30', 'Đại Học', 'Thủ Quỹ','Nhân Viên','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM', '0351789423','https://via.placeholder.com/150' );
    
insert into taikhoan
values('giamdoc1','giamdoc1','XXXXXGD'),
	('thuthu1', 'thuthu1','XXXXXTT'),
    ('thuquy1', 'thuquy1','XXXXXTQ'),
    ('thukho1', 'thukho1','XXXXXTK'),
    ('thuthu2','thuthu2','XXXXXTT1'),
	('thuthu3', 'thuthu3','XXXXXTT2'),
    ('thuquy2', 'thuquy2','XXXXXTQ1'),
    ('thukho2', 'thukho2','XXXXXTK1');

insert into sach
values('SGK00001','Khoa học trái đất','A','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
	('SGK00002','Khoa học trái đất','B','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00003','Khoa học trái đất','C','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00004','Khoa học trái đất','A','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00005','Khoa học trái đất','B','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00006','Khoa học trái đất','C','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00007','Khoa học trái đất','C','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00008','Khoa học trái đất','C','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png'),
    ('SGK00009','Khoa học trái đất','C','NXB Khoa học và Kỹ thuật','2019','2021-01-01','HCMUS',60000,'XXXXXTK','/images/stocker/khtd-book.png');

insert into docgia
values('DG00001','Phạm Sơn Nam','X','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam1@gmail.com','2021-12-07','XXXXXTT',8000,'/images/librarian/user1.png'),
('DG00002','Phạm Sơn Nam','Y','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam2@gmail.com','2021-12-07','XXXXXTT',13000,'/images/librarian/user1.png'),
('DG00003','Phạm Sơn Nam','Y','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam3@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png'),
('DG00004','Phạm Sơn Nam','Y','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam4@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png'),
('DG00005','Phạm Sơn Nam','X','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam5@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png'),
('DG00006','Phạm Sơn Nam','X','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam6@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png'),
('DG00007','Phạm Sơn Nam','Y','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam7@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png'),
('DG00008','Phạm Sơn Nam','X','2001-06-19','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM','phamsonnam8@gmail.com','2021-12-07','XXXXXTT',0,'/images/librarian/user1.png');

insert into phieumuonsach
values('MS00001','DG00001','2021-02-01'),
('MS00002','DG00002','2021-02-03'),
('MS00003','DG00003','2021-02-01'),
('MS00004','DG00004','2021-02-01');

insert into sachthuocphieumuon
values(null,'MS00001','SGK00002'),
(null,'MS00001','SGK00003'),
(null,'MS00002','SGK00004'),
(null,'MS00003','SGK00005'),
(null,'MS00004','SGK00006');

insert into phieutrasach
values('TS00001','DG00005','2021-01-02',0),
('TS00002','DG00006','2021-01-03',3000),
('TS00003','DG00007','2021-01-04',2000),
('TS00004','DG00008','2021-01-05',0);

insert into phieuthutienphat
values('TP00001','DG00006',3000,'XXXXXTT'),
('TP00002','DG00007',2000,'XXXXXTT2'),
('TP00003','DG00001',12000,'XXXXXTT1'),
('TP00004','DG00002',7000,'XXXXXTT');

insert into phieumatsach
values('MAS00001','SGK00003','2021-02-03','DG00001','XXXXXTT',20000),
('MAS00002','SGK00004','2021-02-04','DG00002','XXXXXTT1',20000);

insert into thanhlysach
values('TL00001','2021-01-29','XXXXXTK'),
('TL00002','2021-01-29','XXXXXTK1'),
('TL00003','2021-02-10','XXXXXTK1');

insert into chitietthanhlysach
values('TL00003','SGK00003','Người dùng làm mất'),
('TL00003','SGK00004','Người dùng làm mất'),
('TL00001','SGK00001','Hư hỏng'),
('TL00002','SGK00008','Hư hỏng'),
('TL00002','SGK00009','Mất');