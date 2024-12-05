import Book from "../../models/bookModel.js";

const validSordFields=["publicationYear", "title", "author"];
export const getBooks=async(req, res)=>{
    try{
        const{
            page,
            pageSize,
            title,
            sortBy="publicationYear",
            order="desc",
            year,
            startYear,
            endYear,
        }=req.query;
        if(!validSordFields.includes(sortBy)){
            return res.status(400).json({message:"Error"});
        }
        if (title){
            filters.title={$regex:"title", $options:"i"};
        }
        if (year){
            filters.publicationYear=parseInt(year, 10);
        }else if (startYear && endYear){
            filters.publicationYear={$gte:parseInt(startYear, 10), $lte:parseInt(endYear, 10)};
        }
        const options={
            page:parseInt(page, 10),
            limit: parseInt(pageSize, 10),
            sort: {[sortBy]:order==="desc"?-1:1},
        };

        const books= await Book.paginate(filters, options);
        res.status(200).json({
            data:books.docs,
            meta:{
                currentPage:books.page,
                totalPage:books.totalPages,
                totalDocuments:books.totalDocs,
                limit:books.limit,
                hasNextPage:books.hasNextPage,
                hasPrevPage:books.hasPrevPage,
            },
        });
    }catch(error){
        console.error("Error al obtener libros:",error);
        res.status(500).json({message:"Error al obtener libros",error:error.message});
    }
};