const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "data")));

app.listen(8080, () => {
	console.log("Server started on port 8080");
});
