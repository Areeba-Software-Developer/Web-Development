const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registerPatient(name, age) {
    if (!name || name.trim() === "") {
        throw new Error("Name Required!");
    }

    if (age <= 0) {
        throw new Error("Invalid Age!");
    }

    console.log("Patient Registered Successfully!");
}

function bookAppointment(doctorAvailable) {
    if (!doctorAvailable) {
        throw new Error("Doctor Unavailable!");
    }

    console.log("Appointment Booked Successfully!");
}

function prescribedMedicine(stock) {
    if (stock <= 0) {
        throw new Error("Medicine stock is 0");
    }

    console.log("Medicine is Available!");
}

function generateBill(amount) {
    if (amount < 0) {
        throw new Error("Invalid Amount!");
    }

    console.log("Bill Amount =", amount);
}

rl.question("Enter your Name: ", (name) => {
    rl.question("Enter your Age: ", (age) => {

        age = Number(age);

        let doctorAvailable = true;
        let stock = 10;
        let amount = 1500;

        try {
            console.log("\n==== Display Information ====");

            registerPatient(name, age);
            bookAppointment(doctorAvailable);
            prescribedMedicine(stock);
            generateBill(amount);

        } catch (error) {
            console.log(error.message);
        }

        rl.close();
    });
});

