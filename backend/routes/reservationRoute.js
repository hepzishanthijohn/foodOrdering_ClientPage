const express = require('express');
const router = express.Router();

const Reservation = require('../models/ReservationModel');

router.post("/send",async (req, res) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    
    if (!firstName || !lastName || !email || !date || !time || !phone){
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }
  
    try {
      await Reservation.create({ firstName, lastName, email, date, time, phone });
      res.status(200).json({
        success: true,
        message: "Reservation Sent Successfully!",
      });
    } catch (error) {
        console.log(error)
      }
  
  })

module.exports = router