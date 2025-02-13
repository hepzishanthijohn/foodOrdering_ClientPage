const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const reservationRoute = require('./routes/reservationRoute');
const userRoute = require('./routes/userRoute')
const uploadRoute = require('./routes/routeUpload');
const productRoute = require('./routes/productRoute')

require("dotenv").config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());

//menu
app.use('/reservation', reservationRoute)
app.use('/users', userRoute)

//admin
app.use("/api/users" , uploadRoute);
app.use("/api/products", productRoute);

//posrt connection 
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

//cloudinary account:  https://cloudinary.com/signup