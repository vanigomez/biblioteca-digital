import Author from "../../models/authorModel";

export const updateAuthor=async(req,res)=>{
    try{
        const {name, birthDate, nationality}=req.body;
        if(!name || !birthDate || !nationality){
            return res.status(400).json({message: "Todos los campos son obligatorios."});
        }
        const Author={name, birthDate, nationality};
        const updatedAuthor=await Author.findOneAndUpdate(
            {_id:req.body._id},
            Author,
            {new: true}
        );
        if (!updatedAuthor){
            return res.status(404).json({message:"Autor no encontrado."});
        }
        res.status(200).json(updatedAuthor);
    }catch (error){
        console.log(error);
        res.status(500).json({message:"Error del servidor."});
    }
};