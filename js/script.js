const tanah = document.querySelectorAll('.tanah');
// query selector all digunakn untuk semua
const tikus = document.querySelectorAll('.tikus');

function randomTanah(tanah) {
    const tRandom = Math.floor(Math.random() * tanah.length);
    // length = jumlah node list pada tanah
    // florr untuk melakukan pembualatan kebawah.
    // pembulatan ada ,florr(lantai kebawah) round(round pembulatan terdekat), ceil= pembulatan keatas
    return tanah[tRandom];
    // kembalikan ketanah yang berapa
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    tanah[1].classList.add('muncul');
    // kelas index ke 1 kita mw tambhin kelas muncul
    // dalam class list itu kita bsa mengecek, menambah atau menghapus elemen tertentu. 
}


