const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Membuat aplikasi express
const app = express()

// Halaman utama
app.get('', (req, res) => {
  res.render('index', {
    judul: 'Aplikasi Cek Cuaca',
    nama: 'Syaira Amani Fatihah'
  });
});

// Ini halaman bantuan
app.get('/bantuan', (req, res) => {
  res.render('bantuan', {
    judul: 'Halaman Bantuan',
    nama: 'Syaira Amani Fatihah',
    teksBantuan: 'Ini adalah teks bantuan'
  });
});

// Halaman cuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])
})

// Halaman tentang
app.get('/tentang', (req, res) => {
  res.render('/tentang', {
    judul: 'Tentang Saya',
    nama: 'Syaira Amani Fatihah'
  });
});

// Static file middleware
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '.../templates')

// Statis public
app.set('view engine', 'hbs')
app.use(express.static(direktoriPublic))
app.set('views', direktoriViews)

// Menjalankan server
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})
