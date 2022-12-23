const { MongoClient } = require("mongodb")
 
const dbName = 'coffeeShop'
const collectionName = 'booking'

 async function initDB() {
  const client = new MongoClient(process.env.MONGO_URL)

  try{
    await client.connect()
    const db = client.db(dbName)

    const collection = db.collection(collectionName)
    console.log("DB Conected Successfully")
    return collection
  }catch(err){
    console.log("Error Connection to DB")
  }
 }

 module.exports ={
  initDB
 }