function negativE(szam) {
    var szamok = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] < 0) {
            szamok++;
        }
    }
    return true;
}
function korKerTer(r) {
    var kerulet = 2 * r * Math.PI;
    var terulet = r * r * Math.PI;
    return [kerulet, terulet];
}
function minAuto(auto) {
    var minCCM = auto[0];
    for (var i = 0; i < auto.length; i++) {
        if (minCCM > auto[i]) {
            minCCM = auto[i];
        }
    }
    return minCCM;
}
function benzinesDB(auto) {
    var benzinesDarabSzam = 0;
    for (var i = 0; i < auto.length; i++) {
        if (auto[i].benzinesE == true) {
            benzinesDarabSzam++;
        }
    }
    return benzinesDarabSzam;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1600,
    benzinesE: true
};
var a3 = {
    gyarto: "Bmw",
    tipus: "I3",
    hengerurtartalom: 0,
    benzinesE: false
};
var a2 = {
    gyarto: "Volkswagen",
    tipus: "Passat",
    hengerurtartalom: 2200,
    benzinesE: false
};
var a4 = {
    gyarto: "Ford",
    tipus: "Mondeo",
    hengerurtartalom: 1600,
    benzinesE: true
};

var autok = [a1, a2, a3, a4];
