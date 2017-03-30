import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/:param', (req, res) => {
	res.send(req.params);
} );

app.listen(3000, ()=> console.log('Timestamp listening at 3000!'));

