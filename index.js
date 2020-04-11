const express = require('express');
const app=express();
app.set('views','./views')
app.set('view engine,ejs')

const bookRouter=require('./routes/bookRoutes')(nav);
const adminRouter=require('./routes/adminRouter')(nav);

app.use('/admin',adminRouter);
app.use('/book',bookRouter);

const nav=[{
    link:'/books',title:'Books'},
{link:'/authors',title:'Author'}];

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



var server = app.listen(3000, function() {
    console.log('Server started');
    });