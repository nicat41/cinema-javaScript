
const container = document.querySelector("#container")
let text = document.querySelector("#text")
let filmBtns = document.querySelector("#filmBtns")
let display = document.querySelector("#display")



let films = [
  {
    name: "Esaretin Bedeli",
    video: "https://www.youtube.com/embed/87Z98pEFMhs",
    price: 15,
  },
  {
    name: "Başlangıç",
    video: "https://www.youtube.com/embed/YoHD9XEInc0",
    price: 20,
  },
  {
    name: "Yeşil Yol",
    video: "https://www.youtube.com/embed/hfa5F-kRTq4",
    price: 25,
  }
]

let createFilmButtons = () => {
  let html = "";
  for(let index in films) {
    let film = films[index];
  html += `<button data-index="${index}" value="${film.price}" class="film  ${index === "0" ? "active" : ''}  bg-[#5b5b5b]  w-full h-[50px] text-white rounded-lg">${film.name}</button>`
  }
  filmBtns.innerHTML = html;

}

let calculatePrice = () => {
  let selectedSeats = container.querySelectorAll(".seat.selected").length;
  let filmBtnSelected = document.querySelector(".film.active");
  let filmName = filmBtnSelected.innerText;
  let filmPrice = filmBtnSelected.value;
  let totalPrice = parseFloat(filmPrice) * selectedSeats;

  let filmIndex = filmBtnSelected.getAttribute("data-index");
  let film = films[filmIndex]
  display.src = film.video + "?autoplay=true";
  text.innerHTML = `${filmName} adlı kinoya ${selectedSeats} blet seçdiniz, toplam mebleğ ${totalPrice} AZN`
}


container.addEventListener("click", (e) => {
  let element = e.target;
if (element.classList.contains("seat")) {
  element.classList.toggle('selected')
  calculatePrice()
}
})

filmBtns.addEventListener("click", (e) => {
  if(e.target.matches("button")) {
    // filmBtns.querySelectorAll(".film").forEach((btn) => btn.classList.remove("active"))
    for(let btn of filmBtns.querySelectorAll(".film")) {
      btn.classList.remove("active")
    }
    e.target.classList.add("active")
  }
  calculatePrice()
})


createFilmButtons()
calculatePrice()
