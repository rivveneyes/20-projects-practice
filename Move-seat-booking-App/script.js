const movie = document.getElementById("movie");
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const totalSteat = document.getElementById("count");
const totalPrice = document.getElementById("total");

populateUI();

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  totalSteat.innerText = `${selectedSeats.length}`;
  totalPrice.innerText = `${selectedSeats.length * +movie.value}`;
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectMovieIndex", movieIndex);
  localStorage.setItem("selectMoviePrice", moviePrice);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectMovieIndex");
  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex;
  }
}
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
movie.addEventListener("change", (e) => {
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
updateSelectedCount();
