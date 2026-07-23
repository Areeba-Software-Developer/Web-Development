const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students=[];

function addStudent(name,age,marks){
    students.push({
        name: name,
        age: age,
        marks: marks
    });
    console.log("\n Student Data Added Successfully!");
}

function removeStudent(name){
    let index= students.findIndex(student => 
        student.name.toLowerCase() === name.toLowerCase());

    if (index !== -1){
        console.log("\n Student removed Successfully!")
    }
    else{
        console.log("\n Student not Found!");
    }
}

function findStudent(name){
    let index= students.findIndex(student => 
        student.name.toLowerCase() === name.toLowerCase());

        if (!students) {
        console.log("\nStudent not found!");
        console.log(students);
    }
    else {
        console.log("\nStudent found");
        console.log("Name :",students.name);
        console.log("Age  :",students.age);
        console.log("Marks:",students.marks);
    }
}

function showStudents(){
    console.log("\n===Students List===");

    if(students.length ===0){
        console.log("\nNo Students Data Available!");
    }
    else{
        students.forEach((student,index) =>{
            console.log(`${index + 1}.`);
            console.log("Name   :", student.name);
            console.log("Age    :", student.age);
            console.log("Marks  :", student.marks);
            console.log("-------------------");
        });
    }
}

rl.question("Enter Student Name:", name => {
    
    rl.question("Enter Student Age:", age => {
        
        rl.question("Enter Student Marks:", marks =>{
            
            addStudent(name,age,marks);

            rl.question("Enter Student to remove:", name => {

                removeStudent(name);

                rl.question("Enter Student to find:", name => {
                    
                    findStudent(name);

                    showStudents();
                });
            });
        });
    });
});



