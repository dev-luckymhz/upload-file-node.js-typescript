import express, { Application } from 'express';
import path from 'path';
import fileRoute from './routes/fileRoute';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use('/api', fileRoute);

// Serve the upload form
app.get('/', (req, res) => {
    res.render('uploadForm');
});

app.listen(PORT, () => {
    console.log(`Server is running on <http://localhost>:${PORT}`);
});