const cache = new Set();
module.exports = (req, res, next) => {
	const key = req.originalUrl | req.url;
	next();
};
