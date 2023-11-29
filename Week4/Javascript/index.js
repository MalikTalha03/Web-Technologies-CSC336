let mark_height = 1.69;
let mark_weight = 78;
let john_height = 1.95;
let john_weight = 92;
let mark_bmi = mark_weight / mark_height ** 2;
let john_bmi = john_weight / john_height ** 2;
let markHigherBMI = mark_bmi > john_bmi;
let msg = `Mark's BMI ${mark_bmi.toFixed(1)} is higher than John's ${john_bmi.toFixed(1)}!`;
console.log(msg);
