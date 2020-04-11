const express=require('express');
const bookRouter = express.Router();

const{MongoClient,ObjectID}=require('mongodb');



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
]

bookRouter.route('/')
.get((req,res)=>{
    const url='mongodb://localhost:27017' //finding book with its ID 
    const dbName='LibraryApp';
    (async function getbooks(){
      let client;
      try {
          client=await MongoClient.connect(url)//waiting for the mongo to connec tot the client
      console.log('database connected succesful');
      const db=clint.db(dbName);
      const col = await db.collection('books');
      const books = await db.colllection('books');//getting all books
        } catch (error) {
          console.log(err.stack)
      }
    })
    res.render(
'books',
{
     nav,//[{link:'/books',title:'Book'},
         //{link:'/authors',title:'Author'}],

    title:'Library',
    books
    }
    );

});

bookRouter.route('/:id')
.get((req,res)=>{
    const{id}=req.params;
    const url='mongodb://localhost:27017' //finding book with its ID 
    const dbName='LibraryApp';
    (async function getOnebook(){
    let client;
      try {
          client=await MongoClient.connect(url)//waiting for the mongo to connec tot the client
      console.log('database connected succesful');
      const db=client.db(dbName);
      const col = await db.collection('books');
      const book =await col.findOne({_id: new ObjectID(id)});//getting one books
      res.render(
        'bookView',
        {  
            nav,//[{link:'/books',title:'Book'},
            //{link:'/authors',title:'Author'}],
   
            title:'Library',
            book
       }
       );
    } catch (error) {
          console.log(err.stack)
        }
      }());
    
   

});

module.exports=bookRouter;