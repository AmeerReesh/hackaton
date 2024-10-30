// const cards = [];
// let cardId = 1; // Start cardId from 1

// // Function to create a card object
// function createCard(cardId, cardNum, cardGroup, cardColor) {
//     return {
//         cardId: cardId,
//         cardNum: cardNum,
//         cardGroup: cardGroup,
//         cardColor: cardColor,
//         cardName: `img${cardId}`
//     };
// }

// // Generate 10 cards for each group with specified properties
// ['S', 'A', 'B', 'C'].forEach((group, index) => {
//     const color = (group === 'S' || group === 'A') ? 'gold' : 'white';
//     for (let num = 1; num <= 10; num++) {
//         cards.push(createCard(cardId, num, group, color));
//         cardId++; // Increment cardId for each card
//     }
// });

// console.log(cards);







const Cards= {}; // Object to store img elements by name

for (let i = 1; i <= 40; i++) { // Replace 10 with the number of images you need
    const img = document.createElement('img');
    img.id = `img${i}`; // Optional: set an ID for each img element
    img.src = `img${i}.png`; // Set the image source as needed
    img.num = i; // Add a custom num property to store the image number

    images[`img${i}`] = img; // Store the img element in the object with a dynamic key
}





//  /// get random numbers from 1- 40 
// // Step 1: Create an array with numbers from 1 to 40
// const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

// // Step 2: Shuffle the array using the Fisher-Yates algorithm
// for (let i = numbers.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
// }
// const container= document.getElementById('container');
// const order= document.getElementById('order');
// const colomnOne = document.getElementById('one');
// const colomnTwo = document.getElementById('two');
// const colomnThree = document.getElementById('three');
// const colomnFour = document.getElementById('four');
// const colomnFive = document.getElementById('five');
// const colomnSix = document.getElementById('six');
// order.appendChild(colomnOne);
// order.appendChild(colomnTwo);
// order.appendChild(colomnThree);
// order.appendChild(colomnFour);
// order.appendChild(colomnFive);
// order.appendChild(colomnSix);
//  // 33 card => 8,7,6,5,4,3

// for (let i=1 ; i<33; i++){
//     const imgCover = document.createElement('img');
//     imgCover.src = "blackCover.jpg";
//     imgCover.className = "BlackCard";
//     imgCover.id =`imgCover${i}`;
//     imgCover.style.width = "200px";
//     imgCover.style.height = "250px";
//     imgCover.style.position ="absolute";
//     imgCover.style.display ="block";
// if (i<8){
//     imgCover.style.zIndex= i;
//     imgCover.style.left = '0px' ;
//     imgCover.style.top = (i - 1) * 40 + "px";
//     colomnOne.appendChild(imgCover);
// } 
// if(i>8 & i<15){
//     imgCover.style.zIndex= i-8;
//     imgCover.style.left = '0px' ;
//     imgCover.style.top = (i - 9) * 40  + "px";
//     colomnTwo.appendChild(imgCover);
// }
// if(i>15 & i<21){
//     imgCover.style.zIndex= i-15;
//     imgCover.style.left = '0px' ;
//     imgCover.style.top = (i - 16) * 40 + "px";
//     colomnThree.appendChild(imgCover);
// }
//  if(i>21 & i<26){
//     imgCover.style.zIndex= i-21;
//     imgCover.style.left = '0px' ;
//     imgCover.style.top = (i - 22) * 40 + "px";
//     colomnFour.appendChild(imgCover);
// }
// if(i>26 & i<30){
//     imgCover.style.zIndex= i-26;
//     imgCover.style.left = '0px' ;
//     imgCover.style.top = (i - 27) * 40  + "px";
//     colomnFive.appendChild(imgCover);
// }
// if(i>30 & i<33){
//     imgCover.style.zIndex= i-30;
//     imgCover.style.left = 'px' ;
//     imgCover.style.top = (i - 31) * 40 + "px";
//     colomnSix.appendChild(imgCover);
// }

// }
// /// order the original cards with display : none
// for (let i=1 ; i<34; i++){
//     const num =numbers[i];//random num from 1-40
//     const imgCard =  images[`img${num}`];
//     imgCard.style.width = "200px";
//     imgCard.style.height = "250px";
//     imgCard.style.position ="absolute";
//     imgCard.style.display ="none";
// if (i<8){
//     imgCard.style.zIndex= i;
//     imgCard.style.left = '0px' ;
//     imgCard.style.top = (i - 1) * 40 + "px";
//     colomnOne.appendChild(imgCard);
// } 
// if(i>8 & i<15){
//     imgCard.style.zIndex= i-8;
//     imgCard.style.left = '0px' ;
//     imgCard.style.top = (i - 9) * 40  + "px";
//     colomnTwo.appendChild(imgCard);
// }
// if(i>15 & i<21){
//     imgCard.style.zIndex= i-15;
//     imgCard.style.left = '0px' ;
//     imgCard.style.top = (i - 16) * 40 + "px";
//     colomnThree.appendChild(imgCard);
// }
//  if(i>21 & i<26){
//     imgCard.style.zIndex= i-21;
//     imgCard.style.left = '0px' ;
//     imgCard.style.top = (i - 22) * 40 + "px";
//     colomnFour.appendChild(imgCard);
// }
// if(i>26 & i<30){
//     imgCard.style.zIndex= i-26;
//     imgCard.style.left = '0px' ;
//     imgCard.style.top = (i - 27) * 40  + "px";
//     colomnFive.appendChild(imgCard);
// }
// if(i>30 & i<33){
//     imgCard.style.zIndex= i-30;
//     imgCard.style.left = 'px' ;
//     imgCard.style.top = (i - 31) * 40 + "px";
//     colomnSix.appendChild(imgCard);
// }

// }

// function that checks that the image is drop in the right place 
function DropChecker (imgCheck , imgDrag)//it should take the drop checked img and the darged img
{
if(imgCheck.num>20 & imgDrag.num <21 ||imgCheck.num<21 & imgDrag.num >20)
    return true;
return false;
}


// function that checks the position of the drag img 
function positionImg (dargedImg){
    const imgNum = dargedImg.num;
    for (let i = 1; i < 40; i++) {
        if (i < 9 && numbers[i] === imgNum) return 1;
        if (i >= 9 && i < 15 && numbers[i] === imgNum) return 2;
        if (i >= 15 && i < 21 && numbers[i] === imgNum) return 3;
        if (i >= 21 && i < 26 && numbers[i] === imgNum) return 4;
        if (i >= 26 && i < 30 && numbers[i] === imgNum) return 5;
        if (i >= 30 && i < 33 && numbers[i] === imgNum) return 6;
    }
}


// // first card
// const num =numbers[i];//random num from 1-40
// const imgCard =  images[`img${num}`];
// imgCard.style.width = "200px";
// imgCard.style.height = "250px";
// imgCard.style.position ="absolute";
// imgCard.style.display ="none";
// img1.style.position ="absolute";
// img1.style.zIndex= 8;
// img1.style.left = '10px' ;
//  img1.style.top = (7) * 40 + "px";
// colomnOne.appendChild(img1);

// //second card
// const img2 = document.createElement('img');
// img2.src = `img1.png`; // it shoud be img.src =img${number[0]}.png
// img2.id= "img2"; // the same
// img2.style.width = "180px";
// img2.style.height = "220px";
// img2.style.position ="absolute";
// img2.style.zIndex= 7;
// img2.style.left = '10px' ;
//  img2.style.top = (6) * 40 + "px";
// colomnTwo.appendChild(img2);

// //third card
// const img3 = document.createElement('img');
// colomnThree.style.position = "relative";
// img3.src = `img1.png`;
// img3.className = "img1";
// img3.style.width = "180px";
// img3.style.height = "220px";
// img3.style.position ="absolute";
// img3.style.zIndex= 6;
// img3.style.left = '10px' ;
//  img3.style.top = (5) * 40 + "px";
// colomnThree.appendChild(img3);

// //fourth card 
// const img4 = document.createElement('img');
// img4.src = `img1.png`;
// img4.className = "img1";
// img4.style.width = "180px";
// img4.style.height = "220px";
// img4.style.position ="absolute";
// img4.style.zIndex= 5;
// img4.style.left = '10px' ;
//  img4.style.top = (4) * 40 + "px";
// colomnFour.appendChild(img4);

// //fifth card
// const img5 = document.createElement('img');
// img5.src = `img1.png`;
// img5.className = "img1";
// img5.style.width = "180px";
// img5.style.height = "220px";
// img5.style.position ="absolute";
// img5.style.zIndex= 4;
// img5.style.left = '10px' ;
//  img5.style.top = (3) * 40 + "px";
// colomnFive.appendChild(img5);
// // sixth card
// const img6 = document.createElement('img');
// img6.src = `img1.png`;
// img6.className = "img1";
// img6.style.width = "180px";
// img6.style.height = "220px";
// img6.style.position ="absolute";
// img6.style.zIndex= 3;
// img6.style.left = '50px' ;
// img6.style.top = (2) * 40 + "px";
// colomnSix.appendChild(img6);

// ///////////////this function about the darg event lisener//////////////
// function dragEventLisener(img1,img2){}
    
//     img1.addEventListener('dragstart', (e) => {
//         e.dataTransfer.effectAllowed = 'move';
//     });
//     img2.addEventListener('dragover', (e) => {
//         e.preventDefault();
//     });
    
    
//     img2.addEventListener('drop', (e) => {
//         if (DropChecker(img2, img1)) {
//             e.preventDefault();
//             const indexZ = Cards.img1.style.zIndex;
    
//             // Use double `==` for comparison
//             if (positionImg(img2) === 1) {
//                 colomnOne.appendChild(img1);
//             }
//             if (positionImg(img2) === 2) {
//                 colomnTwo.appendChild(img1);
//             }
//             if (positionImg(img2) === 3) {
//                 colomnThree.appendChild(img1);
//             }
//             if (positionImg(img2) === 4) {
//                 colomnFour.appendChild(img1);
//             }
//             if (positionImg(img2) === 5) {
//                 colomnFive.appendChild(img1);
//             }
//             if (positionImg(img2) === 6) {
//                 colomnSix.appendChild(img1);
//             }
    
//             // Hide image with id = "imgCoverX" based on zIndex
//             if (positionImg(img1) === 1 && indexZ > 1) {
//                 const img = document.getElementById(`imgCover${indexZ - 1}`);
//                 if (img) img.style.display = "none";
//             }
//             if (positionImg(img1) === 2) {
//                 const img = document.getElementById(`imgCover${indexZ - 9}`);
//                 if (img) img.style.display = "none";
//             }
//             if (positionImg(img1) === 3) {
//                 const img = document.getElementById(`imgCover${indexZ - 16}`);
//                 if (img) img.style.display = "none";
//             }
//             if (positionImg(img1) === 4) {
//                 const img = document.getElementById(`imgCover${indexZ - 22}`);
//                 if (img) img.style.display = "none";
//             }
//             if (positionImg(img1) === 5) {
//                 const img = document.getElementById(`imgCover${indexZ - 27}`);
//                 if (img) img.style.display = "none";
//             }
//             if (positionImg(img1) === 6) {
//                 const img = document.getElementById(`imgCover${indexZ - 30}`);
//                 if (img) img.style.display = "none";
//             }
//         }
//     });



//     ////////////////////this part is working dor the 7 card in the top of the page //////////
//     const sevenNumbersArr = [numbers[34], numbers[35], numbers[36], numbers[37], numbers[38], numbers[39], numbers[40]];
//     const imgHead = document.getElementById("imagHead");
//     let clickedNum = sevenNumbersArr.length; // Start at the length of the array to go backward

//     imgHead.addEventListener("click", () => {
//     if (sevenNumbersArr.length > 0) { // Check if the array is not empty
//         if (clickedNum === 0) { // Use `===` for comparison
//             clickedNum = sevenNumbersArr.length; // Reset clickedNum when it reaches 0
//         }

//         clickedNum--; // Decrement clickedNum to move to the previous item
//         const imgCard = sevenNumbersArr[clickedNum]; // Get the current image element

//         // Apply styles to imgCard
//         imgCard.style.width = "200px";
//         imgCard.style.height = "250px";
//         imgCard.style.position = "absolute";
//         imgCard.style.gridColumnStart = 2;
//         imgCard.style.gridColumnEnd = 3;
//     }
// });
// ///applying drag event lisener 
// for (let i=0 ;i<7 ; i++){

// }
