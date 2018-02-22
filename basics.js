
console.log("Hello!");

(function () {
'use strict'
// minden amit ide írok strict mode-ban fog futni
// a strict mode egy szigorúbb szabályokkal futtatja
// a javascrit kodot, és több hibát fog kiírni a böngésző
// amit enélkül nem tenne meg

// ez egy újradekralálható kód lesz:
var szoveg2 = "valami";
console.log(szoveg2);
// erre nem kapunk hibát mert a var kulcsszóval deklarált változót ujradekralálhatjuk
var szoveg2 = "valamit";

let szoveg3 = "szoveg3 ezt let-tel hoztuk letre";
console.log(szoveg3);
// a let skulcsszóval létrehozott változókat nem lehet ujradeklarálni, a következő sort ha nem kommentezzük, hibát kapunk:
// et szoveg3 = "szoveg3 ezt let-tel hoztuk letre";

// ez egy új értékadás nem deklarálás:
szoveg3 = "uj értéket kap a szoveg3";
// a console.log egy függvény, aminek átadjuk a szoveg3 változót
// a console.log egy más által írt kód, ami azt csinálja a neki adott változóval, hogy kiírja a console-ra
console.log(szoveg3);

// kiírathatunk egyszerre szöveget és változót is:
let szaml = 94;
console.log("A szaml valtozo értéke: "+szaml)
    
}()); // itt van vége a strict mode-nak, ez után már nem fog strict mode-ban futni a kód


// implicit global változó lesz a szöveg
// globalk: a szoveg változó mindenhol elérhető lesz a kódban
// implicit global változót lehetőleg óne használjunk!
szoveg = "3";
console.log(szoveg);
