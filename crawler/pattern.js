const generalPattern = {
	id: 0,
	dataUrl: "",
	tanggal: "",
	data: {
		kontak_erat: 0,
		suspek: 0,
		konfirmasi_positif: 0,
		konfirmasi_sembuh: 0,
	},
	kecamatan: [],
};

const kecamatanPattern = {
	id: 0,
	nama: "",
	data: {
		kotak_erat: 0,
		suspek: 0,
		probable: 0,
		konfirmasi_positif: 0,
		konfirmasi_sembuh: 0,
		meninggal: 0,
	},
};

module.exports = {
	generalPattern,
	kecamatanPattern,
};
