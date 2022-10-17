const route = require("@forkjs/group-router");
const AppController = require("../controller/AppController");
route.group("", () => {
	route.get("/", AppController.homePage);
	route.get("/about", (req, res) => {
		res.send("About");
	});
	route.get("/sign-up", (req, res) => {
		res.send("Sign up Page");
	});
});

module.exports = route.router;
