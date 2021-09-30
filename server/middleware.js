const NodeCache = require('node-cache');
const cache = new NodeCache();
module.exports = (req, res, next) => {
	const key = req.originalUrl || req.url;
	if (cache.get(key)) {
		return res.send(cache.get(key));
	} else {
		res.bodyResponse = res.send;
		res.send = body => {
			cache.set(key, body, 60 * 60 * 12);
			res.bodyResponse(body);
		};
	}
	next();
};
