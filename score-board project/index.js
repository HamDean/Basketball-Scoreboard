let point_home = 0;
let point_guest = 0;

let homePointEl = document.getElementById("home-ptn");
let guestPointEl = document.getElementById("guest-ptn");

let home_plus_1_el = document.getElementById("home-plus-1");
let home_plus_2_el = document.getElementById("home-plus-2");
let home_plus_3_el = document.getElementById("home-plus-3");

let guest_plus_1_el = document.getElementById("guest-plus-1");
let guest_plus_2_el = document.getElementById("guest-plus-2");
let guest_plus_3_el = document.getElementById("guest-plus-3");

function addOnePtn() {
  point_home += 1;
  homePointEl.textContent = point_home;
}
function addTwoPtn() {
  point_home += 2;
  homePointEl.textContent = point_home;
}
function addThreePtn() {
  point_home += 3;
  homePointEl.textContent = point_home;
}

function addOnePtn_guest() {
  point_guest += 1;
  guestPointEl.textContent = point_guest;
}
function addTwoPtn_guest() {
  point_guest += 2;
  guestPointEl.textContent = point_guest;
}
function addThreePtn_guest() {
  point_guest += 3;
  guestPointEl.textContent = point_guest;
}

function clearHomePoint() {
  point_home = 0;
  homePointEl.textContent = point_home;
}

function clearGuestPoint() {
  point_guest = 0;
  guestPointEl.textContent = point_guest;
}
