import mongoose, { Schema } from "mongoose";
import Author from './authorModel';
import mongoose from "mongoose-paginate-v2";

const BookSchema= new mongoose.Schema({
    title:{type:String, required:true},
    genre:{type:String},
    publicationYear:{type:Date},
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    image: {type: String},//url de la imagen
});

BookSchema.post("save", async (doc) => {
    await Author.findByIdAndUpdate(doc.author, { $inc: { booksCount: 1 } });
  });
  
BookSchema.post("findOneAndDelete", async (doc) => {
    if (doc.author) {
      await Author.findByIdAndUpdate(doc.author, { $inc: { booksCount: -1 } });
    }
  });
  
BookSchema.plugin(moongosePaginate);

const Book =mongoose.model('Book',BookSchema);

export default Book;