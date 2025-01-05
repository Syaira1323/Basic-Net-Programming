const yargs = require('yargs')
const catatan = require('./catatan.js')
// Kustomisasi versi yargs
yargs.version('10.1.0')

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

// Perintah Hapus
yargs.command({
    command: 'hapus',
    describe: 'Hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dihapus',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.hapusCatatan(argv.judul)
    }
})

// Intruksi no.4 letakan disini

// Perintah untuk menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'list Catatan',
    handler: function () {
        console.log('Menampilkan semua catatan')
    }
})
// Perintah untuk menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'List Catatan',
    handler: function () {
        catatan.listCatatan()
    },
handler(argv) {
    catatan.listCatatan(argv.judul)
}
})

// Perintah Read

yargs.command({
    command: 'baca',
    describe: 'Baca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul)
    }
})


// Perintah untuk membaca catatan
yargs.command({
    command: 'baca',
    describe: 'Baca sebuah catatan',
    handler: function () {
        console.log('Membaca sebuah catatan')
    }
})

// letakan bagian ini pada baris terakhir
yargs.parse()