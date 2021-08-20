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
	endpoint: {
		home: HOST,
		semuaData: HOST + "data",
		dataPerId: HOST + "data/{:id}",
		dataPerTanggal: HOST + "data/{:tanggal}",
		daftarKecamatan: HOST + "data/kecamatan",
		perKecamatanId: HOST + "data/{:id}/{:idKecamatan}",
		perKecamatanNama: HOST + "data/{:id}/{:namaKecamatan}",
		kecamatanTanggal: HOST + "data/{:id}/{:tanggal}/{:namaKecamatan}",
	},
	maintainers: "Rizky Aulia Tumangger | rzkytmgr",
	contact: {
		email: "rzkytmgr[at]gmail.com",
		github: "https://github.com/rzkytmgr",
		instagram: "https://instagram.com/rzkytmgr",
	},
};

module.exports = { success, error, introduction };
