const cards = [];
let cardId = 1; // Start cardId from 1

// Function to create a card object
function createCard(cardId, cardNum, cardGroup, cardColor) {
    return {
        cardId: cardId,
        cardNum: cardNum,
        cardGroup: cardGroup,
        cardColor: cardColor,
        cardName: `img${cardId}`
    };
}

// Generate 10 cards for each group with specified properties
['S', 'A', 'B', 'C'].forEach((group, index) => {
    const color = (group === 'S' || group === 'A') ? 'gold' : 'white';
    for (let num = 1; num <= 10; num++) {
        cards.push(createCard(cardId, num, group, color));
        cardId++; // Increment cardId for each card
    }
});

console.log(cards);


 /// get random numbers from 1- 40 
// Step 1: Create an array with numbers from 1 to 40
const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

// Step 2: Shuffle the array using the Fisher-Yates algorithm
for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
const container= document.getElementById('container');
const order= document.getElementById('order');
const colomnOne = document.getElementById('one');
const colomnTwo = document.getElementById('two');
const colomnThree = document.getElementById('three');
const colomnFour = document.getElementById('four');
const colomnFive = document.getElementById('five');
const colomnSix = document.getElementById('six');
order.appendChild(colomnOne);
order.appendChild(colomnTwo);
order.appendChild(colomnThree);
order.appendChild(colomnFour);
order.appendChild(colomnFive);
order.appendChild(colomnSix);
 // 33 card => 8,7,6,5,4,3

for (let i=1 ; i<34; i++){
    const imgCover = document.createElement('img');
    imgCover.src = "blackCover.jpg";
    imgCover.className = "BlackCard";
    imgCover.id =i;
    imgCover.style.width = "200px";
    imgCover.style.height = "250px";
    imgCover.style.position ="absolute";
if (i<8){
    imgCover.style.zIndex= i;
    imgCover.style.left = '0px' ;
    imgCover.style.top = (i - 1) * 40 + "px";
    colomnOne.appendChild(imgCover);
} 
if(i>8 & i<15){
    imgCover.style.zIndex= i-8;
    imgCover.style.left = '0px' ;
    imgCover.style.top = (i - 9) * 40  + "px";
    colomnTwo.appendChild(imgCover);
}
if(i>15 & i<21){
    imgCover.style.zIndex= i-15;
    imgCover.style.left = '0px' ;
    imgCover.style.top = (i - 16) * 40 + "px";
    colomnThree.appendChild(imgCover);
}
 if(i>21 & i<26){
    imgCover.style.zIndex= i-21;
    imgCover.style.left = '0px' ;
    imgCover.style.top = (i - 22) * 40 + "px";
    colomnFour.appendChild(imgCover);
}
if(i>26 & i<30){
    imgCover.style.zIndex= i-26;
    imgCover.style.left = '0px' ;
    imgCover.style.top = (i - 27) * 40  + "px";
    colomnFive.appendChild(imgCover);
}
if(i>30 & i<33){
    imgCover.style.zIndex= i-30;
    imgCover.style.left = 'px' ;
    imgCover.style.top = (i - 31) * 40 + "px";
    colomnSix.appendChild(imgCover);
}

}

// first card
    const img1 = document.createElement('img');
    img1.src = `img1.png`;
    img1.className = "img1";
    img1.style.width = "180px";
    img1.style.height = "220px";
    img1.style.position ="absolute";
    img1.style.zIndex= 8;
    img1.style.left = '10px' ;
     img1.style.top = (7) * 40 + "px";
    colomnOne.appendChild(img1);

//second card
const img2 = document.createElement('img');
    img2.src = `img1.png`; // it shoud be img.src =img${number[0]}.png
    img2.className = "img1"; // the same
    img2.style.width = "180px";
    img2.style.height = "220px";
    img2.style.position ="absolute";
    img2.style.zIndex= 7;
    img2.style.left = '10px' ;
     img2.style.top = (6) * 40 + "px";
    colomnTwo.appendChild(img2);

//third card
const img3 = document.createElement('img');
colomnThree.style.position = "relative";
    img3.src = `img1.png`;
    img3.className = "img1";
    img3.style.width = "180px";
    img3.style.height = "220px";
    img3.style.position ="absolute";
    img3.style.zIndex= 6;
    img3.style.left = '10px' ;
     img3.style.top = (5) * 40 + "px";
    colomnThree.appendChild(img3);

//fourth card 
const img4 = document.createElement('img');
    img4.src = `img1.png`;
    img4.className = "img1";
    img4.style.width = "180px";
    img4.style.height = "220px";
    img4.style.position ="absolute";
    img4.style.zIndex= 5;
    img4.style.left = '10px' ;
     img4.style.top = (4) * 40 + "px";
    colomnFour.appendChild(img4);

//fifth card
const img5 = document.createElement('img');
    img5.src = `img1.png`;
    img5.className = "img1";
    img5.style.width = "180px";
    img5.style.height = "220px";
    img5.style.position ="absolute";
    img5.style.zIndex= 4;
    img5.style.left = '10px' ;
     img5.style.top = (3) * 40 + "px";
    colomnFive.appendChild(img5);
// sixth card
const img6 = document.createElement('img');
    img6.src = `img1.png`;
    img6.className = "img1";
    img6.style.width = "180px";
    img6.style.height = "220px";
    img6.style.position ="absolute";
    img6.style.zIndex= 3;
    img6.style.left = '50px' ;
    img6.style.top = (2) * 40 + "px";
    colomnSix.appendChild(img6);





    // const card = document.getElementById('cards');
    // const dropzone = document.getElementById('dropzone');
    
    img1.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
    });
    img1.addEventListener('click', () => {
        if (card.style.display === 'none' || card.style.display === '') {
            card.src = customImageUrl; // Set the custom image source
            card.style.display = 'block'; // Show the image
        } else {
            image.style.display = 'none'; // Hide the image
        }
    })
    img2.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    img2.addEventListener('drop', (e) => {
        e.preventDefault();
        img2.appendChild(img1);
    });



// for (let i= 0 ; i<33 ; i++ ){
//     const EX= document.createElement('div');
//     EX.cardText =Cards.cardText;/// i have to create in html p 
//     EX.num=Cards.num;
//     //gropus and colors 

//     EX.className="card id = i";
// }

// const EX= document.createElement('div');
// EX.className="classEX";

//ex.classname ="hidden class";


// create classes
//randoom function (get the card in order)
//if / else rules 
//1- we can't put the same colors of card one on another
//2- the numbers have to be in order 


// eventlisiner dragstart
// evrnt lisiner double clicked 