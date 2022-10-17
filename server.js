require("dotenv");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { config, engine } = require("express-edge");
const path = require("path");
const customFunction = require("./utils/customEdgeTemplateFunctions");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
config({ cache: process.env.NODE_ENV === "production" });
app.use(engine);

app.set("views", path.join(process.cwd(), "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(customFunction);
fs.readdirSync("./routes/")
	.filter((e) => {
		return e.endsWith(".js");
	})
	.forEach((file) => {
		let name = file.substring(0, file.length - 3);
		name = name == "index" ? "" : name;
		app.use("/" + name, require("./routes/" + name));
	});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening at http://0.0.0.0:%s", port));

module.exports = app;
