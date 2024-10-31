
const Cards= {}; // Object to store img elements by name

for (let i = 1; i <= 40; i++) { // Replace 10 with the number of images you need
    const img = document.createElement('img');
    img.id = `img${i}`; // Optional: set an ID for each img element
    img.src = `images/img${i}.png`; // Set the image source as needed
    img.num = i; // Add a custom num property to store the image number

    Cards[`img${i}`] = img; // Store the img element in the object with a dynamic key
}

 /// get random numbers from 1- 40 
// Step 1: Create an array with numbers from 1 to 40
const numbers = Array.from({ length: 40 }, (_, i) => i + 1);

// Step 2: Shuffle the array using the Fisher-Yates algorithm
for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
console.log(numbers );

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
 // /// order the original cards with display : none
for (let i=1 ; i<34; i++){
    const num =numbers[i];//random num from 1-40
    const imgCard =  Cards[`img${num}`];
    imgCard.style.width = "200px";
    imgCard.style.height = "250px";
    imgCard.style.position ="absolute";
    // imgCard.style.display ="none";
if (i<8){
    imgCard.style.zIndex= i;
    imgCard.style.left = '0px' ;
    imgCard.style.top = (i - 1) * 40 + "px";
    colomnOne.appendChild(imgCard);
} 
if(i>8 & i<15){
    imgCard.style.zIndex= i-8;
    imgCard.style.left = '0px' ;
    imgCard.style.top = (i - 9) * 40  + "px";
    colomnTwo.appendChild(imgCard);
}
if(i>15 & i<21){
    imgCard.style.zIndex= i-15;
    imgCard.style.left = '0px' ;
    imgCard.style.top = (i - 16) * 40 + "px";
    colomnThree.appendChild(imgCard);
}
 if(i>21 & i<26){
    imgCard.style.zIndex= i-21;
    imgCard.style.left = '0px' ;
    imgCard.style.top = (i - 22) * 40 + "px";
    colomnFour.appendChild(imgCard);
}
if(i>26 & i<30){
    imgCard.style.zIndex= i-26;
    imgCard.style.left = '0px' ;
    imgCard.style.top = (i - 27) * 40  + "px";
    colomnFive.appendChild(imgCard);
}
if(i>30 & i<33){
    imgCard.style.zIndex= i-30;
    imgCard.style.left = 'px' ;
    imgCard.style.top = (i - 31) * 40 + "px";
    colomnSix.appendChild(imgCard);
}

}
// // first card
const num1 =numbers[0];//random num from 1-40
const img1 =  Cards[`img${num1}`];
img1.style.width = "200px";
img1.style.height = "250px";
img1.style.position ="absolute";
img1.style.display ="block";
img1.style.zIndex= 8;
img1.style.left = 0 ;
img1.style.top = (7) * 40 + "px";
colomnOne.appendChild(img1);

//second card
const num2 =numbers[8];//random num from 1-40
const img2 =  Cards[`img${num2}`];
img2.style.width = "200px";
img2.style.height = "250px";
img2.style.position ="absolute";
img2.style.display ="block";
img2.style.zIndex= 7;
img2.style.left = 0 ;
 img2.style.top = (6) * 40 + "px";
colomnTwo.appendChild(img2);

//third card
const num3 =numbers[15];//random num from 1-40
const img3 =  Cards[`img${num3}`];
img3.style.width = "200px";
img3.style.height = "250px";
img3.style.position ="absolute";
img3.style.display ="block";
img3.style.zIndex= 6;
img3.style.left = '0px' ;
 img3.style.top = (5) * 40 + "px";
colomnThree.appendChild(img3);

//fourth card 
const num4 =numbers[21];//random num from 1-40
const img4 =  Cards[`img${num4}`];
img4.style.width = "200px";
img4.style.height = "250px";
img4.style.position ="absolute";
img4.style.display ="block";
img4.style.zIndex= 5;
img4.style.left = '0px' ;
 img4.style.top = (4) * 40 + "px";
colomnFour.appendChild(img4);

//fifth card
const num5 =numbers[26];//random num from 1-40
const img5 =  Cards[`img${num5}`];
img5.style.width = "200px";
img5.style.height = "250px";
img5.style.position ="absolute";
img5.style.display ="block";
img5.style.zIndex= 4;
img5.style.left = '0px' ;
 img5.style.top = (3) * 40 + "px";
colomnFive.appendChild(img5);
// sixth card
const num6 =numbers[30];//random num from 1-40
const img6 =  Cards[`img${num6}`];
img6.style.width = "200px";
img6.style.height = "250px";
img6.style.position ="absolute";
img6.style.display ="block";
img6.style.zIndex= 3;
img6.style.left = '30px' ;
img6.style.top = (2) * 40 + "px";
colomnSix.appendChild(img6);



for (let i=1 ; i<33; i++){
    const imgCover = document.createElement('img');
    imgCover.src = "images/blackCover.jpg";
    imgCover.className = "BlackCard";
    imgCover.id =`imgCover${i}`;
    imgCover.style.width = "200px";
    imgCover.style.height = "250px";
    imgCover.style.position ="absolute";
    imgCover.style.display ="block";
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

// function that checks that the image is drop in the right place 
function DropChecker (imgCheck , imgDrag)//it should take the drop checked img and the darged img
{
if(imgCheck.num>20 & imgDrag.num <21 ||imgCheck.num<21 & imgDrag.num >20)
    return true;
else{
    return false;
}

}


// function that checks the position of the drag img 
// function positionImg (dargedImg){
//     const imgNum = dargedImg.num;
//     for (let i = 1; i < 40; i++) {
//         if (i < 9 && numbers[i] === imgNum) return 1;
//         if (i >= 9 && i < 15 && numbers[i] === imgNum) return 2;
//         if (i >= 15 && i < 21 && numbers[i] === imgNum) return 3;
//         if (i >= 21 && i < 26 && numbers[i] === imgNum) return 4;
//         if (i >= 26 && i < 30 && numbers[i] === imgNum) return 5;
//         if (i >= 30 && i < 33 && numbers[i] === imgNum) return 6;
//     }
// }

// // כרטיס ראשון
// const num1 = numbers[0]; // מספר רנדומלי בין 1-40
// const img1 = Cards[`img${num1}`];
// img1.style.width = "200px";
// img1.style.height = "250px";
// img1.style.position = "absolute";
// img1.style.display = "block";
// img1.style.zIndex = 8;
// img1.style.left = "0px";
// img1.style.top = (7) * 40 + "px";
// colomnOne.appendChild(img1);

// // כרטיס שני
// const num2 = numbers[8]; // מספר רנדומלי בין 1-40
// const img2 = Cards[`img${num2}`];
// img2.style.width = "200px";
// img2.style.height = "250px";
// img2.style.position = "absolute";
// img2.style.display = "block";
// img2.style.zIndex = 7;
// img2.style.left = "0px";
// img2.style.top = (6) * 40 + "px";
// colomnTwo.appendChild(img2);

// הפיכת התמונות לנגררות
// img1.draggable = true;
// img2.draggable = true;

// // פונקציית גרירה ושחרור
// function dragEventLisener(img1, img2) {
//     img1.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', img1.id); // שמירת מזהה התמונה שנגררת
//         e.dataTransfer.effectAllowed = 'move';
//     });

//     img2.addEventListener('dragover', (e) => {
//         e.preventDefault(); // מאפשר שחרור על האלמנט
//     });

//     img2.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const draggedImgId = e.dataTransfer.getData('text/plain'); // קבלת המזהה של התמונה שנגררה
//         const draggedImg = document.getElementById(draggedImgId); // מציאת האלמנט לפי המזהה

//         if (DropChecker(img2, draggedImg)) {
//             const indexZ = draggedImg.style.zIndex;

//             // בדיקה והוספה לעמודות הנכונות
//             const position = positionImg(img2);
//             switch (position) {
//                 case 1:
//                     colomnOne.appendChild(draggedImg);
//                     break;
//                 case 2:
//                     colomnTwo.appendChild(draggedImg);
//                     break;
//                 case 3:
//                     colomnThree.appendChild(draggedImg);
//                     break;
//                 case 4:
//                     colomnFour.appendChild(draggedImg);
//                     break;
//                 case 5:
//                     colomnFive.appendChild(draggedImg);
//                     break;
//                 case 6:
//                     colomnSix.appendChild(draggedImg);
//                     break;
//             }

//             // הסתרת תמונה מבוססת zIndex
//             const coverIndex = {
//                 1: indexZ - 1,
//                 2: indexZ - 9,
//                 3: indexZ - 16,
//                 4: indexZ - 22,
//                 5: indexZ - 27,
//                 6: indexZ - 30
//             };

//             const imgCover = document.getElementById(`imgCover${coverIndex[position]}`);
//             if (imgCover) imgCover.style.display = "none";
//         }
//     });
// }

// // קריאת הפונקציה עבור התמונות
// dragEventLisener(img1, img2);





// function dragEventLisener(img1, img2) {
//     // התחלת גרירה
//     img1.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', img1.id);
//     });

//     // אפשרות לשחרר על עמודה
//     colomnTwo.addEventListener('dragover', (e) => {
//         e.preventDefault();
//     });

//     // שחרור בעמודה
//     colomnTwo.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const draggedImgId = e.dataTransfer.getData('text/plain');
//         const draggedImg = document.getElementById(draggedImgId);

//         // הוספת התמונה לעמודה השנייה
//         if (draggedImg) {
//             colomnTwo.appendChild(draggedImg);
//         }
//     });
// }

// function dragEventLisener(img1, img2) {
   
//     img1.addEventListener('dragstart', (e) => {
//         disableOtherDrags(img1);
//         e.dataTransfer.setData('text/plain', img1.id); // שמירת ה-ID של img1
//     });

//     // אפשרות שחרור על img2
//     img2.addEventListener('dragover', (e) => {
//         e.preventDefault(); // מאפשר שחרור על img2
//     });

//     // שחרור על img2
//     img2.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const draggedImgId = e.dataTransfer.getData('text/plain'); // קבלת ה-ID של התמונה שנגררה
//         const draggedImg = document.getElementById(draggedImgId); // מציאת האלמנט של img1

//         // בדיקה אם קיימת התמונה שנגררה
//         if (draggedImg && DropChecker(img2, img1) && (getCardNum(img1)+1)===getCardNum(img2)) {
//             // העברה של img1 לעמודה של img2
//             HideImageCover(img1);
//             img1.style.top = (parseInt(img2.style.top, 10) + 40) + "px";
//             img1.style.zIndex = parseInt(img2.style.zIndex, 10) + 1;
//             console.log("draggedImg is" +draggedImg);
//             console.log("draggedImg.num"+draggedImg.num);
//             img2.parentNode.appendChild(draggedImg); // הוספת img1 לאותה עמודה שבה נמצא img2
           
//         }
//         enableAllDrags();
//     });
// }

// //add event lisener for all the cards 
// for (let i = 0; i < 40; i++) {
//     const img  = Cards[`img${numbers[i]}`];
    
//     for (let j = 0; j < 40; j++) { 
//         if(i != j){
//             const img2 =Cards[`img${numbers[j]}`];
//             dragEventLisener(img, img2);
//         }
        
//     }
// }
// dragEventLisener(img1, img2);
// dragEventLisener(img1, img3);
// dragEventLisener(img1, img4);
// dragEventLisener(img1, img5);
// dragEventLisener(img1, img6);

// dragEventLisener(img2, img1);
// dragEventLisener(img2, img3);
// dragEventLisener(img2, img4);
// dragEventLisener(img2, img5);
// dragEventLisener(img2, img6);

// dragEventLisener(img3, img2);
// dragEventLisener(img3, img1);
// dragEventLisener(img3, img4);
// dragEventLisener(img3, img5);
// dragEventLisener(img3, img6);

// dragEventLisener(img4, img2);
// dragEventLisener(img4, img3);
// dragEventLisener(img4, img1);
// dragEventLisener(img4, img5);
// dragEventLisener(img4, img6);

// dragEventLisener(img5, img2);
// dragEventLisener(img5, img3);
// dragEventLisener(img5, img4);
// dragEventLisener(img5, img1);
// dragEventLisener(img5, img6);

// dragEventLisener(img6, img2);
// dragEventLisener(img6, img3);
// dragEventLisener(img6, img4);
// dragEventLisener(img5, img1);
// dragEventLisener(img6, img5);


/////////function get the number of the card 
function getCardNum (img)
{
    if (img.num<11)
        return img.num;
    if(img.num >10 &&img.num<21)
        return img.num-10;
    if(img.num >20 &&img.num<31)
        return img.num-20;
    if(img.num >30 &&img.num<41)
        return img.num-30;
}


// function that checks the position of the drag img 
function positionImg(draggedImg) {
    const imgNum = draggedImg.num; 
    console.log(imgNum);
    
    for (let i = 0; i < 40; i++) {
        if (i < 8 && numbers[i] === imgNum) return 1;
        if (i >= 8 && i < 15 && numbers[i] === imgNum) return 2;
        if (i >= 15 && i < 21 && numbers[i] === imgNum) return 3;
        if (i >= 21 && i < 26 && numbers[i] === imgNum) return 4;
        if (i >= 26 && i < 30 && numbers[i] === imgNum) return 5;
        if (i >= 30 && i < 33 && numbers[i] === imgNum) return 6;
    }

    console.warn("No matching position found for imgNum:", imgNum);
    return -1; 
}


///////function that hide the sutible coverImage
function HideImageCover(img1) {
    
    const indexZ = parseInt(img1.style.zIndex) || 0; // המרת zIndex למספר
    const position = positionImg(img1); // שמירת הערך המוחזר מהפונקציה במשתנה
    console.log("indexz =" +indexZ);
    console.log("position"+position);

    // שימוש בתנאים המבוססים על position
    if (position === 1 && indexZ > 1) {
        const img = document.getElementById(`imgCover${indexZ - 1}`);//1
        if (img) img.style.display = "none";
    }
    if (position === 2) {
        const img = document.getElementById(`imgCover${indexZ +7}`);//9
        
        if (img) img.style.display = "none";
    }
    if (position === 3) {
        const img = document.getElementById(`imgCover${indexZ +14}`);//16
        console.log("imgCOVER"+img);
        
        
        
        
        if (img) img.style.display = "none";
    }
    if (position === 4) {
        const img = document.getElementById(`imgCover${indexZ +20}`);//22
        if (img) img.style.display = "none";
    }
    if (position === 5) {
        const img = document.getElementById(`imgCover${indexZ +25}`);//27
        if (img) img.style.display = "none";
    }
    if (position === 6) {
        const img = document.getElementById(`imgCover${indexZ +29}`);//30
        if (img) img.style.display = "none";
    }
}



let draggedImage = null; // משתנה גלובלי שמאחסן את התמונה הנגררת

// השבתת יכולת גרירה עבור כל התמונות פרט לתמונה הנגררת
function disableOtherDrags(currentImg) {
    for (let i = 0; i < 40; i++) {
        const img = Cards[`img${numbers[i]}`];
        if (img !== currentImg) {
            img.draggable = false; // ביטול גרירה על שאר התמונות
        }
    }
}

// הפעלת יכולת גרירה לכל התמונות
function enableAllDrags() {
    for (let i = 0; i < 40; i++) {
        const img = Cards[`img${numbers[i]}`];
        img.draggable = true; // החזרת יכולת הגרירה
    }
}

// הגדרת מאזין dragstart, dragover, ו-drop לכל תמונה
for (let i = 0; i < 40; i++) {
    const img = Cards[`img${numbers[i]}`];
    
    // כאשר מתחילים לגרור את התמונה
    img.addEventListener('dragstart', (e) => {
        draggedImage = img; // שמירת התמונה הנגררת במשתנה
        e.dataTransfer.setData('text/plain', img.id); // שמירת ה-ID של התמונה ב-dataTransfer
        disableOtherDrags(img); 
        // addLinkedImages(img);
        // const offsetX = 20; // מרחק אופקי קבוע בין התמונות
        // const offsetY = 20; // מרחק אנכי קבוע בין התמונות

        // // עדכון המיקום של כל תמונה ב-linkedImages לפי המיקום של img1
        // linkedImages.forEach((img, index) => {
        //     img.style.left = `${e.pageX + offsetX * (index + 1)}px`;
        //     img.style.top = `${e.pageY + offsetY * (index + 1)}px`;
        // });
    });

    // מאפשר שחרור על כל תמונה אחרת
    img.addEventListener('dragover', (e) => {
        e.preventDefault(); // מאפשר שחרור של התמונה על כל תמונה אחרת
    });

    // כאשר משחררים את התמונה על תמונה אחרת
    img.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedImgId = e.dataTransfer.getData('text/plain'); // קבלת ה-ID של התמונה שנגררה
        const draggedImg = document.getElementById(draggedImgId); // מציאת האלמנט של התמונה שנגררה

        // בדיקה אם התמונה הנגררת קיימת ואם מתקיימים תנאי השחרור
        if (draggedImg && DropChecker(img, draggedImg) && getCardNum(draggedImg) + 1 === getCardNum(img)) {
            HideImageCover(draggedImg); // הסתרת כיסוי במידת הצורך
            draggedImg.style.top = (parseInt(img.style.top, 10) + 40) + "px";
            draggedImg.style.zIndex = parseInt(img.style.zIndex, 10) + 1;

            console.log("העברה בוצעה: draggedImg is " + draggedImg.id);
            img.parentNode.appendChild(draggedImg); // הוספת התמונה לעמודה של התמונה הנבחרת
        }
        enableAllDrags(); // החזרת יכולת הגרירה לכל התמונות לאחר סיום השחרור
    });

    // איפוס יכולת הגרירה אם הגרירה לא מסתיימת בשחרור חוקי
    img.addEventListener('dragend', () => {
        enableAllDrags(); // החזרת יכולת הגרירה לכל התמונות
        draggedImage = null; // איפוס התמונה הנגררת
    });
}


const linkedImages = []; 
// פונקציה להוספת תמונות נוספות לגרירה עם התמונה הראשית
function addLinkedImages(currentImg) {
    // linkedImages.length = 0;
    const colomn =positionImg(currentImg);
    for (let i = 0; i < 40; i++) {
        const img = Cards[`img${numbers[i]}`];
    if( positionImg(Img) ===colomn && img.style.zIndex> currentImg.style.zIndex){
        img.draggable = true;
        linkedImages.push(img);
    }
        // החזרת יכולת הגרירה
    }
    // linkedImages.push(...otherImgs); // הוספת התמונות הנוספות למערך
    // dragEventLisener(mainImg); // קריאה לפונקציית האירועים עבור התמונה הראשית
}
////crete 7 card in headd
const headd = document.getElementById("sevenCards");
for (let i=33 ; i<40; i++){
    const num =numbers[i];//random num from 1-40
    const imgCard =  Cards[`img${num}`];
    console.log('iiiiiiiii    '+ imgCard);
    imgCard.style.display ="none";
    console.log("id=:"+imgCard.num);
    headd.appendChild(imgCard);
} 
// 7 cards
function HIDDENCARD(img){
    for (let i=33 ; i<40; i++){

        const num =numbers[i];//random num from 1-40
        const imgCard =  Cards[`img${num}`];
        if (sevenCards.contains(imgCard)){
            if(imgCard != img)
                imgCard.style.display ="none";
        }
    // if(imgCard != img)
    //     imgCard.style.display ="none";
        
    } 
}

//     ////////////////////this part is working dor the 7 card in the top of the page //////////
    const sevenNumbersArr = [numbers[33], numbers[34], numbers[35], numbers[36], numbers[37], numbers[38], numbers[39]];
    const imgHead = document.getElementById("imgHead");
    let clickedNum = sevenNumbersArr.length -1; // Start at the length of the array to go backward

    imgHead.addEventListener("click", () => {
    if (sevenNumbersArr.length > 0) { // Check if the array is not empty
        if (clickedNum === 0) { // Use `===` for comparison
            clickedNum = sevenNumbersArr.length -1; // Reset clickedNum when it reaches 0
        }

        clickedNum--; // Decrement clickedNum to move to the previous item
        // const imgCard = sevenNumbersArr[clickedNum]; // Get the current image element
        const imgId = `img${sevenNumbersArr[clickedNum]}`; 
        const imgCard = document.getElementById(imgId);
        if (imgCard) { // בדוק אם התמונה קיימת לפני השימוש ב-style
            // Apply styles to imgCard
            HIDDENCARD(imgCard);
            imgCard.style.display ="block";
            imgCard.style.width = "200px";
            imgCard.style.height = "250px";
            imgCard.style.position = "absolute";
            
        } else {
            console.error("Image not found with ID:", imgId); // הצגת שגיאה בקונסול אם התמונה לא נמצאה
        }
    }
});
/////get wich group is the card
function Group(img){
    const num= img.num;
    if(num<11) return "S";
    if( num>10 && num<21 ) return "A";
    if( num>20 && num<31 ) return "B";
    if( num>30 && num<41 ) return "C";
}
// const imgS = document.getElementById("Shead");
// const imgA = document.getElementById("ahead");
// const imgB = document.getElementById("bhead");
// const imgC = document.getElementById("chead");

// const headS = document.getElementById("shead");
// const headA = document.getElementById("Ahead");
// const headB = document.getElementById("Bhead");
// const headC = document.getElementById("Chead");
// let SGroupCounter =1;
// let AGroupCounter =1;
// let BGroupCounter =1;
// let CGroupCounter =1;
// //// double click event
// for (let i = 0; i < 40; i++) {
//     const img = Cards[`img${numbers[i]}`];
    
   
//     img.addEventListener('dblclick', (e) => {
//         if (Group(img)=="S" &&  getCardNum (img)==SGroupCounter ){
//             img.style.zIndex =SGroupCounter;
//             SGroupCounter++;
//             headS.appendChild(img);
//             img.style.position = "absolute";
//             img.style.left = 0;
//             img.style.top = (parseInt(img.style.top, 10)) + "px";
//             img.style.gridColumnStart = 3;
//             img.style.gridColumnEnd = 4;
            

//         }
//         if (Group(img)=="A" &&  getCardNum (img)==AGroupCounter ){
//             img.style.zIndex =AGroupCounter;
//             AGroupCounter++;
//             headA.appendChild(img);
//             // img.style.position = "absolute";
//             img.style.left = 0;
//             img.style.top = (parseInt(img.style.top, 10)) + "px";
//             img.style.gridColumnStart = 4;
//             img.style.gridColumnEnd = 5;
            
            
//         }
//         if (Group(img)=="B" &&  getCardNum (img)==BGroupCounter ){
//             img.style.zIndex =BGroupCounter;
//             BGroupCounter++;
//             headB.appendChild(img);
//             // img.style.position = "absolute";
//             img.style.left = 0;
//             img.style.top = (parseInt(img.style.top, 10)) + "px";
//             img.style.gridColumnStart = 5;
//             img.style.gridColumnEnd = 6;
           
//         }
//         if (Group(img)=="C" &&  getCardNum (img)==CGroupCounter ){
//             img.style.zIndex =CGroupCounter;
//             CGroupCounter++;
//             headC.appendChild(img);
//             // img.style.position = "absolute";
//             img.style.left = 0;
//             img.style.top = (parseInt(img.style.top, 10)) + "px";
//             img.style.gridColumnStart = 6;
//             img.style.gridColumnEnd = 7;
            
//         }
//     });
// }

const imgS = document.getElementById("SHead");
const imgA = document.getElementById("aHead");
const imgB = document.getElementById("bHead");
const imgC = document.getElementById("cHead");

const headS = document.getElementById("shead");
const headA = document.getElementById("Ahead");
const headB = document.getElementById("Bhead");
const headC = document.getElementById("Chead");

let SGroupCounter = 1;
let AGroupCounter = 1;
let BGroupCounter = 1;
let CGroupCounter = 1;

for (let i = 0; i < 40; i++) {
    const img = Cards[`img${numbers[i]}`];

    img.addEventListener('dblclick', (e) => {
        // במקרה של קבוצה S
        if (Group(img) === "S" && getCardNum(img) === SGroupCounter) {
            HideImageCover(img);
            SGroupCounter++;
            headS.appendChild(img);
            img.style.position = "absolute";
            img.style.left = `${imgS.offsetLeft}px`;
            img.style.top = `${imgS.offsetTop}px`;
            img.style.zIndex = SGroupCounter;
            
        }

        // במקרה של קבוצה A
        if (Group(img) === "A" && getCardNum(img) === AGroupCounter) {
            HideImageCover(img);
            AGroupCounter++;
            headA.appendChild(img);
            img.style.position = "absolute";
            img.style.left = `${imgA.offsetLeft}px`;
            img.style.top = `${imgA.offsetTop}px`;
            img.style.zIndex = AGroupCounter;
            
        }

        // במקרה של קבוצה B
        if (Group(img) === "B" && getCardNum(img) === BGroupCounter) {
            HideImageCover(img);
            BGroupCounter++;
            headB.appendChild(img);
            img.style.position = "absolute";
            img.style.left = `${imgB.offsetLeft}px`;
            img.style.top = `${imgB.offsetTop}px`;
            img.style.zIndex = BGroupCounter;
           
        }

        // במקרה של קבוצה C
        if (Group(img) === "C" && getCardNum(img) === CGroupCounter) {
            HideImageCover(img);
            CGroupCounter++;
            headC.appendChild(img);
            img.style.position = "absolute";
            img.style.left = `${imgC.offsetLeft}px`;
            img.style.top = `${imgC.offsetTop}px`;
            img.style.zIndex = CGroupCounter;
            
        }
    });
}
