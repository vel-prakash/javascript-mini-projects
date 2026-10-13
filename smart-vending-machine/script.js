function calculateChange(money, price) {
    return money - price;
}

function vendingMachine() {
    
    console.log("----- VENDING MACHINE -----")
    console.log("1. Chips - Rs. 20");
    console.log("2. Chocolate - Rs. 30");
    console.log("3. Juice - Rs. 40");
    console.log("4. Biscuits - Rs. 15");
    console.log("5. Water - Rs. 10");

    let choice = Number(prompt("Enter item number (1-5):"));

    let item = "";
    let price = 0;

    if (choice == 1) {
        item = "Chips"
        price = 20;
    }
    else if (choice == 2) {
        item = "Chocolate";
        price = 30;
    }
    else if (choice == 3) {
        item = "Juice";
        price = 40;
    }
    else if (choice == 4) {
        item = "Biscuits";
        price = 15;
    }
    else if (choice == 5) {
        item = "Water";
        price = 10;
    }
    else {
        alert("Invalid item number!");
    }

    if (price > 0) {

        let input = prompt("Enter the amount of money you have:");
        let money = Number(input);

        if (input === null || input === "" || money < 0 || isNaN(money)) {
            alert("Invalid amount!");
        }
        else if (money < price) {
            alert("Insufficient funds!")
        }
        else {
            let change = calculateChange(money, price);

            if (money == price) {
                alert("You selected " + item + ". Exact amount paid. Change: Rs. 0");
            }
            else {
                alert("You selected " + item + ". Change returned: Rs. " + change);
            }

            for (let i = 3; i >= 1; i--) {
                console.log(i);
            }    
                alert(item + " is ready!");
                
            for (let i = 1; i <= choice; i++) {
                    let pattern = "";
                    
                for (let j = 1; j <= i; j++) {
                        pattern = pattern + j + " ";
                }
                    
                console.log(pattern)
            }   
        }         
    }    

    if (confirm("Do you want to make another purchase?")) {
        vendingMachine();
    }
    else {
        alert("Thank you for using the vending machine!");
    }
}
vendingMachine();