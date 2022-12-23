// const { ObjectId } = require("mongodb");
const { ObjectId } = require("mongodb");
const { initDB } = require("../dbConfig")

let bookingCollection;
async function getBookingCollection() {
  bookingCollection = await initDB()
}
getBookingCollection()

const getBooking = async(req, res) => {
  try{
  const booking = await bookingCollection.find().toArray()
  res.send({status: "success", booking:booking})
  }
  catch (err){
    console.log("Error fetching data from DB")
    res.status(500).send({status: 'error', msg: 'Error fetching data from DB'})
  }
}

const getBookingByID = async(req, res) => {
  const { bookingID } = req.params
  
  try{
    const booking = await bookingCollection.findOne({_id: new ObjectId(bookingID)})
    res.send({status: "success", booking:booking})
    }
    catch (err){
      console.log("Error fetching data from DB")
      res.status(500).send({status: 'error', msg: 'Error fetching data from DB'})
    }
}

const postBooking = async(req, res) => {
  const bookingData = req.body
  try{
    await bookingCollection.insertOne(bookingData)
    res.status(201).send({ status: 'success' })
  }catch (err){
    res.status(500).send({status: 'error', msg:"error"})
  }
}

const updateBookingById = async(req, res) => {
  const { bookingID }= req.params
  const updateBookingData = req.body
  try{
    await bookingCollection.updateOne({_id: new ObjectId(bookingID)},{ $set: updateBookingData})
    res.send ({status:'Updated Successfully'})
  } catch (err){
    res.status(500).send({status:'error', msg: 'cannot update booking'})
  }
}

const deleteBookingByID = async(req, res) => {
  const { bookingID } = req.params
  try {
    await bookingCollection.deletOne({_id: new ObjectId(bookingID)})
    res.send({status: "Deleted Successfully"})
  } catch (err) {
    res.status(500).send({status: "cannot delete"})
  }
}

module.exports={
  getBooking,
  getBookingByID ,
  postBooking,
  updateBookingById,
  deleteBookingByID
}