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
    anhbia varchar(20),
	PRIMARY KEY (masach)
) ;

CREATE TABLE IF not EXISTS docgia (
	madocgia varchar(10)  NOT NULL,
	hoten varchar(50),
	loaidocgia enum ('X', 'Y'),
	ngaysinh date ,
    diachi varchar(50) ,
	email  varchar(50),
	ngaylapthe date ,
    nguoilapthe varchar(10),
	tongno int unsigned,
	anhdaidien varchar(20),
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
	('XXXXXGD','Triệu Thủy Trang','1962-01-16', 'Tiến sĩ', 'Ban Giám Đốc','Giám Đốc','42A Lam Sơn, phường 2, quận Tân Bình, HCM', '0919123456','https://via.placeholder.com/150' ),
    ('XXXXXTK','Trần Minh Kỳ','1982-05-05', 'Đại học', 'Thủ Kho','Nhân Viên','198 Phan Xích Long, phường 2, quận Phú Nhuận, HCM', '0341234556','https://via.placeholder.com/150' ),
    ('XXXXXTQ','Phạm Sơn Nam','2000-12-30', 'Đại học', 'Thủ Quỹ','Nhân Viên','364-366 Nguyễn Văn Lương, phường 12, Quận 6 HCM', '0351789423','https://via.placeholder.com/150' );
    
insert into taikhoan
values('giamdoc1','giamdoc1','XXXXXGD'),
	('thuthu1', 'thuthu1','XXXXXTT'),
    ('thuquy1', 'thuquy1','XXXXXTQ'),
    ('thukho1', 'thukho1','XXXXXTK');