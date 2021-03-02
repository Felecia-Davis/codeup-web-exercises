console.log("Math Object Lecture");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Math.round(20.49);  // 20
Math.round(20.5);   // 21
Math.round(-20.5);  // -20
Math.round(-20.51); // -21

Math.ceil(20.008);
math.floor(20.999999);
Math.pow(2,16);