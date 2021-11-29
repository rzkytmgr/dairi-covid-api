<p align="center">
	<img width="250" src="./static/LOGO-KABUPATEN-DAIRI.png" alt="Logo Kabupaten Dairi">
</p>
<p align="center">
	<h1 align="center">
        Unofficial API Covid-19 Kabupaten Dairi
	</h1>
</p>

<p align="center">
    <img src="https://img.shields.io/github/repo-size/rzkytmgr/dairi-covid-api?label=size" alt="repo size">
    <img src="https://img.shields.io/github/issues/rzkytmgr/dairi-covid-api" alt="issue">
    <img src="https://img.shields.io/github/issues-pr/rzkytmgr/dairi-covid-api" alt="issue">
    <img src="https://img.shields.io/website?down_color=red&down_message=down&label=https%3A%2F%2Fcovid-dairi.oliak.studio%2F&up_color=green&up_message=up&url=https%3A%2F%2Fcovid-dairi.oliak.studio%2F" alt="issue">
    <img src="https://img.shields.io/website?down_color=red&down_message=down&label=https%3A%2F%2Fdairi-covid-api.vercel.app%2F&up_color=green&up_message=up&url=https%3A%2F%2Fdairi-covid-api.vercel.app%2F" alt="issue">
</p>

---

Selamat datang di repository *Unofficial API Covid-19 Kabupaten Dairi* yang dibuat untuk memudahkan pengembangan perangkat lunak bagi pengembang-pengembang aplikasi penyebaran Covid-19 terkhususnya di Kabupaten Dairi.



**Host Utama**

```
https://covid-dairi.oliak.studio/
```

**Host Alternatif**

```
https://dairi-covid-api.vercel.app/
```



Dokumentasi ini dibuat untuk memandu penggunaan restful API Covid-19 Kabupaten Dairi ini. Dokumentasi ini memandu dengan menggunakan **Host Utama**, tidak perlu khawatir apabila **Host Utama** mengalami down, kamu bisa menggunakan **Host Alternatif** secara teknis restful API baik **Host Utama** maupun **Host Alternatif** adalah sama.



### Penggunaan

Sebelum masuk ke dalam penggunaan restful API kamu bisa menggunakan alat-alat yang biasa kamu gunakan untuk melakukan fetching data terhadap restful API dan pada dokumentasi ini kita akan menggunakan [curl](https://curl.se/).

Mari kita coba dengan request ke `https://covid-dairi.oliak.studio/`

```bash
# request
curl https://covid-dairi.oliak.studio/
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "documentation": "https://github.com/rzkytmgr/dairi-covid-api",
    "maintainers": "Rizky Aulia Tumangger | rzkytmgr",
    "contact": {
        "email": "rzkytmgr[at]gmail.com",
        "github": "https://github.com/rzkytmgr",
        "instagram": "https://instagram.com/rzkytmgr"
    }
}
```

Mari kita jelajahi lebih jauh lagi



### **Seluruh data dengan pengelompokan tanggal/hari**

```bash
# path
https://covid-dairi.oliak.studio/data
```

```bash
# request
> curl https://covid-dairi.oliak.studio/data
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "tanggal": "2020-07-24T00:00:00.000Z",
            "dataUrl": "https://datacovid19.dairikab.go.id/data/1",
            "data": {
                "kontak_erat": 5,
                "suspek": 1,
                "konfirmasi_positif": 3,
                "konfirmasi_sembuh": 3
            }
        },
     	....
     ]
}
```



Menampilkan data dengan filter identifier, identifier dapat menggunakan tanggal ataupun id data

```bash
# path
https://covid-dairi.oliak.studio/data/:id_data
https://covid-dairi.oliak.studio/data/:tanggal_data
```

```bash
# request
> curl https://covid-dairi.oliak.studio/data/1
atau
> curl https://covid-dairi.oliak.studio/data/2020-07-24
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "data": {
        "id": 1,
        "tanggal": "2020-07-24T00:00:00.000Z",
        "dataUrl": "https://datacovid19.dairikab.go.id/data/1",
        "data": {
            "kontak_erat": 5,
            "suspek": 1,
            "konfirmasi_positif": 3,
            "konfirmasi_sembuh": 3
        },
        "kecamatan": [
            {
                "id": 0,
                "nama": "Sidikalang",
                "data": {
                    "kontak_erat": 0,
                    "suspek": 0,
                    "probable": 0,
                    "konfirmasi_positif": 0,
                    "konfirmasi_sembuh": 2,
                    "meninggal": 0
                }
            },
            ....
        ]
    }
}
```



### **Data Kecamatan**

Menampilkan seluruh kecamatan yang ada

```bash
# path
https://covid-dairi.oliak.studio/data/kecamatan/list
```

```bash
# request
> curl https://covid-dairi.oliak.studio/data/kecamatan/list
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 0,
            "nama": "Sidikalang"
        },
        {
            "id": 1,
            "nama": "Sitinjo"
        },
        ...
    ]
}
```



Akan menampilkan seluruh data yang di kelompokkan sesuai hari/tanggal dan seluruh data pada setiap kecamatan yang ada

```bash
# path
https://covid-dairi.oliak.studio/data/kecamatan/
```

```bash
# request
> curl https://covid-dairi.oliak.studio/data/kecamatan/
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "tanggal": "2020-07-24T00:00:00.000Z",
            "dataUrl": "https://datacovid19.dairikab.go.id/data/1",
            "data": {
                "kontak_erat": 5,
                "suspek": 1,
                "konfirmasi_positif": 3,
                "konfirmasi_sembuh": 3
            },
            "kecamatan": [
                {
                    "id": 0,
                    "nama": "Sidikalang",
                    "data": {
                        "kontak_erat": 0,
                        "suspek": 0,
                        "probable": 0,
                        "konfirmasi_positif": 0,
                        "konfirmasi_sembuh": 2,
                        "meninggal": 0
                    }
                },
                ...
           ]
        },
        ...
     ]
}
```



Selanjutnya mengambil data sesuai dengan kecamatan yang diinginkan

```bash
# path
https://covid-dairi.oliak.studio/data/kecamatan/:nama_kecamatan
```

```bash
# request
> curl https://covid-dairi.oliak.studio/data/kecamatan/sidikalang
```

```bash
# response
{
    "status": "ok",
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "tanggal": "2020-07-24T00:00:00.000Z",
            "dataUrl": "https://datacovid19.dairikab.go.id/data/1",
            "data": {
                "id": 0,
                "nama": "Sidikalang",
                "data": {
                    "kontak_erat": 0,
                    "suspek": 0,
                    "probable": 0,
                    "konfirmasi_positif": 0,
                    "konfirmasi_sembuh": 2,
                    "meninggal": 0
                }
            }
        },
        ...
    ]
}
```



## Contributors

<img src="https://avatars.githubusercontent.com/u/56517576" alt="rzkytmgr" width="100"> <img src="https://avatars.githubusercontent.com/u/19843984?v=4" alt="kdimas12" width="100">

