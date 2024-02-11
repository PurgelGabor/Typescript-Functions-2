function negativE(szam:number[]):boolean{

    let szamok: number = 0;

    for(let i: number = 0; i < szam.length; i++){
        if(szam[i] < 0){    
            szamok++;
        }
    }
    return true;
};

function korKerTer(r:number):[number,number]{

    let kerulet: number = 2 * r * Math.PI; 
    let terulet: number = r * r *  Math.PI;

    return [kerulet, terulet];
};

interface Auto {
    gyarto: string,
    tipus: string,
    hengerurtartalom: number,
    benzinesE: boolean
};

function minAuto(auto:Auto[]):Auto{

    let minCCM = auto[0];

    for(let i: number = 0; i < auto.length; i++){
        if(minCCM > auto[i]){
            minCCM = auto[i];
        }
    }
    return minCCM;
};

function benzinesDB(auto:Auto[]):number{
    let benzinesDarabSzam = 0;
    for(let i: number = 0; i < auto.length; i++){
        if(auto[i].benzinesE == true){
            benzinesDarabSzam++;
        }
    }
    return benzinesDarabSzam;
};

let a1:Auto = {
    gyarto:"Opel",
    tipus:"Astra",
    hengerurtartalom: 1600,
    benzinesE:true
};

let a3:Auto = {
    gyarto:"Bmw",
    tipus:"I3",
    hengerurtartalom:0,
    benzinesE:false
};

let a2:Auto = {
    gyarto:"Volkswagen",
    tipus:"Passat",
    hengerurtartalom: 2200,
    benzinesE:false
};

let a4:Auto = {
    gyarto:"Ford",
    tipus:"Mondeo",
    hengerurtartalom: 1600,
    benzinesE:true
};

let autok: Auto = [a1,a2,a3,a4];

function atlagCCM(autok:Auto[]):number{

    let atlag: number = 0;

    for(let i = 0; i < autok.length; i++){
        atlag += autok[i].hengerurtartalom;
        atlag /= autok.length;
    }
    return atlag;
};

function vanENemBenzines(autok:Auto[]):boolean{
    let i: number = 0;
    while(i < autok.length && !(autok[i].benzinesE == false)){
        i++;
    }
    return i < autok.length;
}

function BenzinesekSzetvalogatasa(autok:Auto[]):[Auto[],Auto[]]{
    let benzinesek: Auto [] = [];
    let nemBenzinesek: Auto [] = [];
    for(let i: number = 0; i < autok.length; i++){
        if(autok[i].benzinesE == true){
            benzinesek.push(autok[i]);
        }
        else{
            nemBenzinesek.push(autok[i]);
        }
    } 

    return [benzinesek,nemBenzinesek];
}