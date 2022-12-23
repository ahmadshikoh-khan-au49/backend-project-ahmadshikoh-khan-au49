const express = require('express') 
const dotenv = require('dotenv')
dotenv.config()



const { getBooking, getBookingByID, postBooking, updateBookingById, deleteBookingByID } = require('./controllers/bookingControllers')

const app = express()

app.use(express.json())

app.use(express.static("./public"))
app.use(express.urlencoded())

// // app.get("/",(req,res)=>{
//   res.sendFile("C:\Users\hp\Desktop\projectRepo\backend-project-ahmadshikoh-khan-au49\public\coff.html")
// // })
app.get('/booking', getBooking)
app.get('/booking/:bookingID', getBookingByID)
app.post('/booking', postBooking)
app.put('/booking/:bookingID', updateBookingById)
app.delete('/booking/:bookingID', deleteBookingByID)

//global obj to access all env. variables
// console.log(process.env)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})
