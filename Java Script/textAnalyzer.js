const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Name: ", function (text) {
    rl.question("Age: ", function (age) {
        rl.question("Gender: ", function (gender) {
            rl.question("Occupation: ", function (occupation) {

                console.log("------ Text Analysis ------");
                console.log("Original name: " + text);
                console.log("Length of name: " + text.length);
                console.log("Uppercase: " + text.toUpperCase());
                console.log("Lowercase: " + text.toLowerCase());
                console.log("First Character: " + text.charAt(0));
                console.log("Last Character: " + text.charAt(text.length - 1));
                console.log("Index of 'a': " + text.indexOf('a'));
                console.log("Last Index of 'a': " + text.lastIndexOf('a'));

                let vowels = 0;
                let consonants = 0;

                for (let ch of text) {
                    if (
                        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
                    ) {
                        vowels++;
                    } else if (
                        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
                    ) {
                        vowels++;
                    } else if (
                        (ch >= 'a' && ch <= 'z') ||
                        (ch >= 'A' && ch <= 'Z')
                    ) {
                        consonants++;
                    }
                }
                console.log("Vowels: " + vowels);
                console.log("Consonants: " + consonants);

                for (let ch of text) {
                    console.log("Character: " + ch);
                }

                let reversedText = "";
                for (let i = text.length - 1; i >= 0; i--) {
                    reversedText += text[i];
                }
                console.log("Reversed Text: " + reversedText);
                rl.close();
            });
        });
    });
});
