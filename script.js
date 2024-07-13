function appendToResult(value) {
    var resultBox = document.getElementById("result");
    if (resultBox.innerHTML === '0' && value !== '.') {
        resultBox.innerHTML = value;
    } else {
        resultBox.innerHTML += value;
    }
}

function deleteLast() {
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML.slice(0, -1);
}

const calculate = document.getElementById('btnCculate');

calculate.addEventListener('click', function() {
    const value = document.getElementById('input').value;
    const result = document.getElementById('result');
    if (value === '') {
        result.innerHTML = '(ᗒᗣᗕ)՞';
    } else {
        result.innerHTML = value;
    }
});

function clearResult() {
    document.getElementById("result").innerHTML = '0';
}

function deleteLast() {
    var resultBox = document.getElementById("result");
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
    
    if (resultBox === "") {
        resultBox.innerHTML = '0';
    } 
}

function send() {
    document.getElementById('hid').style.left = '-100%';
    document.getElementById('overlay').style.left = '-100%';
}

const secret = document.getElementById('scrt');
secret.addEventListener('click', function() {
    document.getElementById('hid').style.left = '0';
    document.getElementById('overlay').style.left = '0';
});

function reset() {
    var reset = document.getElementById('input').value = '';
}

const ext = document.getElementById('exit');

ext.addEventListener('click', function() {
    document.getElementById('hid').style.left = '-100%';
    document.getElementById('overlay').style.left = '-100%';
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
    });
  }

