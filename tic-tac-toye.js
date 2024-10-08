let boxes = document.querySelectorAll(".btn");  // Use class selector to select all buttons
let msg = document.querySelector(".msg");
let startbtn = document.querySelector(".start-again");
let turno = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Event listener for each button click
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        box.style.border = "3px solid red";
        if (turno) {
            box.textContent = "O";  // Player 1's turn (O)
            box.style.backgroundColor = "blue";
        } else {
            box.textContent = "X";  // Player 2's turn (X)
            box.style.backgroundColor = "yellow";
        }
        turno = !turno;
        box.disabled = true;
        checkwinner();  // Check for a winner after each move
    });
});

// Function to check for a winner
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // Change background color to green for the winning boxes
                console.log(`Congratulations! The winner is ${pos1val}`);
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";
                
                msg.innerHTML = `"${pos1val}" Wins The Game!`;
                msg.style.backgroundColor = "green";

                // Disable all buttons after a winner is found
                boxes.forEach((box) => box.disabled = true);
                break;
            }
        }
    }
};

// Reset the game when "Start Again" button is clicked
startbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.textContent = "";
        box.style.backgroundColor = "";
        box.style.border = "";
    });
    msg.innerHTML = "";
    msg.style.backgroundColor = "";
    turno = true;  // Reset to Player 1's turn
});
