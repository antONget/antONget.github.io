function rotateImg1(alt) {
  rotation = 180;
  document.querySelector(".flip-card-container1").style.transform = `rotateY(${rotation}deg)`;
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup").style.visibility = 'visible';
  document.querySelector(".popup__content").style.opacity = 1;
  document.querySelector(".popup__content").style.transform = 'perspective(600px) translate(0px,0%) rotateX(0deg)';

  var div_name_card = document.getElementById("name_card");
  var description_card = document.getElementById("description_card");
  const dict_card = {
    "1": "Семерка кубков", "2": "Шестерка жезлов", "3": "Паж Кубков", "4": "Паж жезлов", "5": "Двойка Пентаклей", "6": "Аркан Влюбленные"
  }
  const dict_description = {
    "1": "Не гонитесь за всеми целями сразу. В отношениях выберите одного партнера. На работе не торопитесь!",
    "2": "Побеждайте! В любви преодолевайте все препятствия. В рабочих моментах проявите активность.",
    "3": "Откройте душу! В любви прислушивайтесь к совету молодого друга. А на работе начните доверять коллегам.",
    "4": "Отстаивайте свои позиции. В отношениях не лезьте на рога. А в движении на карьерной лестнице проявите характер.",
    "5": "Ищите гармонию. В любви не разрывайтесь надвое. На работе ишите финансовое улучшение.",
    "6": "Доверяйте своему партнеру или партнерше. В отношениях шире откройте сердце. А в карьере ищите единомышленников."
  }
  localStorage.setItem('num', "1");
  var content1 = document.createTextNode(dict_card[alt]);
  div_name_card.innerHTML = dict_card[alt];
  var content2 = document.createTextNode(dict_description[alt]);
  description_card.innerHTML = dict_description[alt];
}

function rotateImg2(alt) {
  rotation = 180;
  const flip_card_container = '.flip-card-container'+alt;
  document.querySelector(flip_card_container).style.transform = `rotateY(${rotation}deg)`;
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup").style.visibility = 'visible';
  document.querySelector(".popup__content").style.opacity = 1;
  document.querySelector(".popup__content").style.transform = 'perspective(600px) translate(0px,0%) rotateX(0deg)';

  var div_name_card = document.getElementById("name_card");
  var description_card = document.getElementById("description_card");
  const dict_card = {
    "1": "Шут", "2": "Маг", "3": "Императрица", "4": "Император", "5": "Жрица", "6": "Жрец"
  }
  const dict_description = {
    "1": "Вас ожидает дорога, известия полученные по телефону или письмом!",
    "2": "Вас ожидает напряженная ситуация в которой придется проявить силу противодействия.",
    "3": "Вас ожидает подведение итогов, принятие важного решения, серьезный разговор.",
    "4": "Вас ожидает задержка в реализации проектов,необходимость ждать плодов через длительный срок.",
    "5": "Вас ожидает ясность относительно чего - либо, новое действие или волевой , решительный шаг.",
    "6": "Вас ожидает праздник, расширение круга общения , веселая компания , хорошее развитие дел."
  }
  localStorage.setItem('num', alt);
  var content1 = document.createTextNode(dict_card[alt]);
  div_name_card.innerHTML = dict_card[alt];
  var content2 = document.createTextNode(dict_description[alt]);
  description_card.innerHTML = dict_description[alt];
}


function closePopup() {
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup").style.visibility = 'hidden';
  document.querySelector(".popup__content").style.opacity = 0;
  document.querySelector(".popup__content").style.transform = 'perspective(600px) translate(0px,-100%) rotateX(45deg)';
  const num = localStorage.num;

  var flip = '.flip-card-container'+num;
  document.querySelector(flip).style.transform = 'rotateY(0deg)';
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
