const mongoose = require("mongoose");


const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
   
    
  },
  date: {
    type: String,
   
  },
  time: {
    type: String,
    
  },
  email: {
    type: String,
    
   
  },
  phone: {
    type: String,
  
    // minLength: [11, "Phone number must contain 11 Digits."],
    // maxLength: [11, "Phone number must contain 11 Digits."],
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
