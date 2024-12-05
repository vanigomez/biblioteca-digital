import Book from "../../models/bookModel";

export const updateBook=async(req,res)=>{
    try{
        const {id}=req.params;
        const book=await Book.findOneAndUpdate(id);
        if(!book){
            return res.status(404).json({message:"Libro no encontrado."});
        }
        res.status(200).json({message:"Libro actualizado."});
    }catch(error){
        res.status(500).json({message:"Error del servidor."});
    }  
};