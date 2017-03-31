import express from "express";
import timestamp_function from "./utils/timestamp_function";
import path from "path";

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/:param', (req, res) => {
	res.send(timestamp_function(req.params.param));
} );

export default app;
