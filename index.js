// server.js
import express from 'express'
import cors from 'cors'
import path from 'path'
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
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // ... other routes and middleware


// // New route for downloading a file by filename
// app.get('/download/:filename', (req, res) => {
//   try {
//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, 'uploads', filename);


//     // Check if the file exists
//     if (fs.existsSync(filePath)) {
//       // Set the appropriate headers for download
//       res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
//       res.setHeader('Content-Type', 'application/octet-stream');


//       // Create a readable stream from the file and pipe it to the response
//       const fileStream = fs.createReadStream(filePath);
//       fileStream.pipe(res);
//     } else {
//       // If the file doesn't exist, send a 404 response
//       res.status(404).send('File not found');
//     }
//   } catch (error) {
//     console.error('Error downloading file:', error);
//     res.status(500).send('Internal server error');
//   }
// });


app.use("/api/auth",auth);
// Start the server
// const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
