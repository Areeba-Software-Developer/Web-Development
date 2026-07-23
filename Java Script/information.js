let name = prompt("Enter your name:");
let university = prompt("Enter your university:");
let degree = prompt("Enter your degree:");
let age = parseInt(prompt("Enter your age:"));
let marks = parseInt(prompt("Enter your marks:"));

let fee = prompt("\nEnter fee status (true/false):") === "true";


console.log("------ Student Personal Bio ------");
console.log("Name: " + name);
console.log("University: " + university);
console.log("Degree: " + degree);
console.log("Age: " + age);
console.log("Marks: " + marks);
console.log("Fee Status: " + fee);

console.log("\n------ Data Types ------");

console.log("Name: " + typeof name);
console.log("University: " + typeof university);
console.log("Degree: " + typeof degree);
console.log("Age: " + typeof age);
console.log("Marks: " + typeof marks);
console.log("Fee: " + typeof fee);

marks += 10;
console.log("\nBonus Marks Added");
console.log("Updated Marks: " + marks);

age++;
console.log("Updated Age: " + age);

if (marks >= 50) {
    console.log("Result: Pass");
}
else {
    console.log("Result: Fail");
}

if (marks >= 50 && fee) {
    console.log("Eligible for Exam");
}
else {
    console.log("Not Eligible for Exam");
}

let eligibility = (marks >= 50 && fee)? "Eligible": "Not Eligible";
console.log("Eligibility: " + eligibility);

console.log("\n------ Comparison Operators ------");

console.log('5 == "5"  : ' + (5 == "5"));
console.log('5 === "5" : ' + (5 === "5"));
console.log('5 != "5"  : ' + (5 != "5"));
console.log('5 !== "5" : ' + (5 !== "5"));

console.log("\n------ Final Student Information ------");

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Marks: " + marks);
console.log("Fee Paid: " + fee);
console.log("Eligibility: " + eligibility);