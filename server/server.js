import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './model/Product.model.js'; // fix import path
import cors from 'cors';
import mongoose from 'mongoose';
import productRoutes from './routes/Product.routes.js'; // fix import path
// import path from 'path';

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// console.log(process.env.MONGO_URI);

// const __dirname = path.resolve();

app.use('/api/products', productRoutes);


// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/client/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// 	});
// }

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
    process.exit(1);
  }
})();

