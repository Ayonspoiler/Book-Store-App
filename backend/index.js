const express = require("express");
const app=express();
const mongoose=require("mongoose");
const port = process.env.PORT || 5000;
const cors=require('cors')
require("dotenv").config();
//password : VZ36tiEw0t804Jkt 

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true,
}))
const bookRoutes=require('./src/books/book.route')
const orderRoutes=require('./src/orders/order.route')
const userRoutes=require('./src/users/user.route')
const adminRoutes=require('./src/stats/admin.stats')
app.use('/api/books',bookRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/auth',userRoutes);
app.use('/api/admin',adminRoutes)

// IB7gVA3O9yiUa3Eo
async function main() {
  await mongoose.connect(process.env.DB_URL)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.use("/",(req,res)=>{
    res.send("Welcome to the book store");
});
}
main().then(()=>console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`App is running at http://localhost:${port} `);
})