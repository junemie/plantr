const sq = require("sequelize");
const db = new sq("postgres://localhost:5432/plantr");
//.define => we are defining the table model. VERY IMPORTANT
const plantrTable = db.define("plantr");

// .then(() => {
//     db.sync({force: true});
// }) .catch (err => {
//     db.close();
// })

module.exports = db;
