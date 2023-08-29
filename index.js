const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

 
async function main() {
  const client = new MongoClient("mongodb://localhost:27017")
 
  try {
    await client.connect()
    console.log("Connected to MongoDB")
 
    const db = client.db("vidly")
    const collection = db.collection("customers")
 
    const document = { name: "John Doe", age: 30, email: "johndoe@example.com" }
    const result = await collection.insertOne(document)

    const doc = await collection.find({}).toArray()
 
    console.log("Document inserted successfully", result)
    console.log(doc)
  } catch (err) {
    console.error("Error:", err)
  } finally {
    await client.close()
    console.log("Connection closed")
  }
}
 
main()
