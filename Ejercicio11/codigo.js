function tirarDado() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

var arraySumas = [{suma: 2, contador: 0}, {suma: 3, contador: 0}, {suma: 4, contador: 0}, {suma: 5, contador: 0}, {suma: 6, contador: 0}, {suma: 7, contador: 0}, {suma: 8, contador: 0}, {suma: 9, contador: 0}, {suma: 10, contador: 0}, {suma: 11, contador: 0}, {suma: 12, contador: 0}];

for (var i = 0; i < 36000; i++) {
    var dado1 = tirarDado();
    var dado2 = tirarDado();

    var suma = dado1 + dado2;

    if (suma == arraySumas[0].suma) {
        arraySumas[0].contador += 1;
    }
    else if (suma == arraySumas[1].suma) {
        arraySumas[1].contador += 1;
    }
    else if (suma == arraySumas[2].suma) {
        arraySumas[2].contador +=1;
    }
    else if (suma == arraySumas[3].suma) {
        arraySumas[3].contador +=1;
    }
    else if (suma == arraySumas[4].suma) {
        arraySumas[4].contador +=1;
    }
    else if (suma == arraySumas[5].suma) {
        arraySumas[5].contador +=1;
    }
    else if (suma == arraySumas[6].suma) {
        arraySumas[6].contador +=1;
    }
    else if (suma == arraySumas[7].suma) {
        arraySumas[7].contador +=1;
    }
    else if (suma == arraySumas[8].suma) {
        arraySumas[8].contador +=1;
    }
    else if (suma == arraySumas[9].suma) {
        arraySumas[9].contador +=1;
    }
    else if (suma == arraySumas[10].suma) {
        arraySumas[10].contador +=1;
    }
}

console.log(arraySumas);