const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieumuonsach', {
    maphieumuon: {
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
    ngaymuon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phieumuonsach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maphieumuon" },
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
