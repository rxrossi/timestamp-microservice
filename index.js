import app from './src/';

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App running at port ${port}`);
});
