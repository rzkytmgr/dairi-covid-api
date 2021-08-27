const { find } = require('cheerio/lib/api/traversing');
const data = require('../data/data.json');

const getById = (number, region) => {
	if (typeof Number(number) !== 'number') return undefined;
	const result = data.find(res => res.id === Number(number));
	if (typeof region === 'undefined' || typeof result === 'undefined') return result;
	const kecamatanData = result.kecamatan.find(res => (isNaN(region) ? res.nama.toLowerCase() === region.toLowerCase() : res.id === Number(region)));
	const { kecamatan, ...finalresult } = result;
	finalresult['kecamatan'] = kecamatanData;
	return finalresult;
};

const getByDate = (date, region) => {
	if (new Date(date) instanceof Date && isNaN(new Date(date))) return undefined;
	const result = data.find(res => new Date(res.tanggal).getTime() === new Date(`${date}T00:00:00.000Z`).getTime());
	if (typeof region === 'undefined' || typeof result === 'undefined') return result;
	const kecamatanData = result.kecamatan.find(res => (isNaN(region) ? res.nama.toLowerCase() === region.toLowerCase() : res.id === Number(region)));
	const { kecamatan, ...finalresult } = result;
	finalresult['kecamatan'] = kecamatanData;
	return finalresult;
};

const getRegionById = id => {
	const result = data.map(res => {
		const { kecamatan, ...temp } = res;
		const region = kecamatan.find(reg => (!isNaN(id) ? reg.id === Number(id) : reg.nama.toLowerCase() === id.toLowerCase()));
		return { ...temp, data: region };
	});
	return result;
};

module.exports = { getById, getByDate, getRegionById };
