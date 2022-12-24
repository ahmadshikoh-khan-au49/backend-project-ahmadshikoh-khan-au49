const express = require('express') 
const dotenv = require('dotenv')
dotenv.config()



const { getBooking, getBookingByID, postBooking, updateBookingById, deleteBookingByID } = require('./controllers/bookingControllers')

const app = express()

app.use(express.json())

app.use(express.static("./public"))
app.use(express.urlencoded())

app.get('/booking', getBooking)
app.get('/booking/:bookingID', getBookingByID)
app.post('/booking', postBooking)
app.put('/booking/:bookingID', updateBookingById)
app.delete('/booking/:bookingID', deleteBookingByID)


const PORT = process.env.PORT || 8000
app.listen(8000, () => {
  console.log("Server Started Successfully")
})
