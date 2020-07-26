// // let arrowRight = document.querySelector("#arrow-right");

// // let function3 = () => {
// //   console.log("strzałka kliknięta!");
// // };

// // arrowRight.addEventListener("click", function3);

// // przeksztalcenie napisu w liczbe 
// let dlugoscNapisu = (napis) => {
//   return napis.length;
// };

// //definicja funkcji
// let doKwadratu = (x) => {
//   let wynik = x * x; 
//   return wynik; 
// };
// //return oddaje wynik funkcji, bez niego kod nie zadziala, tylko w funkcji 

// //wywolanie funkcji 
// let dlugosc = dlugoscNapisu("abcdefgh");
// let kwadrat = doKwadratu(dlugosc);

// console.log(kwadrat);

let convert = (kwota, kurs) => {
  let wynik = kwota * kurs;
  return wynik;
};

let plnToEuro = (pln) => {
  let przeliczenie = convert(pln, 0.23);
  return przeliczenie;
};

let euroToUsd = (euro) => {
  let przeliczenie = convert(euro, 1.17);
  return przeliczenie;
};

let euro = plnToEuro(1000);
let usd = euroToUsd(euro);

console.log(euro);
console.log(usd);

