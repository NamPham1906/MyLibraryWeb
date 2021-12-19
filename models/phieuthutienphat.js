const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieuthutienphat', {
    maphieuthu: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    madocgia: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'docgia',
        key: 'madocgia'
      }
    },
    tienthu: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    nguoithu: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    }
  }, {
    sequelize,
    tableName: 'phieuthutienphat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maphieuthu" },
        ]
      },
      {
        name: "nguoithu",
        using: "BTREE",
        fields: [
          { name: "nguoithu" },
        ]
      },
      {
        name: "madocgia",
        using: "BTREE",
        fields: [
          { name: "madocgia" },
        ]
      },
    ]
  });
};
