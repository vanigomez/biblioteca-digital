import Author from "../../models/authorModel";

export const deleteAuthor=async(req,res)=>{
    try{
        const {id}=req.params;
        const author=await Author.findOneAndDelete(id);
        if(!author){
            return res.status(404).json({message:"Autor no encontrado."});
        }
        res.status(204).json({message:"Autor eliminado."});
    }catch(error){
        res.status(500).json({message:"Error del servidor."});
    }  
};