const express = require('express');
const app=express();
app.set('views','./views')
app.set('view engine,ejs')

const bookRouter=epress.Router();
app.use('/book',bookRouter);


app.get('/',(req,res)=>{
res.render(
    'app',
    {
        nav:[{link:'/book',title:'Books'},
              {link:'/authors',title:'Author'}],
           title:'Library'
    }

);

})

bookRouter.route('/') //routes help us capsulate our 
.get((req,res)=>{
    res.send('hello word');
})
bookRouter.route('/single bool')
.get((req,res)=>{
    res.send('am a single book')
})

var server = app.listen(3000, function() {
    console.log('Server started');
    });