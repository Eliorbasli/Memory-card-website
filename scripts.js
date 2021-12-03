'use strict';

const nameInput = document.getElementById("Player1");
const nameInput2 = document.getElementById("Player2");

var playerTab = document.querySelector(".player");

var playerName = document.getElementById("playerName1");
var playerName2 = document.getElementById("playerName2");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");

var victory1 = document.getElementById("victory1");
var victory2 = document.getElementById("victory2");

var recoredPlayer = document.getElementById("recoredPlayer");
var mylist = document.getElementById("selectSize");

// declaring move variable
let moves = 0;
let match = 0;

const sectionCard = document.querySelector('section');
const enterwindws = document.querySelector('.popup');


const scores = [0, 0];
const victories = [0, 0];
let activePlayer = 0;
var size = 0;
var scoreNumber = 10;
var cardData;
let p;

//Generate the data
const getData4x4 = () => [{
        imgSrc: "./pics/android.png",
        name: "android"
    },
    {
        imgSrc: "./pics/python.png",
        name: "python"
    },
    {
        imgSrc: "./pics/google.png",
        name: "google"
    },
    {
        imgSrc: "./pics/html-5.png",
        name: "html-5"
    },
    {
        imgSrc: "./pics/java.png",
        name: "java"
    },
    {
        imgSrc: "./pics/js.png",
        name: "js"
    },
    {
        imgSrc: "./pics/twitter.png",
        name: "twitter"
    },
    {
        imgSrc: "./pics/docker.png",
        name: "docker"
    },
    ////////////////
    {
        imgSrc: "./pics/android.png",
        name: "android"
    },
    {
        imgSrc: "./pics/python.png",
        name: "python"
    },
    {
        imgSrc: "./pics/google.png",
        name: "google"
    },
    {
        imgSrc: "./pics/html-5.png",
        name: "html-5"
    },
    {
        imgSrc: "./pics/java.png",
        name: "java"
    },
    {
        imgSrc: "./pics/js.png",
        name: "js"
    },
    {
        imgSrc: "./pics/twitter.png",
        name: "twitter"
    },
    {
        imgSrc: "./pics/docker.png",
        name: "docker"
    },
];
//Generate the data2
const getData5x5 = () => [{
        imgSrc: "./pics/android.png",
        name: "android"
    },
    {
        imgSrc: "./pics/python.png",
        name: "python"
    },
    {
        imgSrc: "./pics/google.png",
        name: "google"
    },
    {
        imgSrc: "./pics/html-5.png",
        name: "html-5"
    },
    {
        imgSrc: "./pics/java.png",
        name: "java"
    },
    {
        imgSrc: "./pics/js.png",
        name: "js"
    },
    {
        imgSrc: "./pics/twitter.png",
        name: "twitter"
    },
    {
        imgSrc: "./pics/docker.png",
        name: "docker"
    },
    {
        imgSrc: "./pics/linux.png",
        name: "linux"
    },
    {
        imgSrc: "./pics/github.png",
        name: "github"
    },
    {
        imgSrc: "./pics/youtube.png",
        name: "youtube"
    },
    {
        imgSrc: "./pics/apple.png",
        name: "apple"
    },
    ///////////////
    {
        imgSrc: "./pics/android.png",
        name: "android"
    },
    {
        imgSrc: "./pics/python.png",
        name: "python"
    },
    {
        imgSrc: "./pics/google.png",
        name: "google"
    },
    {
        imgSrc: "./pics/html-5.png",
        name: "html-5"
    },
    {
        imgSrc: "./pics/java.png",
        name: "java"
    },
    {
        imgSrc: "./pics/js.png",
        name: "js"
    },
    {
        imgSrc: "./pics/twitter.png",
        name: "twitter"
    },
    {
        imgSrc: "./pics/docker.png",
        name: "docker"
    },
    {
        imgSrc: "./pics/linux.png",
        name: "linux"
    },
    {
        imgSrc: "./pics/github.png",
        name: "github"
    },
    {
        imgSrc: "./pics/youtube.png",
        name: "youtube"
    },
    {
        imgSrc: "./pics/apple.png",
        name: "apple"
    },
    {
        imgSrc: "./pics/joker2.png",
        name: "joker"
    },
];

//Randomize
const randomize = () => {
    if (size == 4) {
        console.log('size  4x4' + size);
        cardData = getData4x4();
    } else {
        console.log('5x5' + size);
        cardData = getData5x5();
    }
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//card generator function
const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach(item => {

        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        //Attach the cards to the section
        sectionCard.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });

};

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');

    if (flippedCards[0].getAttribute('name') == "joker") {
        console.log("joker found");
        flippedCards[0].classList.remove("flipped");
        flippedCards[0].style.pointerEvents = 'none';
    }

    //Logic
    if (flippedCards.length == 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            match++;
            console.log("match" + match);
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = 'none';
                console.log('activePlayer1:' + scores[0] + "activePlayer2:" + scores[1])

                if (activePlayer == 0) {
                    scores[0] = scores[0] + 1;
                    score1.innerHTML = scores[0]
                } else {
                    scores[1]++;
                    score2.innerHTML = scores[1];
                }

                if ((toggleCard.length === 16 && size == 4) || (toggleCard.length === 24 && size == 5) || match >= 12) {
                    if (scores[0] > scores[1]) {
                        victories[0]++
                        victory1.innerHTML = victories[0];
                        console.log("Player1 win in this game..");
                    } else {
                        victories[1]++;
                        victory2.innerHTML = victories[1];
                        console.log("Player2 win in this game..");
                    }
                    restart();
                }
            })

        } else {
            console.log("wrong");
            activePlayer = activePlayer === 0 ? 1 : 0; //switch Player
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
        }
    }
}


//Restart
const restart = () => {
    match = 0;
    scores[0] = 0;
    scores[1] = 0;

    score1.innerHTML = 0;
    score2.innerHTML = 0;
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll('.card');
    sectionCard.style.pointerEvents = "none";

    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //Randomize

        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            sectionCard.style.pointerEvents = 'all';
            console.log('cards update..');
        }, 1000)
    });


}

const startGame = () => {
    sectionCard.classList.remove("hidden");
    console.log("name player  " + nameInput.value);
    console.log("name player  " + nameInput2.value);
    playerTab.classList.remove("hidden");

    playerName.innerHTML = nameInput.value;
    playerName2.innerHTML = nameInput2.value;
    score1.innerHTML = scores[0];
    score2.innerHTML = scores[1];

    p = new Promise((resolve, reject) => {
        size = mylist.options[mylist.selectedIndex].value;
        if (size == 5) {
            sectionCard.classList.add('sction5x5');
            cardGenerator();
            enterwindws.classList.add('hidden');
            resolve();
        } else if (size == 4) {
            console.log('size from html ' + size);
            enterwindws.classList.add('hidden');
            cardGenerator();
        } else {
            reject('Error');
        }
    })

    p.then(() => {
        console.log("The " + boardSize + " has been loaded");
    }).catch((message) => {
        console.log(message);
    });
};