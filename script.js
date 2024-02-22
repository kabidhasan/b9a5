let a1 = document.getElementById("a1");
console.log(a1);
let selectedSeats = [];
let noOfTakenSeats = 0;
validCoupons = ["NEW15", "Couple 20"];
let discountFactor = 1;
function selected(seat) {
  if (selectedSeats.length == 4) {
    seat_limit_modal.showModal();
  }
  if (!selectedSeats.includes(seat) && selectedSeats.length < 4) {
    seat.classList.remove("bg-[#F7F8F8]");
    seat.classList.add("bg-[#1DD100]");
    seat.classList.remove("text-[#03071280]");
    seat.classList.add("text-white");
    selectedSeats.push(seat);
    noOfTakenSeats = selectedSeats.length;
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
    newRow.innerHTML = `<tc class='pl-2'>${seatNo}</tc><tc class='pl-8'>Economy</tc><tc class='pr-4'>550.00</tc>`;
    seatTable.append(newRow);
    total = document.getElementById("total");
    total.innerText = `${(550 * noOfTakenSeats).toFixed(2)}`;
    grand = document.getElementById("grand");
    grand.innerText = `${(discountFactor * 550 * noOfTakenSeats).toFixed(2)}`;
    if (noOfTakenSeats == 4) {
      apply = document.getElementById("apply");
      apply.classList.remove("btn-disabled");
    }
    handleNextButton();
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

apply = document.getElementById("apply");
apply.addEventListener("click", function () {
  applyCoupon(apply);
});

function applyCoupon(apply) {
  coupon = document.getElementById("coupon");
  discount = document.getElementById("discount");

  if (validCoupons.includes(coupon.value)) {
    if (coupon.value == "NEW15") {
      discountFactor = 0.85;
      discount.innerText = (0.15 * noOfTakenSeats * 550).toFixed(2);
    } else {
      discountFactor = 0.8;
      discount.innerText = (0.2 * noOfTakenSeats * 550).toFixed(2);
    }
    discountPrice = document.getElementById("discount-price");
    discountPrice.classList.remove("hidden");
    discountPrice.classList.add("flex");
    grand = document.getElementById("grand");
    grand.innerText = `${(discountFactor * 550 * noOfTakenSeats).toFixed(2)}`;
    couponContainer = document.getElementById("couponContainer");
    couponContainer.classList.add("hidden");
  } else {
    wrong_coupon_modal.showModal();
  }
}

phnNumber = document.getElementById("phnNumber");
phnNumber.addEventListener("input", function () {
  handleNextButton();
});
next = document.getElementById("next");
function handleNextButton() {
  if (noOfTakenSeats > 0) {
    phnNumber = document.getElementById("phnNumber");
    if (phnNumber.value) {
      next.classList.remove("btn-disabled");
    } else {
      next.classList.add("btn-disabled");
    }
  } else {
    next.classList.add("btn-disabled");
  }
}
