const express = require('expresss');
const adminRouter=express.Router();
const {MongoClient}=require('mongodb');
const books=[{
    title:'ma who hddd',
    author:'johnn vade'
    },
    {
        title:'we are all',
        author:'am the lucky'
    },
    {
        title:'ma who rosd',
        author:'ack bicke'
    },
    ],
function router(nav){
adminRouter.router('/')
.get((req,res)=>{ //inserting books
const url='mongodb://localhost:2707';
const dbName='libraryApp';
(async function madoka(){
let client;
try {
    client=await MongoClient.connect(url)
    debug('Connected correctly to server');
    const db=client.db(dbName);
  
  const response =await db.collection('books').insertMany(books);
res.json(response)
} catch (err) {
console.log(err.stack);
    
}
client.close
}());
res.send("inserting books");

});

return adminRouter;
}
module.exports=router;