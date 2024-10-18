import express from 'express';
import { calculateController } from './controllers/CalculateController.js';

const app = express();
app.use(express.json());

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

app.get('/', (_req, res) => {
    res.send('This is my server using the ES6 syntax')
});

app.post('/agent', calculateController);


