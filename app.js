// let arrowRight = document.querySelector("#arrow-right");
// let function3 = () => {
//   console.log("strzałka kliknięta!");
// };
// arrowRight.addEventListener("click", function3);



//gdy klikamy na 2 kropke pojawia sie 2 obrazek:
//1. znajdzmy kropke nr 2 (dodalismy id zeby znalesc tą konkretną) i zapisujemy ja do zmiennych zeby zachowac i definiujemy funkcje mechanizmu
// niech kroka slucha na klikniecie i wywola sie funkcja
//2. znalezienie slajd 2 
//3. po kliknieciu niech pojawi sie obrazek nr 2
//3.1 znalesc obrazek 2 
//3.2 dodac do obrazka 2 klase active
//3.3 usunac klase active z pierwszego slajdu (remove)

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");

let hideActiveElement = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  let activeDot = document.querySelector(".dot-active");
  activeDot.classList.remove("dot-active");
}


// wyciagamy osobna funkcje dla powtarzajacego sie kodu i wklejamy funkcje w reszte funkcji aby ise wywolywala
let showSlide = (slideNumber) => {
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
//niech kroka slucha na klikniecie, na co,  mechanizm  
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);

