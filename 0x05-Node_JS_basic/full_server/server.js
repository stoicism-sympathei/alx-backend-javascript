import express from 'express';
import indexRouter from './routes/index';

const app = express();
const port = 1245;

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;

