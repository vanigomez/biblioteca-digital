import Book from "../../models/bookModel";

export const deleteBook=async(req,res)=>{
    try{
        const {id}=req.params;
        const book=await Book.findOneAndDelete(id);
        if(!book){
            return res.status(404).json({message:"Libro no encontrado."});
        }
        res.status(204).json({message:"Libro eliminado."});
    }catch(error){
        res.status(500).json({message:"Error del servidor."});
    }  
};