let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Tacos.jpeg') {
      myImage.setAttribute('src','images/birria-tacos.jpeg');
    } else {
      myImage.setAttribute('src','images/Tacos.jpeg');
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
    myHeading.textContent = 'Tacos are the best, ' + myName;
   }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tacos are the best, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}