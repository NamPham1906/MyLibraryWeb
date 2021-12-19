const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thanhlysach', {
    mathanhly: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    ngaythanhly: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nguoithanhly: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    }
  }, {
    sequelize,
    tableName: 'thanhlysach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mathanhly" },
        ]
      },
      {
        name: "nguoithanhly",
        using: "BTREE",
        fields: [
          { name: "nguoithanhly" },
        ]
      },
    ]
  });
};
