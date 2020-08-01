//zmienna reprezentujaca numer aktywnego slajdu
let activeSlideNumber = 1;

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");


// deklaracja zmiennych z strzalkami , szukamy w dokumencie
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");


let hideActiveElement = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  let activeDot = document.querySelector(".dot-active");
  activeDot.classList.remove("dot-active");
}


// wyciagamy osobna funkcje dla powtarzajacego sie kodu i wklejamy funkcje w reszte funkcji aby ise wywolywala
let showSlide = (slideNumber) => {
  activeSlideNumber = slideNumber;
  hideActiveElement();
  document.querySelector("#slide" + slideNumber).classList.add("active");
  document.querySelector("#dot" + slideNumber).classList.add("dot-active");
};

let showSlide1 = () => {
  showSlide(1);
}

let showSlide2 = () => {
  showSlide(2);
}

let showSlide3 = () => {
  showSlide(3);
}

let showSlide4 = () => {
  showSlide(4);
}

// funkcja do strzalki w lewo
let showPreviousSlide =() => {
  if (activeSlideNumber === 1) {
    showSlide(4);
  }
  else {
    showSlide(activeSlideNumber - 1);
  }
}

// funkcja to strzalki w prawo 
let showNextSlide = () => {
  // pokaz aktywny slajd + jeden po nacisnie w prawo
  // jesli jestesmy na ostatnim to skocz na pierwszy slajd - uzycie nistrkucji warunkowej if else 
  if (activeSlideNumber === 4) {
    showSlide(1);
  }
  else {
     // w innym przypadku 
    showSlide(activeSlideNumber + 1);
  }
}
 
//niech kropka slucha na klikniecie, na co,  mechanizm  
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);

// nasluchuj na klikniecie na strzalke w lewo
arrowLeft.addEventListener("click", showPreviousSlide);
// nasluchuj na klikniecie na strzalke w prawo
arrowRight.addEventListener("click", showNextSlide);
