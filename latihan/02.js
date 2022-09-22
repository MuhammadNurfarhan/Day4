const ganjilGenap = (num) => {
    if (num % 2 == 0) {
        return 'Genap';
    } else if (num % 2 == 1) {
        return 'Ganjil';
    } else {
        return null;
    }
};

console.log(ganjilGenap(14));