const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieutrasach', {
    maphieutra: {
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
    ngaytra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tientra: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phieutrasach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maphieutra" },
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
