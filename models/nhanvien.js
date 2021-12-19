const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nhanvien', {
    manv: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    hoten: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ngaysinh: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bangcap: {
      type: DataTypes.ENUM('Tú Tài','Cao Đẳng','Trung Cấp','Đại Học','Thạc Sĩ','Tiến Sĩ'),
      allowNull: true
    },
    bophan: {
      type: DataTypes.ENUM('Thủ Thư','Thủ Kho','Thủ Quỹ','Ban Giám Đốc'),
      allowNull: true
    },
    chucvu: {
      type: DataTypes.ENUM('Giám Đốc','Phó Giám Đốc','Trưởng Phòng','Phó Phòng','Nhân Viên'),
      allowNull: true
    },
    diachi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dienthoai: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    anhdaidien: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nhanvien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "manv" },
        ]
      },
    ]
  });
};
