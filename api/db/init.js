import UserModel from "../models/user/index.js";
import sequelize from "./config.js";

const syncDB = async () => {
//   await sequelize.sync({ alter: true, force: true });
  await UserModel.sync({ alter: true, force: false });
};

export default syncDB;
