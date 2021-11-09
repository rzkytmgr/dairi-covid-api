$(document).ready(async function () {
	let DataSet = new Set();

	const allData = await (await fetch('https://dairi-covid-api.vercel.app/data')).json();
	const data = await fetch('https://dairi-covid-api.vercel.app/data/' + allData.data[allData.data.length - 1]['id']);
	const result = await data.json();
	
	const date = new Date(result.data.tanggal);
	const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
	const month = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
	
	renderAll(result);

	function renderData(data) {

		$('span[aria-label=data-district]')[0].textContent = 'Kecamatan ' + data.nama;
		$('b[aria-label=data-positif]')[0].textContent = data.data.konfirmasi_positif + ' orang';
		$('b[aria-label=data-sembuh]')[0].textContent = data.data.konfirmasi_sembuh + ' orang';
		$('b[aria-label=data-meninggal]')[0].textContent = data.data.meninggal + ' orang';
		$('b[aria-label=data-tanggal]')[0].textContent = day[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();

	}

	const box = $('#box-info')[0];
	$('g').mousemove(function (e) {
		if (e.target.nodeName === 'path') {
			e.target.style.fill = '#a9b3c2';
			box.style.display = 'block';
			box.style.transform = `translate(${e.pageX + 10}px, ${e.pageY + 10}px)`;
		}
	});

	$('path').hover(function (e) {
		const data = result.data.kecamatan.find(kecamatan => kecamatan.id == e.target.id);
		renderData(data);
	});

	$('g').mouseout(function (e) {
		if (e.target.nodeName === 'path') {
			e.target.style.fill = '#c9ced6';
		}
		box.style.display = 'none';
	});

	function renderAll(result) {
		$('div[aria-label=all-suspek]')[0].textContent = result.data.data.suspek;
		$('div[aria-label=all-kontak-erat]')[0].textContent = result.data.data.kontak_erat;
		$('div[aria-label=all-konfirmasi-positif]')[0].textContent = result.data.data.konfirmasi_positif;
		$('div[aria-label=all-konfirmasi-sembuh]')[0].textContent = result.data.data.konfirmasi_sembuh;
		$('b[aria-label=update-terakhir]')[0].textContent = day[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
	}
});
