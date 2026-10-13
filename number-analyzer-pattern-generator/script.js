
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function numberAnalyzer() {
    let num = Number(prompt("Enter a positive number:"));

    if (isNaN(num) || num <= 0 || num % 1 != 0) {
        alert("Please enter a positive whole number!");
    }
    else {
        let result;

        if (num % 2 == 0) {
            result = "Even";
        }
        else {
            result = "Odd";
        }

        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum = sum + i;
        }

        alert("Number is " + result + ". Sum is " + sum);

        multiplicationTable(num);

        if (num % 2 == 0) {
            let square = "";

            for (let i = 1; i <= num; i++) {
                let pattern = "";

                for (let j = 1; j <= num; j++) {
                    pattern = pattern + "* ";
                }

                square = square + pattern + "\n";
            }

            console.log(square);
        }
        else {
            for (let i = 1; i <= num; i++) {
                let pattern = "";

                for (let j = 1; j <= i; j++) {
                    pattern = pattern + "* ";
                }

                console.log(pattern);
            }
        }
    }

    if (confirm("Do you want to run the program again?")) {
        numberAnalyzer();
    }
    else {
        alert("Thank you!");
    }
}

numberAnalyzer();
