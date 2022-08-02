"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Room }) {
      this.belongsTo(Room, {
        foreignKey: "Player_fk",
      });
    }
  }
  Player.init(
    {
      Email: DataTypes.STRING,
      Username: DataTypes.STRING,
      Phone: DataTypes.STRING,
      Password: DataTypes.STRING,
      Fullname: DataTypes.STRING,
      UserTypeId: DataTypes.INTEGER,
      FacebookId: DataTypes.STRING,
      GoogleEmail: DataTypes.STRING,
      FacebookToken: DataTypes.STRING,
      FacebookFirstname: DataTypes.STRING,
      FacebookLastname: DataTypes.STRING,
      FacebookEmail: DataTypes.STRING,
      FacebookPicture: DataTypes.STRING,
      GoogleName: DataTypes.STRING,
      GooglePicture: DataTypes.STRING,
      AppleEmail: DataTypes.STRING,
      AppleFamilyName: DataTypes.STRING,
      AppleGivenName: DataTypes.STRING,
      AppleUserIdentifier: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
