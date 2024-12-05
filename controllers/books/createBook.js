import Book from "../../models/bookModel.js";

export const createBook=async (req,res)=>{
    try{
        const {title,summary, genre, publicationYear, author}=req.body;
        const image=req?.files?.image;

        if (!title || !summary || !genre || !publicationYear || !author){
            return res.status(400).json({message: "Todos lo campos son obligatorios."});
        }
        //crear una nueva instancia del modelo
        const newBook=new Book({
            title,
            summary,
            genre,
            publicationYear,
            author,
            image:image?.data,
            imageType:image?.mimetype,
        });
        //guardar en la base de datos
        await newBook.save();
        //responder con el nuevo libro
        res.status(201).json(newBook);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Error en el servidor."});
    }
};