import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { dbConnect } from './dbConnect/dbConnect.js';
import cors from 'cors';
import router from './Routes/mediaRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

dotenv.config();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

// Your API routes
app.use(router);

// Serve static files from the React app build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all handler to send back React's index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
  dbConnect();
});
