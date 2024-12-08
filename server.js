import mongoose from "mongoose";
import app from "./app.js";
import { MONGO_URI, PORT } from "./config/config.js";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error(`Failed to start server: ${err.message}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));
  
 
  