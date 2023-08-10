// event listeners for my info and callin the fucntion within it
document.addEventListener("DOMContentLoaded", function() {
    const studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = "200510624"; 
    //calling the options displayed by their unique id
    const orderButton = document.getElementById("orderButton");
    const pizzaSize = document.getElementById("size");
    const pizzaSauce = document.getElementById("sauce");
    const pizzaBase = document.getElementById("base");
    const pizzaToppings = document.querySelectorAll('input[name="topping"]');
    const pizzaSides = document.querySelectorAll('input[name="side"]');
    const pizzaDescription = document.getElementById("pizzaDescription");
    const pizzaSizeOutput = document.getElementById("pizzaSize");
    const pizzaSauceOutput = document.getElementById("pizzaSauce");
    const pizzaBaseOutput = document.getElementById("pizzaBase");
    const pizzaToppingsOutput = document.getElementById("pizzaToppings");
    const pizzaSidesOutput = document.getElementById("pizzaSides");
    
    orderButton.addEventListener("click", function() {
        pizzaSizeOutput.textContent = pizzaSize.value;
        pizzaSauceOutput.textContent = pizzaSauce.value;
        pizzaBaseOutput.textContent = pizzaBase.value;
        //function to determine whether 1 or more options are choosen
        let selectedToppings = [];
        pizzaToppings.forEach(topping => {
            if (topping.checked) {
                selectedToppings.push(topping.value);
            }
        });
        pizzaToppingsOutput.textContent = selectedToppings.length > 0 ? selectedToppings.join(", ") : "None";
        //function to determine whether 1 or more options are choosen
        let selectedSides = [];
        pizzaSides.forEach(side => {
            if (side.checked) {
                selectedSides.push(side.value);
            }
        });
        pizzaSidesOutput.textContent = selectedSides.length > 0 ? selectedSides.join(", ") : "None";

        pizzaDescription.classList.remove("hidden");
    });
});
