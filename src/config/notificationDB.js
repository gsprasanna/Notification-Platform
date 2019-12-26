require("dotenv").config();
const Sequelize = require("sequelize");
const NotificationDB = new Sequelize(process.env.DB_URL);

NotificationDB.authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully with the notification-platform database."
    );
  })
  .catch(err => {
    console.error(
      "Unable to connect to the notification-platform database:",
      err
    );
  });

module.exports = NotificationDB;
