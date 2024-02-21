let a1 = document.getElementById("a1");
console.log(a1);
let selectedSeats = [];

function selected(seat) {
  if (!selectedSeats.includes(seat)) {
    seat.classList.remove("bg-[#F7F8F8]");
    seat.classList.add("bg-[#1DD100]");
    seat.classList.remove("text-[#03071280]");
    seat.classList.add("text-white");
    selectedSeats.push(seat);
    remainingSeats = document.getElementById("remainingSeats");
    remainingSeats.innerText = `${40 - selectedSeats.length}`;
  }
  console.log(selectedSeats.length);
}

for (char = 97; char <= 106; char += 1) {
  for (i = 1; i <= 4; i++) {
    seatNo = String.fromCharCode(char) + i;
    seat = document.getElementById(seatNo);
    console.log(seat);
    seat.addEventListener("click", function () {
      selected(this);
    });
  }
}
