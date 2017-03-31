import express from 'express';
import timestamp_function from './utils/timestamp_function';

const app = express();
app.get('/', (req, res) => {
	res.send('Hello World');
});


app.get('/:param', (req, res) => {
	res.send(timestamp_function(req.params.param));
} );

export default app;
