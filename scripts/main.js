let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/bowie.jpeg') {
//       myImage.setAttribute('src','images/bowie-pup.jpeg');
//     } else {
//       myImage.setAttribute('src','images/bowie.jpeg');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello ' + myName + ', I am Bowie!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName + ', I am Bowie!';
}

myButton.onclick = function() {
  setUserName();
}