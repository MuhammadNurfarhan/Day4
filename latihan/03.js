const tahunKabisat = (tahun) => {
    if (tahun % 4 == 0 && tahun % 100 != 0 || tahun % 400 == 0) {
        return 'Kabisat';
    } else {
        return 'Bukan Kabisat'
    }
};

console.log(tahunKabisat(2016));