let chronometer = new Chronometer();
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = `START`;
  btnLeft.className = `btn start`;
}

function setSplitBtn() {
    btnRight.innerText = `RESET`;
    btnRight.className = `btn reset`;
}

function setStartBtn() {
    btnLeft.innerText = `STOP`;
    btnLeft.className = `btn stop`;
}

function setResetBtn() {
    btnRight.innerText = `SPLIT`;
    btnRight.className = `btn split`;
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === `START`){
      setStartBtn()
  } else {
      setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
    if (btnRight.innerText === `RESET`){
        setResetBtn();
    } else {
        setSplitBtn();
    }
});
