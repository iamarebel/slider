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
let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");

let showSlide1 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide1.classList.add("active");  // nie z kropka tylko nazwa  - dodajemy active
}

let showSlide2 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide2.classList.add("active");  // nie z kropka tylko nazwa  - dodajemy active
}

let showSlide3 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide3.classList.add("active");
}

let showSlide4 = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
  slide4.classList.add("active");
}
//niech kroka slucha na klikniecie, na co,  mechanizm  
dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);

