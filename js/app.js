//Selection of the section
const section = document.querySelector("section");

//Generate the data
const imgData = () => [
  {
    imgSrc: "./img/eyes.png",
    name: "Dog eyes",
  },
  {
    imgSrc: "./img/angelDog.png",
    name: "Dog angel",
  },
  {
    imgSrc: "./img/belleDog.png",
    name: "Dog belle",
  },
  {
    imgSrc: "./img/fesses.png",
    name: "Dog hass",
  },
  {
    imgSrc: "./img/hugsDog.png",
    name: "Dog hug",
  },
  {
    imgSrc: "./img/snoopy.png",
    name: "Dog snoopy",
  },
  {
    imgSrc: "./img/tongDog.png",
    name: "Dog tong",
  },
  {
    imgSrc: "./img/unicornDog.png",
    name: "Dog unicorn",
  },
  {
    imgSrc: "./img/eyes.png",
    name: "Dog eyes",
  },
  {
    imgSrc: "./img/angelDog.png",
    name: "Dog angel",
  },
  {
    imgSrc: "./img/belleDog.png",
    name: "Dog belle",
  },
  {
    imgSrc: "./img/fesses.png",
    name: "Dog hass",
  },
  {
    imgSrc: "./img/hugsDog.png",
    name: "Dog hug",
  },
  {
    imgSrc: "./img/snoopy.png",
    name: "Dog snoopy",
  },
  {
    imgSrc: "./img/tongDog.png",
    name: "Dog tong",
  },
  {
    imgSrc: "./img/unicornDog.png",
    name: "Dog unicorn",
  },
];

//Random image
const rand = () => {
  const randImg = imgData();
  randImg.sort(() => Math.random() - 0.5);
  //console.log(randImg)
  return randImg;
};

//Card generator
const cardGenerator = () => {
  const randImg = rand();

  //HTML
  randImg.forEach((item) => {
    const card = document.createElement("div");
    const font = document.createElement("img");
    const back = document.createElement("div");
    //console.log(font);
    card.classList = "card";
    font.classList = "font";
    back.classList = "back";

    //Info to the card
    font.src = item.imgSrc;
    card.setAttribute("name", item.name);

    //Create card
    section.appendChild(card);
    card.appendChild(font);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      check(e);
    });
  });
};

//Check Cards
const check = (e) => {
  const clickCard = e.target;
  //console.log(clickCard)
  clickCard.classList.add("checked");

  const flippedCards = document.querySelectorAll(".checked");
  const toggleCard = document.querySelectorAll(".toggleCard");
  //console.log(flippedCards)

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("checked");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("checked");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }

  if (toggleCard.length === 16) {
    restart();
  }
};

//Restart Game
const restart = () => {
  let randImg = rand();

  let fonts = document.querySelectorAll(".font");
  let cards = document.querySelectorAll(".card");

  randImg.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      fonts[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
    }, 1000);    
  });

};

cardGenerator();
