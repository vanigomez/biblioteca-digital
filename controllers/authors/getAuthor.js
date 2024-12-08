import Author from "../../models/authorModel.js";

export const getAuthors = async (_, res) => {
  const authors = await Author.find();
  if (!authors.length) {
    return res.status(404).json({ message: "Autor no encontrado." });
  }
  res.status(200).json(authors);
};