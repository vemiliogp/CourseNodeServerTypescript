import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "149932099", {
  host: "localhost",
  dialect: "mysql",
  //   logging: false,
});

export default db;