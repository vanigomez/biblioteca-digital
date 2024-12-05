import Book from "../../models/bookModel";

export const creatBook=async (req,res)=>{
    try{
        const {title, genre, publicationDate, author}=req.body;
        const image=req?.files?.image;

        const newBook=newBook({
            title,
            genre,
            publicationDate,
            author,
            image:image?.data,
            imageType:image?.mimetype,
        });

        await newBook.save();
        res.status(201).json(newBook);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Error server."});
    }
};