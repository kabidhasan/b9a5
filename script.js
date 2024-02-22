let a1 = document.getElementById("a1");
console.log(a1);
let selectedSeats = [];
let discountFactor = 1
function selected(seat) {
  if (!selectedSeats.includes(seat) && selectedSeats.length < 4) {
    seat.classList.remove("bg-[#F7F8F8]");
    seat.classList.add("bg-[#1DD100]");
    seat.classList.remove("text-[#03071280]");
    seat.classList.add("text-white");
    selectedSeats.push(seat);
    noOfTakenSeats = selectedSeats.length
    remainingSeats = document.getElementById("remainingSeats");
    remainingSeats.innerText = `${40 - noOfTakenSeats}`;
    takenSeats = document.getElementById("takenSeats");
    takenSeats.innerText = `${noOfTakenSeats}`;
    seatNo = seat.innerText;
    seatTable = document.getElementById("seat-table");
    newRow = document.createElement("tr");
    newRow.classList.add("flex");
    newRow.classList.add("flex-row");
    newRow.classList.add("justify-between");
    newRow.classList.add("px-8");
    newRow.classList.add("py-4");
    newRow.classList.add("flex-grow");
    newRow.innerHTML = `<tc class='pl-2'>${seatNo}</tc><tc class='pl-8'>Economy</tc><tc class='pr-4'>550</tc>`;
    seatTable.append(newRow);
    total= document.getElementById("total")
    total.innerText = `${550 * noOfTakenSeats}`
    grand = document.getElementById("grand")
    grand.innerText =`${discountFactor * 550 * noOfTakenSeats}`
    console.log(selectedSeats.length);
  }
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
