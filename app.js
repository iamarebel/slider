//zmienna reprezentujaca numer aktywnego slajdu
let activeSlideNumber = 1;

// deklaracja zmiennych z strzalkami , szukamy w dokumencie
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");

// dodajemy uniwersalne wyszukanie wszystkich slajdow - dlugosc tablicy 
let numberofSlides = document.querySelectorAll(".slide").length;

let hideActiveElement = () => {

  let activeElement = document.querySelector(".active");
  // jesli jest aktywny element juz na stronie 
  if (activeElement) {
    // to usun aktywna kalse
    activeElement.classList.remove("active");
  }
  //to samo z kropka 
  let activeDot = document.querySelector(".dot-active");
  if (activeDot) {
    activeDot.classList.remove("dot-active");
  }
};

// wyciagamy osobna funkcje dla powtarzajacego sie kodu i wklejamy funkcje w reszte funkcji aby ise wywolywala
let showSlide = (slideNumber) => {
  activeSlideNumber = slideNumber;
  hideActiveElement();
  document.querySelector("#slide" + slideNumber).classList.add("active");
  document.querySelector("#dot" + slideNumber).classList.add("dot-active");
};

// funkcja do strzalki w lewo
let showPreviousSlide =() => {
  // === operator równości
  if (activeSlideNumber === 1) {
    showSlide(numberofSlides);
  }
  else {
    showSlide(activeSlideNumber - 1);
  }
}

// funkcja to strzalki w prawo 
let showNextSlide = () => {
  // pokaz aktywny slajd + jeden po nacisnie w prawo
  // jesli jestesmy na ostatnim to skocz na pierwszy slajd - uzycie nistrkucji warunkowej if else 
  if (activeSlideNumber === numberofSlides) {
    showSlide(1);
  }
  else {
     // w innym przypadku 
    showSlide(activeSlideNumber + 1);
  }
}
 
let onKeyDown = (event) => {
  //dodajemy dwa warunki -zeby dzialala obsluga slajdera z klawiatury (lewo i prawo)

  // porownaj czy keycode jest 39 czlyi czy jest strzalka w prawo
  if (event.keyCode === 39) {
  //jesli klikamy strzalke w prawo na klawiaturze  
    showNextSlide();
  } 
  
  if (event.keyCode === 37) {
  // jelsi  klikamy strzalke w lewo  do slajd w lewo
    showPreviousSlide();
  }
}

// nasluchuj na klikniecie na strzalke w lewo
arrowLeft.addEventListener("click", showPreviousSlide);
// nasluchuj na klikniecie na strzalke w prawo
arrowRight.addEventListener("click", showNextSlide);

//nacisnienie strzalek na calej stronie
document.addEventListener("keydown", onKeyDown);

// wywolanie  z przywolanym numerem na na poczatku
showSlide(activeSlideNumber);

//zapetlamy powtarzajacy sie kod
// znalezienie kropki
//definiowanie funkcji pokazujacej dany slajd
//przypisanie eventow do kropki

for ( let i = 0; i < numberofSlides; i = i + 1) {
  document.querySelector("#dot" + (i+1)).addEventListener("click", () => {
    showSlide(i+1);
  });
}

// teraz latwo dodac koeljny slajd - dodajemy w html slajd i kropke, dodajemy tylko
// obsluge w petli (zmienami tylko ) i < 5
//albo dodac number of slides i wtedy mamy w pelni uniwersalny kod  i dodajemy tylko  elementy w html (slajd, dot)




