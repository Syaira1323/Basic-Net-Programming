const fs = require('fs')
const ambilCatatan = function () {
return 'Ini Catatan Syaira Amani Fatihah...'
}
    const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function (note) {
    return note.title === judul
})
    if (catatanGanda.length === 0) {
    catatan.push({
    judul: judul,
    isi: isi
})
    simpanCatatan(catatan)
    console.log('Catatan baru ditambahkan!')
} else {
    console.log('Judul catatan telah dipakai')
}
}
    const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}
    const muatCatatan = function () {
    try {
    const dataBuffer = fs.readFileSync('catatan.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
    return []
}
}
module.exports = {
ambilCatatan: ambilCatatan,
tambahCatatan: tambahCatatan
}

const hapusCatatan = function(judul) {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul
    })
    
    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan Dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    } else {
        console.log(chalk.red.inverse('Catatan Tidak Ditemukan!'))
    }
}
const listCatatan = function () {
    const catatan = muatCatatan()
    
    console.log(chalk.inverse('Daftar Semua Catatan:'))

    catatan.forEach((note) => {
        console.log(note.judul)
    })
}

const bacaCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanDicari = catatan.find((note) => note.judul === judul)
    
    if (catatanDicari) {
        console.log(chalk.inverse(catatanDicari.judul))
        console.log(catatanDicari.isi)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

module.exports = {
    tambahCatatan: tambahCatatan,
    hapusCatatan: hapusCatatan,
    listCatatan: listCatatan,
    bacaCatatan: bacaCatatan
}