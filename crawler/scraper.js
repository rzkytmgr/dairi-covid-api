const fs = require('fs');
const path = require('path');
const Axios = require('axios');
const cheerio = require('cheerio');
const colors = require('colors');

const { SCRAPE_URL } = require('../util/constants');
const { kecamatanPattern, generalPattern } = require('../crawler/pattern');

const scrape = async id => {
	if (typeof id === 'undefined') return [];

	const URL = SCRAPE_URL + id;
	try {
		const { data } = await Axios.get(URL);
		const $ = cheerio.load(data);

		const final = {};
		final['id'] = Number(id);
		final['tanggal'] = new Date($('input[id=current-date]').val());
		final['dataUrl'] = URL;
		final['data'] = {};
		final['kecamatan'] = [];

		$('.card-body span.h2').each(function (index) {
			const self = $(this);
			const key = { 0: 'kontak_erat', 1: 'suspek', 2: 'konfirmasi_positif', 3: 'konfirmasi_sembuh' };
			final['data'][key[index]] = Number(self.text());
		});

		$('table.table tbody tr').each(function (index) {
			const self = $(this);

			const kecamatan = {
				id: 0,
				nama: '',
				data: {
					kontak_erat: 0,
					suspek: 0,
					probable: 0,
					konfirmasi_positif: 0,
					konfirmasi_sembuh: 0,
					meninggal: 0,
				},
			};

			kecamatan['id'] = index;
			kecamatan['nama'] = self.find('th').text().trim();
			final['kecamatan'].push(kecamatan);

			self.find('td').each(function (td) {
				const key = { 0: 'kontak_erat', 1: 'suspek', 2: 'probable', 3: 'konfirmasi_positif', 4: 'konfirmasi_sembuh', 5: 'meninggal' };
				kecamatan['data'][key[td]] = Number($(this).text().trim());
			});
		});

		return final;
	} catch (Exception) {
		return undefined;
	}
};

(async function () {
	const n = 1000;
	const final = [];
	let count = 0;
	for (let i = 0; i < n; i++) {
		try {
			const data = await scrape(i);
			if (typeof data === 'undefined') {
				count++;
				console.debug('[@]'.red, 'Fetching data', i);
				if (count >= 4) {
					console.debug('[@] Finished!'.bgYellow);
					break;
				}
				continue;
			}
			count = 0;
			console.debug('[@]'.cyan, 'Fetching data', i);
			final.push(data);
		} catch (Exception) {
			console.log('Error!');
		}
	}

	const jsonPath = path.resolve('data', 'data.json');
	fs.writeFileSync(jsonPath, JSON.stringify(final), 'utf-8');
})();
