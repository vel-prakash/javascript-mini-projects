function calculateTotal(mark1, mark2, mark3) {
    return mark1 + mark2 + mark3;
}

function calculateAverage(total) {
    return total / 3;
}

function calculateResult() {
    let name = prompt("Enter student name:");

    let mark1 = Number(prompt("Enter Subject 1 marks:"));
    let mark2 = Number(prompt("Enter Subject 2 marks:"));
    let mark3 = Number(prompt("Enter Subject 3 marks:"));

    if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3) || mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 || mark3 < 0 || mark3 > 100) {
        alert("Marks must be between 0 and 100")
    }
    else {
        let total = calculateTotal(mark1, mark2, mark3);
        let average = calculateAverage(total);
        let grade;

        if (average >= 90) {
            grade = "A";
        }
        else if (average >= 75) {
            grade = "B"
        }
        else if (average >= 50) {
            grade = "C"
        }
        else {
            grade = "F"
        }

        alert("Name: " + name + ", Total: " + total + ", Average: " + average + ", Grade: " + grade)
    }

    if (confirm("Calculate another result?")) {
        calculateResult();
    }
}

calculateResult();