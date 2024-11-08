import express from 'express';
import fileRoute from './routes/fileRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', fileRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});