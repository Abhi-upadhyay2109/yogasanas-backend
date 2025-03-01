const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  asanaId: { type: mongoose.Schema.Types.ObjectId, ref: "Asana" },
  count: Number,
  timestamp: { type: Date, default: Date.now },
});

const ActivityModel = mongoose.model("Activity", activitySchema);

module.exports = ActivityModel;