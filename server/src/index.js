import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/:param', (req, res) => {
	console.log(req.params.param);
	const date = new Date (req.params.param);
	res.send(date.toString());
} );

export default app;
