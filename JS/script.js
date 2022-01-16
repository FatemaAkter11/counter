const countNumber = document.getElementById("count");
let Number = parseInt(countNumber.innerText);

const buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", () => {
    let newNumber = Number + 1;
    countNumber.innerText = newNumber;
    Number = newNumber;
    // console.log(Number);
    if (newNumber > 100) {
        countNumber.innerText = 0;
        numNumber = 0;
    }
});