// server.js
import express from 'express'
import cors from 'cors'
import auth from './routes/auth.js'
import connectDb from './middleware/mongoose.js';
import * as dotenv from 'dotenv' 
import multer from 'multer';

const app = express();
const port = 3000;
app.use(cors());
dotenv.config()
// Define a route
// app.set('baseUrl', baseUrl);

const DATABASE_URL = process.env.DATABASE_URL;
// console.log(DATABASE_URL,'url')
app.use(express.json());
connectDb("mongodb+srv://rohangotwal:rohan123@cluster0.nvvzqtz.mongodb.net/?retryWrites=true&w=majority");
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api/auth",auth);
// Start the server
// const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
