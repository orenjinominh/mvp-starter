var mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const covidDataByStateAndRaceSchema = mongoose.Schema({
  date: Number,
  state: String,
  deaths_total: Number,
  deaths_White: Number,
  deaths_Black: Number,
  deaths_LatinX: Number,
  deaths_Asian: Number,
  deaths_NHPI: Number,
  deaths_Multiracial: Number,
  deaths_Others: Number,
  deaths_Unknown: Number
});

const StateInfo = mongoose.model('StateInfo', covidDataByStateAndRaceSchema);


module.exports = StateInfo;