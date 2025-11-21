const express=require('express');
const app=express();

// Middleware to parse JSON
app.use(express.json());

// Import router
const booksRouter=require('./routes/books');

// Use router
app.use('/books',booksRouter);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})