const Sequelize = require("sequelize");
const NotificationsDB = require("../config/notificationDB");

/*
  modeling the schema/table for phone book model.
*/
const Notifications = NotificationsDB.define("tbl_notification_detail", {
  recipient: Sequelize.STRING,
  cc: Sequelize.STRING,
  bcc: Sequelize.STRING,
  sender: Sequelize.STRING,
  subject: Sequelize.STRING,
  message: Sequelize.STRING,
  deliveryConfirmation: Sequelize.STRING
});

const arr = [
  {
    sender: "mail2me@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "abc@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "fashion@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "techblog@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "playcricket@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "bookyourticket@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "paywithus@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "pickyourjourney@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "worldtour@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  },
  {
    sender: "techrecruiter@test.com",
    recipient: "mail2me@test1.com",
    cc: "mail2me@test2.com",
    bcc: "mail2me@test3.com",
    subject: "Meeting Remainder",
    message:
      "Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail",
    deliveryConfirmation: "delivered"
  }
];

const NotificationSync = ({ force = false } = { force: false }) => {
  Notifications.sync({ force })
    .then(() => {
      Notifications.bulkCreate(arr).then(result => {
        console.log(result);
      });
    })

    .catch(console.error);
};

exports.Notifications = Notifications;
exports.NotificationSync = NotificationSync;
