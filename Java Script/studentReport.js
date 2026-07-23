const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addStudent(name, age, gender, marks) {
    const grade = calculateGrade(marks);
}

function calculateTotal(marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

function calculateAverage(marks) {
    const total = calculateTotal(marks);
    return total / marks.length;
}

function calculateGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function generateReport(name, age, gender, marks) {
    const total = calculateTotal(marks);
    const average = calculateAverage(marks);
    const grade = calculateGrade(average);

    console.log("------ Student Report ------");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Marks: " + marks.join(", "));
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average.toFixed(2));
    console.log("Grade: " + grade);
}

rl.question("Name: ", function (name) {
    rl.question("Age: ", function (age) {
        rl.question("Gender: ", function (gender) {
            rl.question("Enter marks separated by commas: ", function (marksInput) {
                const marks = marksInput.split(",").map(mark => parseFloat(mark.trim()));
                generateReport(name, age, gender, marks);
                rl.close();
            });
        });
    });
});

