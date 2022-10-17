function customFunction(req, res, next) {
	const { entrypoints } = require("../public/assets/entrypoints.json");
	res.locals.entryPointStyles = (name) => entrypoints[name].css.map((url) => `<link rel="stylesheet" href="${url}">`);
	res.locals.entryPointScripts = (name) => entrypoints[name].js.map((url) => `<script src="${url}" defer></script>`);
	next();
}

module.exports = customFunction;
