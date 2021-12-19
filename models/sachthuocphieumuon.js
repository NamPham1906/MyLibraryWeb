const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sachthuocphieumuon', {
    maphieutra: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'phieutrasach',
        key: 'maphieutra'
      }
    },
    maphieumuon: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phieumuonsach',
        key: 'maphieumuon'
      }
    },
    masach: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sach',
        key: 'masach'
      }
    }
  }, {
    sequelize,
    tableName: 'sachthuocphieumuon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maphieumuon" },
          { name: "masach" },
        ]
      },
      {
        name: "maphieutra",
        using: "BTREE",
        fields: [
          { name: "maphieutra" },
        ]
      },
      {
        name: "masach",
        using: "BTREE",
        fields: [
          { name: "masach" },
        ]
      },
    ]
  });
};
