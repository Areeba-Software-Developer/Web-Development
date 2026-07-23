const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

rl.question("Enter your marks: ", (input) => {
    const marks = parseInt(input);
    const grade = calculateGrade(marks);
    console.log("Your Grade is: " + grade);
    rl.close();
});

