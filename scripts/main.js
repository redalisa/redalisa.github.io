let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kirjastot.png') {
      myImage.setAttribute('src','images/kävellen-kirjastot.png');
    } else {
      myImage.setAttribute('src','images/kirjastot.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Saavutettavuuden tarkastelu tehty: ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Saavutettavuuden tarkastelu tehty: ' + storedName;
 }

myButton.onclick = function() {
    setUserName();
}