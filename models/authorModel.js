import mongoose from "mongoose";
import Book from "./bookModel";

const AuthorSchema=new mongoose.Schema({
  name:{type:String, required:true},
  birthDate:{
    type: Date,
    validate:{
      validator:(value)=> value < new Date(),
      message:"No pueden ser años actuales",
    }
  }, nationality:{type: String},
});

AuthorSchema.post("findOneAndDelete",async function (doc) {
  try{
    if (doc){
      await Book.deleteMany({author:doc._id});
    }
  }catch (err){
    console.error("Error al eliminar libros relacionados al autor:",err);
  }  
});

const Author=mongoose.model("author",AuthorSchema);

export default Author;