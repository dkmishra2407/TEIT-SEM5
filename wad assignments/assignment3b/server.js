const express = require('express')
const app = express()
const dbconfig = require('./dbconfig/dbconfig')
const routes = require('./routes/UserRoutes')
dbconfig;

app.use(express.json()); // Important to parse JSON body
app.use('/', routes); // This registers the routes


app.get('/',(req,res)=>{
    console.log("Enter to Devansh's Crud App")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})