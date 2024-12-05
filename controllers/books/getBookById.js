import Book from "../../models/bookModel";

export const getBookById=(req,res)=>{
    const {id}=req.params;
    console.log=Book.getBookById({id});
    const book=Book.getById(id);
    if(!book){
        return res.status(404).json({message: "Libro no encontrado."});
    }
    res.status(200).json(book);
};