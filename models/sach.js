const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sach', {
    masach: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    tensach: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    theloai: {
      type: DataTypes.ENUM('A','B','C'),
      allowNull: true
    },
    nhaxuatban: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    namxuatban: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ngaynhap: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tacgia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trigia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    nguoitiepnhan: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    anhbia: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "masach" },
        ]
      },
      {
        name: "nguoitiepnhan",
        using: "BTREE",
        fields: [
          { name: "nguoitiepnhan" },
        ]
      },
    ]
  });
};
