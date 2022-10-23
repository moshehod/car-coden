const passcode = [1, 2, 3, 4, 5];
const inputCode = [];
let clicks = 0;

function b1() {
  const music = new Audio("beep.mp3");
  music.play();
  if (clicks < 5) {
    inputCode.push(1);
    document.getElementById("aaa").innerHTML = inputCode;
    document.getElementById("h2-div-1").style.color = "yellow";
    clicks++;
  } else {
  }
}

function b2() {
  const music = new Audio("beep.mp3");
  music.play();
  if (clicks < 5) {
    inputCode.push(2);
    document.getElementById("aaa").innerHTML = inputCode;
    document.getElementById("h2-div-2").style.color = "yellow";
    clicks++;
  } else {
  }
}
function b3() {
  const music = new Audio("beep.mp3");
  music.play();
  if (clicks < 5) {
    inputCode.push(3);
    document.getElementById("aaa").innerHTML = inputCode;
    document.getElementById("h2-div-3").style.color = "yellow";
    clicks++;
  } else {
  }
}
function b4() {
  const music = new Audio("beep.mp3");
  music.play();
  if (clicks < 5) {
    inputCode.push(4);
    document.getElementById("aaa").innerHTML = inputCode;
    document.getElementById("h2-div-4").style.color = "yellow";
    clicks++;
  } else {
  }
}
function b5() {
  const music = new Audio("beep.mp3");
  music.play();

  if (clicks < 5) {
    inputCode.push(5);
    document.getElementById("aaa").innerHTML = inputCode;
    document.getElementById("h2-div-5").style.color = "yellow";
    clicks++;
  }
}

function bpound() {
  const music = new Audio("beep.mp3");
  music.play();

  let x0 = inputCode[0];
  let x1 = inputCode[1];
  let x2 = inputCode[2];
  let x3 = inputCode[3];
  let x4 = inputCode[4];

  let p0 = passcode[0];
  let p1 = passcode[1];
  let p2 = passcode[2];
  let p3 = passcode[3];
  let p4 = passcode[4];

  if (x0 === p0 && x1 === p1 && x2 === p2 && x3 === p3 && x4 === p4) {
    document.getElementById("aaa").innerHTML = "Code is correct";
    document.getElementById("h2-div-1").style.color = "green";
    document.getElementById("h2-div-2").style.color = "green";
    document.getElementById("h2-div-3").style.color = "green";
    document.getElementById("h2-div-4").style.color = "green";
    document.getElementById("h2-div-5").style.color = "green";
    document.getElementById("h2-div-pound").style.color = "green";
    document.getElementById("aaa").style.color = "green";
  } else {
    document.getElementById("aaa").innerHTML = "Wrong code";
    document.getElementById("h2-div-1").style.color = "red";
    document.getElementById("h2-div-2").style.color = "red";
    document.getElementById("h2-div-3").style.color = "red";
    document.getElementById("h2-div-4").style.color = "red";
    document.getElementById("h2-div-5").style.color = "red";
    document.getElementById("h2-div-pound").style.color = "red";
    document.getElementById("aaa").style.color = "red";
  }
}

function reset() {
  document.location.reload();
}
