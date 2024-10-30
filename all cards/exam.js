// יצירת כרטיסים ושמירתם באובייקט Cards
const Cards = {}; // אובייקט לאחסון האלמנטים לפי מזהה

for (let i = 1; i <= 40; i++) {
    const img = document.createElement('img');
    img.id = `img${i}`; // מזהה ייחודי לכל כרטיס
    img.src = `img${i}.png`; // הגדרת מקור התמונה
    img.num = i; // מספר הכרטיס
    img.draggable = true; // מאפשר גרירה

    // האזנה לאירוע גרירה עבור כל כרטיס
    img.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', img.id); // שמירת המזהה בעת התחלת הגרירה
    });

    Cards[`img${i}`] = img; // שמירת הכרטיס באובייקט Cards
}

// יצירת מערך עם מספרים אקראיים בין 1 ל-40 ושימוש בהם
const numbers = Array.from({ length: 40 }, (_, i) => i + 1);
for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // ערבוב המערך
}

// קביעת העמודות ומספר הכרטיסים בכל עמודה
const columns = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six')
];
const columnLimits = [8, 7, 6, 5, 4, 3]; // מספר הכרטיסים בכל עמודה

// הצבת הכרטיסים בעמודות לפי מספר כרטיסים מוגדר לכל עמודה
let index = 0;
for (let col = 0; col < columns.length; col++) {
    const limit = columnLimits[col];
    for (let i = 0; i < limit; i++) {
        const imgCard = Cards[`img${numbers[index]}`];
        imgCard.style.width = "200px";
        imgCard.style.height = "250px";
        imgCard.style.position = "absolute";
        imgCard.style.zIndex = i + 1;
        imgCard.style.left = '0px';
        imgCard.style.top = (i * 40) + "px";
        columns[col].appendChild(imgCard);
        index++;
    }
}

// פונקציה לבדיקת חוקיות של שחרור כרטיס
function DropChecker(imgCheck, imgDrag) {
    return (imgCheck.num > 20 && imgDrag.num < 21) || (imgCheck.num < 21 && imgDrag.num > 20);
}

// פונקציה להסתיר את הכיסוי לפי ה-ZIndex והעמודה
function HideImageCover(img) {
    const indexZ = parseInt(img.style.zIndex) || 0;
    const position = positionImg(img);

    const coverIndex = {
        1: indexZ - 1,
        2: indexZ + 7,
        3: indexZ + 14,
        4: indexZ + 20,
        5: indexZ + 25,
        6: indexZ + 29
    };

    const imgCover = document.getElementById(`imgCover${coverIndex[position]}`);
    if (imgCover) imgCover.style.display = "none";
}

// פונקציה לחישוב מיקום העמודה של הכרטיס
function positionImg(draggedImg) {
    const imgNum = draggedImg.num;
    for (let i = 0; i < 40; i++) {
        if (i < 9 && numbers[i] === imgNum) return 1;
        if (i >= 9 && i < 15 && numbers[i] === imgNum) return 2;
        if (i >= 15 && i < 21 && numbers[i] === imgNum) return 3;
        if (i >= 21 && i < 26 && numbers[i] === imgNum) return 4;
        if (i >= 26 && i < 30 && numbers[i] === imgNum) return 5;
        if (i >= 30 && i < 33 && numbers[i] === imgNum) return 6;
    }
    console.warn("No matching position found for imgNum:", imgNum);
    return -1;
}

// הוספת אירועי גרירה ושחרור על העמודות
columns.forEach((column) => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault(); // מאפשר שחרור על העמודה
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedImgId = e.dataTransfer.getData('text/plain');
        const draggedImg = document.getElementById(draggedImgId);

        const lastChild = column.lastElementChild;
        if (lastChild && DropChecker(lastChild, draggedImg)) {
            // הנחת הכרטיס במקום הנכון
            draggedImg.style.top = (parseInt(lastChild.style.top, 10) + 40) + "px";
            draggedImg.style.zIndex = parseInt(lastChild.style.zIndex, 10) + 1;
            HideImageCover(draggedImg);
            column.appendChild(draggedImg);
        }
    });
});

// פונקציה לחישוב מספר הכרטיס במערכת של 1-10
function getCardNum(img) {
    if (img.num < 11) return img.num;
    if (img.num > 10 && img.num < 21) return img.num - 10;
    if (img.num > 20 && img.num < 31) return img.num - 20;
    if (img.num > 30 && img.num < 41) return img.num - 30;
}
