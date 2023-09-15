function rotateImg1(alt) {
  rotation = 180;
  document.querySelector(".flip-card-container1").style.transform = `rotateY(${rotation}deg)`;
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup").style.visibility = 'visible';
  document.querySelector(".popup__content").style.opacity = 1;
  document.querySelector(".popup__content").style.transform = 'perspective(600px) translate(0px,0%) rotateX(0deg)';

  var theDiv = document.getElementById("name_card");
  const dictionary = {
    "1": "Шут", "2": "Маг", "3": "Императрица", "4": "Император", "5": "Жрица", "6": "Жрец"
  }
  var content = document.createTextNode(dictionary[alt]);
  theDiv.appendChild(content);
}

function closePopup() {
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup").style.visibility = 'hidden';
  document.querySelector(".popup__content").style.opacity = 0;
  document.querySelector(".popup__content").style.transform = 'perspective(600px) translate(0px,-100%) rotateX(45deg)';
  document.querySelector(".flip-card-container1").style.transform = 'rotateY(0deg)';
}

let rotation = 0;
function rotateImg() {
  rotation += 180; // add 90 degrees, you can change this as you want
  if (rotation === 360) {
    // 360 means rotate back to 0
    rotation = 0;
  }
  document.querySelector(".flip-card-container2").style.transform = `rotateY(${rotation}deg)`;
}
