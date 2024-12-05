import mongoose, {Schema} from "mongoose";
import Book from "./bookModel";

const AuthorSchema= new mongoose.Schema({
    name:{type: String, required: true},
    birthDate:{type: Date},
    nationality:{type:String},
});

AuthorSchema.post("findOneAndDelete", async function (doc) {
    await Book.deleteMany({ author: doc._id });
  });

const Author=mongoose.model('author',AuthorSchema);

export default Author;