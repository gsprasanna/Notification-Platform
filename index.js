require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
let nodemailer = require("nodemailer");
const { Notifications } = require("./src/models/Notifications");

/**
 * Creates an instance of the express server
 */
const app = express();

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mymailID,
    pass: process.env.myPassword
  }
});

// sending emails at periodic intervals (2 minutes)
cron.schedule("*/2 * * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    sender: process.env.mymailID,
    to: process.env.recipients,
    cc: process.env.cc,
    bcc: process.env.bcc,
    subject: `Meeting Remainder`,
    text: `Hi there, You are having the important meeting today. This email was automatically generated. Don't reply back to this mail`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      insertToDB("Mail not sent!");
      throw error;
    } else {
      console.log("Email successfully sent!");
      insertToDB("Mail Delivered");
    }
  });
  const insertToDB = (status = "") => {
    const notificationDetails = {
      recipient: mailOptions.to,
      cc: mailOptions.cc,
      bcc: mailOptions.bcc,
      sender: mailOptions.from,
      subject: mailOptions.subject,
      message: mailOptions.text,
      deliveryConfirmation: status
    };
    Notifications.create(notificationDetails)
      .then(result => {
        console.log(result.get());
      })
      .catch(console.error);
  };
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port: ", server.address().port);
});
