const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taikhoan', {
    tentaikhoan: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    matkhau: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    manv: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    }
  }, {
    sequelize,
    tableName: 'taikhoan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tentaikhoan" },
        ]
      },
      {
        name: "manv",
        using: "BTREE",
        fields: [
          { name: "manv" },
        ]
      },
    ]
  });
};
