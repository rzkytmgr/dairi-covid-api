const APIURL = 'https://dairi-covid-api.vercel.app/data/';
$(document).ready(async function () {
  const fetchData = await (await fetch(APIURL)).json();
  const { data } = fetchData;

  const defaultData = await fetchEach(
    fetchData.data[fetchData.data.length - 1].id,
  );

  renderAll(defaultData);

  const finalData = data.map((result) => {
    return {
      id: result.id,
      tanggal: dateFormatter(result.tanggal),
    };
  });

  function renderData(data, dataTanggal = defaultData.data.tanggal) {
    $('span[aria-label=data-district]').text('Kecamatan ' + data.nama);
    $('b[aria-label=data-positif]').text(
      data.data.konfirmasi_positif + ' orang',
    );
    $('b[aria-label=data-sembuh]').text(data.data.konfirmasi_sembuh + ' orang');
    $('b[aria-label=data-meninggal]').text(data.data.meninggal + ' orang');
    $('b[aria-label=data-tanggal]').text(dateFormatter(dataTanggal));
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
    const data = defaultData.data.kecamatan.find(
      (kecamatan) => kecamatan.id == e.target.id,
    );
    renderData(data);
  });

  $('g').mouseout(function (e) {
    if (e.target.nodeName === 'path') {
      e.target.style.fill = '#c9ced6';
    }
    box.style.display = 'none';
  });

  function renderAll(result) {
    $('div[aria-label=all-suspek]').text(result.data.data.suspek);
    $('div[aria-label=all-kontak-erat]').text(result.data.data.kontak_erat);
    $('div[aria-label=all-konfirmasi-positif]').text(
      result.data.data.konfirmasi_positif,
    );
    $('div[aria-label=all-konfirmasi-sembuh]').text(
      result.data.data.konfirmasi_sembuh,
    );
    // $('b[aria-label=update-terakhir]').text(dateFormatter(result.data.tanggal));
  }

  $.each(finalData.reverse(), function (i, item) {
    $('#list_update').append(
      $('<option>', {
        value: item.id,
        text: item.tanggal,
      }),
    );
  });

  $('#list_update').change(async function () {
    const data = await fetchEach($(this).val());
    $('path').hover(function (e) {
      const dataBaru = data.data.kecamatan.find(
        (kecamatan) => kecamatan.id == e.target.id,
      );
      const dataTanggal = data.data.tanggal;
      renderData(dataBaru, dataTanggal);
    });
    // $('b[aria-label=data-tanggal]').text(dateFormatter(data.data.tanggal));
    renderAll(data);
  });
});

async function fetchEach(id) {
  const fetchData = await fetch(APIURL + id);
  // const { data } = await fetchData.json();
  return await fetchData.json();
}

function dateFormatter(raw) {
  const date = new Date(raw);
  const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
  const month = [
    'Januari',
    'Febuari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return `${day[date.getDay()]}, ${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()}`;
}
