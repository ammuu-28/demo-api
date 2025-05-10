import express from 'express';
import { expressAnalytics } from 'node-api-analytics';
import { calculateController } from './controllers/CalculateController.js';

const app = express();
app.use(express.json());
app.use(expressAnalytics('af820518-2bf0-4369-990e-37e75426a2e7'));

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

app.get('/', (_req, res) => {
    res.send('This is my server using the ES6 syntax')
});

app.post('/agent', calculateController);


