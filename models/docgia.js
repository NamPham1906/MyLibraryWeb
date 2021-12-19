const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docgia', {
    madocgia: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    hoten: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    loaidocgia: {
      type: DataTypes.ENUM('X','Y'),
      allowNull: true
    },
    ngaysinh: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    diachi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ngaylapthe: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nguoilapthe: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    tongno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    anhdaidien: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docgia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "madocgia" },
        ]
      },
      {
        name: "nguoilapthe",
        using: "BTREE",
        fields: [
          { name: "nguoilapthe" },
        ]
      },
    ]
  });
};
