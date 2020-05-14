const tanah = document.querySelectorAll('.tanah');
// query selector all digunakn untuk semua
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;

    // length = jumlah node list pada tanah
    // florr untuk melakukan pembualatan kebawah.
    // pembulatan ada ,florr(lantai kebawah) round(round pembulatan terdekat), ceil= pembulatan keatas

    // kembalikan ketanah yang berapa
}

function randomWaktu(min, max) {
    // untuk menentukan bilangan random dari berapa sampai berapa
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 100);
    tRandom.classList.add('muncul');
    // kelas index ke 1 kita mw tambhin kelas muncul
    // dalam class list itu kita bsa mengecek, menambah atau menghapus elemen tertentu. 
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanTikus();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}

// lakukan pengulangan ambil elemen sbgai t
tikus.forEach(t => {
    // disini gak pakai error function karena jika pakai error function maka tidak ada thisnya
    t.addEventListener('click', pukul);
});