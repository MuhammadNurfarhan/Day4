const ratingFilm = (num) => {
    if (num >= 21) {
        return 'DEWASA';
    } else if (num >= 13) {
        return 'REMAJA';
    } else if (num >= 9) {
        return 'BIMBINGAN ORANG TUA';
    } else {
        return 'SEMUA USIA';
    }
};

console.log(ratingFilm(32));