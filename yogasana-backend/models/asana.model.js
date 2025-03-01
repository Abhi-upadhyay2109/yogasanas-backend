const mongoose = require('mongoose');

const asanaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 5 },
  category: String,
  image: String,
  ratings: [Number],
});


const AsanModel = mongoose.model("Asana", asanaSchema);

module.exports = AsanModel;