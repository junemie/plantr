const sq = require('sequelize');
const db = new sq('postgres://localhost:5432/plantr');

const plantrTable = db.define('plantr')


.then(() => {
    db.sync({force: true});
}) .catch (err => {
    db.close();
})

module.exports = db;