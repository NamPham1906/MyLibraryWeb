const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietthanhlysach', {
    mathanhly: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'thanhlysach',
        key: 'mathanhly'
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
    },
    lydothanhly: {
      type: DataTypes.ENUM('Mất','Hư Hỏng','Người Dùng Làm Mất'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chitietthanhlysach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mathanhly" },
          { name: "masach" },
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
