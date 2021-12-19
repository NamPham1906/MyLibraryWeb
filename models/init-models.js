var DataTypes = require("sequelize").DataTypes;
var _chitietthanhlysach = require("./chitietthanhlysach");
var _docgia = require("./docgia");
var _nhanvien = require("./nhanvien");
var _phieumatsach = require("./phieumatsach");
var _phieumuonsach = require("./phieumuonsach");
var _phieuthutienphat = require("./phieuthutienphat");
var _phieutrasach = require("./phieutrasach");
var _sach = require("./sach");
var _sachthuocphieumuon = require("./sachthuocphieumuon");
var _taikhoan = require("./taikhoan");
var _thanhlysach = require("./thanhlysach");

function initModels(sequelize) {
  var chitietthanhlysach = _chitietthanhlysach(sequelize, DataTypes);
  var docgia = _docgia(sequelize, DataTypes);
  var nhanvien = _nhanvien(sequelize, DataTypes);
  var phieumatsach = _phieumatsach(sequelize, DataTypes);
  var phieumuonsach = _phieumuonsach(sequelize, DataTypes);
  var phieuthutienphat = _phieuthutienphat(sequelize, DataTypes);
  var phieutrasach = _phieutrasach(sequelize, DataTypes);
  var sach = _sach(sequelize, DataTypes);
  var sachthuocphieumuon = _sachthuocphieumuon(sequelize, DataTypes);
  var taikhoan = _taikhoan(sequelize, DataTypes);
  var thanhlysach = _thanhlysach(sequelize, DataTypes);

  phieumuonsach.belongsToMany(sach, { as: 'masach_sach_sachthuocphieumuons', through: sachthuocphieumuon, foreignKey: "maphieumuon", otherKey: "masach" });
  sach.belongsToMany(phieumuonsach, { as: 'maphieumuon_phieumuonsaches', through: sachthuocphieumuon, foreignKey: "masach", otherKey: "maphieumuon" });
  sach.belongsToMany(thanhlysach, { as: 'mathanhly_thanhlysaches', through: chitietthanhlysach, foreignKey: "masach", otherKey: "mathanhly" });
  thanhlysach.belongsToMany(sach, { as: 'masach_saches', through: chitietthanhlysach, foreignKey: "mathanhly", otherKey: "masach" });
  phieumatsach.belongsTo(docgia, { as: "madocgia_docgium", foreignKey: "madocgia"});
  docgia.hasMany(phieumatsach, { as: "phieumatsaches", foreignKey: "madocgia"});
  phieumuonsach.belongsTo(docgia, { as: "madocgia_docgium", foreignKey: "madocgia"});
  docgia.hasMany(phieumuonsach, { as: "phieumuonsaches", foreignKey: "madocgia"});
  phieuthutienphat.belongsTo(docgia, { as: "madocgia_docgium", foreignKey: "madocgia"});
  docgia.hasMany(phieuthutienphat, { as: "phieuthutienphats", foreignKey: "madocgia"});
  phieutrasach.belongsTo(docgia, { as: "madocgia_docgium", foreignKey: "madocgia"});
  docgia.hasMany(phieutrasach, { as: "phieutrasaches", foreignKey: "madocgia"});
  docgia.belongsTo(nhanvien, { as: "nguoilapthe_nhanvien", foreignKey: "nguoilapthe"});
  nhanvien.hasMany(docgia, { as: "docgia", foreignKey: "nguoilapthe"});
  phieumatsach.belongsTo(nhanvien, { as: "nguoighinhan_nhanvien", foreignKey: "nguoighinhan"});
  nhanvien.hasMany(phieumatsach, { as: "phieumatsaches", foreignKey: "nguoighinhan"});
  phieuthutienphat.belongsTo(nhanvien, { as: "nguoithu_nhanvien", foreignKey: "nguoithu"});
  nhanvien.hasMany(phieuthutienphat, { as: "phieuthutienphats", foreignKey: "nguoithu"});
  sach.belongsTo(nhanvien, { as: "nguoitiepnhan_nhanvien", foreignKey: "nguoitiepnhan"});
  nhanvien.hasMany(sach, { as: "saches", foreignKey: "nguoitiepnhan"});
  taikhoan.belongsTo(nhanvien, { as: "manv_nhanvien", foreignKey: "manv"});
  nhanvien.hasMany(taikhoan, { as: "taikhoans", foreignKey: "manv"});
  thanhlysach.belongsTo(nhanvien, { as: "nguoithanhly_nhanvien", foreignKey: "nguoithanhly"});
  nhanvien.hasMany(thanhlysach, { as: "thanhlysaches", foreignKey: "nguoithanhly"});
  sachthuocphieumuon.belongsTo(phieumuonsach, { as: "maphieumuon_phieumuonsach", foreignKey: "maphieumuon"});
  phieumuonsach.hasMany(sachthuocphieumuon, { as: "sachthuocphieumuons", foreignKey: "maphieumuon"});
  sachthuocphieumuon.belongsTo(phieutrasach, { as: "maphieutra_phieutrasach", foreignKey: "maphieutra"});
  phieutrasach.hasMany(sachthuocphieumuon, { as: "sachthuocphieumuons", foreignKey: "maphieutra"});
  chitietthanhlysach.belongsTo(sach, { as: "masach_sach", foreignKey: "masach"});
  sach.hasMany(chitietthanhlysach, { as: "chitietthanhlysaches", foreignKey: "masach"});
  phieumatsach.belongsTo(sach, { as: "masach_sach", foreignKey: "masach"});
  sach.hasMany(phieumatsach, { as: "phieumatsaches", foreignKey: "masach"});
  sachthuocphieumuon.belongsTo(sach, { as: "masach_sach", foreignKey: "masach"});
  sach.hasMany(sachthuocphieumuon, { as: "sachthuocphieumuons", foreignKey: "masach"});
  chitietthanhlysach.belongsTo(thanhlysach, { as: "mathanhly_thanhlysach", foreignKey: "mathanhly"});
  thanhlysach.hasMany(chitietthanhlysach, { as: "chitietthanhlysaches", foreignKey: "mathanhly"});

  return {
    chitietthanhlysach,
    docgia,
    nhanvien,
    phieumatsach,
    phieumuonsach,
    phieuthutienphat,
    phieutrasach,
    sach,
    sachthuocphieumuon,
    taikhoan,
    thanhlysach,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
