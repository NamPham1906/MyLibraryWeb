const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieumatsach', {
    maphieumatsach: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    masach: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'sach',
        key: 'masach'
      }
    },
    ngayghinhan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    madocgia: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'docgia',
        key: 'madocgia'
      }
    },
    nguoighinhan: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'nhanvien',
        key: 'manv'
      }
    },
    tienphat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phieumatsach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maphieumatsach" },
        ]
      },
      {
        name: "masach",
        using: "BTREE",
        fields: [
          { name: "masach" },
        ]
      },
      {
        name: "madocgia",
        using: "BTREE",
        fields: [
          { name: "madocgia" },
        ]
      },
      {
        name: "nguoighinhan",
        using: "BTREE",
        fields: [
          { name: "nguoighinhan" },
        ]
      },
    ]
  });
};
