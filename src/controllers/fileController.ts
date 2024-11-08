import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const uploadFile = (req: Request, res: Response): void => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    const filePath = path.join(__dirname, '../../', req.file.path);

    // Set headers for file streaming
    res.setHeader('Content-Type', req.file.mimetype);
    res.setHeader('Content-Disposition', `attachment; filename="${req.file.originalname}"`);

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on('error', (error) => {
        console.error('File streaming error:', error);
        res.status(500).send('Error streaming the file.');
    });
};