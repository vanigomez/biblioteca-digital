import mongoose from "mongoose";
import app from "./app.js";

const PORT=3000;

mongoose.connect("mongodb://localhost:27017/books")
.then(()=>console.log("Base de datos conectada"))
.catch((error)=>console.log(error));

app.listen(PORT, ()=>console.log('Servidor funcionando.'));