class AppController {
	homePage(req, res) {
		res.render("home", { name: "David" });
	}
}

module.exports = new AppController();
