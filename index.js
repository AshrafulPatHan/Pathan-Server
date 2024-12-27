require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const port = process.env.PORT || 5222 ;
const app = express() ;

app.use(cors());
app.use(express.json()) ;



app.get('/',(req,res) =>{
    res.send('Server is running in home')
})

app.listen(port,()=>{
    console.log(`port is running : ${port}`);
})




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PAS}@cluster0.zxihh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(process.env.DB_USER,"thar is name");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // user data
    const db = client.db('Pathan-Sopice');
    const userCollection = db.collection('userData');
    const userDataCollection = db.collection('userLogData');
// all data
    const oneCollection = db.collection('AllData');



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

// nodemon index.js
