const { NotificationSync } = require("../models/Notifications");

// Synchronization of model with database
NotificationSync({ force: true });
