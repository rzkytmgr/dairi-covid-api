const { HOST } = require("./constants");

const success = {
	status: "ok",
	code: 200,
	message: "success",
};

const error = {
	status: "error",
	code: 404,
	message: "kamu tersesat, segera kembali ke jalan yang benar. create issues here https://github.com/rzkytmgr/dairi-covid-api , thank you!",
};

const introduction = {
	documentation: "https://github.com/rzkytmgr/dairi-covid-api",
	maintainers: "Rizky Aulia Tumangger | rzkytmgr",
	contact: {
		email: "rzkytmgr[at]gmail.com",
		github: "https://github.com/rzkytmgr",
		instagram: "https://instagram.com/rzkytmgr",
	},
};

module.exports = { success, error, introduction };
