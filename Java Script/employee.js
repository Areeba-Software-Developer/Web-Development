class employee{
    
    constructor(name,id,department,salary,experience){
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.experience = experience;
    }
increaseSalary(amount){
    this.salary += amount;
}

calculateBonus(bonus){
    let ntotalSalary = this.salary + bonus;
    console.log("Total Salary:", totalSalary);
}

changeDepartment(){
    console.log("Your transfer in IT Department")
}

displayEmployee(){
    console.log("Employee Name: ",this.name);
    console.log("ID: ",this.id);
    console.log("Department: ",this.department);
    console.log("Experience Company: ",this.experience);
    console.log("Salary: ",this.salary);
    }
}

let e1 = new employee(
    "Areeba",
    18,
    "Computer Science",
    10000,
    "Ebryx"
);

e1.displayEmployee();
e1.increaseSalary(5000);   
e1.calculateBonus(3000);   
e1.changeDepartment();