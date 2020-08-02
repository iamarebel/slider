// //zmienna reprezentujaca numer aktywnego slajdu
// let activeSlideNumber = 1;

// let dot1 = document.querySelector("#dot1");
// let dot2 = document.querySelector("#dot2");
// let dot3 = document.querySelector("#dot3");
// let dot4 = document.querySelector("#dot4");

// // deklaracja zmiennych z strzalkami , szukamy w dokumencie
// let arrowLeft = document.querySelector("#arrow-left");
// let arrowRight = document.querySelector("#arrow-right");

// // dodajemy uniwersalne wyszukanie wszystkich slajdow - dlugosc tablicy 
// let numberofSlides = document.querySelectorAll(".slide").length;

// let hideActiveElement = () => {

//   let activeElement = document.querySelector(".active");
//   // jesli jest aktywny element juz na stronie 
//   if (activeElement) {
//     // to usun aktywna kalse
//     activeElement.classList.remove("active");
//   }
//   //to samo z kropka 
//   let activeDot = document.querySelector(".dot-active");
//   if (activeDot) {
//     activeDot.classList.remove("dot-active");
//   }
// };

// // wyciagamy osobna funkcje dla powtarzajacego sie kodu i wklejamy funkcje w reszte funkcji aby ise wywolywala
// let showSlide = (slideNumber) => {
//   activeSlideNumber = slideNumber;
//   hideActiveElement();
//   document.querySelector("#slide" + slideNumber).classList.add("active");
//   document.querySelector("#dot" + slideNumber).classList.add("dot-active");
// };

// let showSlide1 = () => {
//   showSlide(1);
// }

// let showSlide2 = () => {
//   showSlide(2);
// }

// let showSlide3 = () => {
//   showSlide(3);
// }

// let showSlide4 = () => {
//   showSlide(4);
// }

// // funkcja do strzalki w lewo
// let showPreviousSlide =() => {
//   // === operator równości
//   if (activeSlideNumber === 1) {
//     showSlide(numberofSlides);
//   }
//   else {
//     showSlide(activeSlideNumber - 1);
//   }
// }

// // funkcja to strzalki w prawo 
// let showNextSlide = () => {
//   // pokaz aktywny slajd + jeden po nacisnie w prawo
//   // jesli jestesmy na ostatnim to skocz na pierwszy slajd - uzycie nistrkucji warunkowej if else 
//   if (activeSlideNumber === numberofSlides) {
//     showSlide(1);
//   }
//   else {
//      // w innym przypadku 
//     showSlide(activeSlideNumber + 1);
//   }
// }
 
// let onKeyDown = (event) => {
//   //dodajemy dwa warunki -zeby dzialala obsluga slajdera z klawiatury (lewo i prawo)

//   // porownaj czy keycode jest 39 czlyi czy jest strzalka w prawo
//   if (event.keyCode === 39) {
//   //jesli klikamy strzalke w prawo na klawiaturze  
//     showNextSlide();
//   } 
  
//   if (event.keyCode === 37) {
//   // jelsi  klikamy strzalke w lewo  do slajd w lewo
//     showPreviousSlide();
//   }
// }
// //niech kropka slucha na klikniecie, na co,  mechanizm  
// dot1.addEventListener("click", showSlide1);
// dot2.addEventListener("click", showSlide2);
// dot3.addEventListener("click", showSlide3);
// dot4.addEventListener("click", showSlide4);

// // nasluchuj na klikniecie na strzalke w lewo
// arrowLeft.addEventListener("click", showPreviousSlide);
// // nasluchuj na klikniecie na strzalke w prawo
// arrowRight.addEventListener("click", showNextSlide);

// //nacisnienie strzalek na calej stronie
// document.addEventListener("keydown", onKeyDown);

// // wywolanie  z przywolanym numerem na na poczatku
// showSlide(activeSlideNumber);

// // jest podzielna (nie ma reszty z dzielenia) przez 15 - FizzBuzz!

// // jest podzliena przez 3 - Fizz

// // jest podzliena przez 5 - Buzz

// // w innym przypadku wyswietlamy liczbe

// // operator dzielenia % ,zwraa reszte z dzielenia , modulo  np 5 % 2

// //zadanie:
// // fizzBuzz (1);
// // ### 1
// // fizzBuzz (3);
// // ### Fizz
// // fizzBuzz (5);
// // ### Buzz
// //fizzBuzz(15);
// //###  FizzBuzz!


// // let fizzBuzz = (n) => {
// //   if (n % 15 === 0) {
// //     // if sprawdza: czy n % 15 === true   , nie jest true bo jest 0
// //     console.log("FizzBuzz!")
// //   } else if (n % 5 === 0) {
// //     console.log("Buzz");
// //   }
// //   else if (n % 3 === 0) {
// //     console.log("Fizz");
// //   }
// //   else  {
// //     console.log(n);
// //   }
// // }

// // fizzBuzz(7);
// // fizzBuzz(10);
// // fizzBuzz(45);
// // fizzBuzz(9);


// //factorial(n) {
//   //jezeli n ===1 -> 1;
//   // jezeli n !== 1  -> n * silnia (n-1)
//   //return

// //f(3) -> 6
// //f(5) -> 120
// //f(6) -> 720 



// // let silnia = (n) => {
// //   if(n === 1) {
// //    return 1;
// //   } else {
// //     return n*silnia(n-1);
// //   }
// // }

// // silnia(6);

// // wywolanie rekourencyjne - funkcja wywoluje funkcje w sobie 


//  // napisz funkcje  wypisujaca  napsiz funkcje fibonacci ktora obliczy n-ty wyraz  ciagu fibonnaciego

//  // n to  numer liczby w ciagu 

//  //1 1 2 3 5 8 12 21 
//  //fibonacci(1) = 1

//  //jezeli n === lub n === 2  -> 1 
//  //jezeli n !== 1 i n !nn2 -> fibonacci(n-1) + fibonacci(n-2)



// //  let fibonacci = (n) => {
// //    if (n === 1) {
// //      return 1;
// //    }
// //    else if (n === 2) {
// //      return 1;
// //    }
// //    else {
// //      return fibonacci(n-1) + fibonacci(n-2);
// //     }  
// //   }
// //   console.log(fibonacci(10));

// for (
//   let rzeczyDoSpakowania = 100;  
//   rzeczyDoSpakowania > 0; 
//   rzeczyDoSpakowania = rzeczyDoSpakowania - 10 {
//   wezRzeczy();
//   wlozRzeczyDOkartonu();
//   zaklejKarton();
// }


//nie dziela sie przez 2 nieparzyste 
// 2n + 1 
//n - numerk olejnej liczby calkowietej
// 2 * 0 + 1 = 1
// i = 1 
// 2 * 1 + 1 = 3 


function nieparzyste(n) {

  for (let i = 0; i < n; i = i + 1) {
    console.log(i*2 + 1);
  }
};

nieparzyste(5);

function kwadraty(n) {

  for (let i = 0; i < n; i = i + 1) {
    console.log(i*i);
  }
};

kwadraty(7);




