// Canvas

let length = 317; // Must be odd
let nbs = length * length;

function Canvas(length) {
    var col = "";
    var row = "";

    for (i = 0; i < length; i++) {
        col += `${100/length}vw `;
        row += `${100/length}vh `;
    }

    document.body.style.gridTemplateColumns = col;
    document.body.style.gridTemplateRows = row;
}

for (i = 1; i <= nbs; i++) {
    div = document.createElement('div');
    div.id = i;
    div.innerHTML = i;
    document.body.appendChild(div)
}

Canvas(length)

// Fill
let mode = 5;
let turnsNb = 2;
let turnsCount = 0;
let currentCellNb = Math.ceil((nbs / 2));

for (i = 0; i < nbs; i++) {
    switch (mode) {
        case 5:
            document.getElementById(currentCellNb).innerHTML = 1;
            document.getElementById(currentCellNb).style.color = "gold";
            document.getElementById(currentCellNb).style.backgroundColor = "gold";
            mode = 0;
            break
        case 0: // Straight mode
            turnsCount++;
            if (turnsCount < turnsNb) {
                currentCellNb++; // Go Straight
                document.getElementById(currentCellNb).innerHTML = i + 1;
            } else {
                mode = 1;
                turnsCount = 0;
                i--;
            }
            break
        case 1: // Up
            turnsCount++;
            if (turnsCount <= turnsNb - 1) {
                currentCellNb = currentCellNb - length; // Go Up
                document.getElementById(currentCellNb).innerHTML = i + 1;
            } else {
                mode = 2;
                turnsCount = 0;
                turnsNb++;
                i--;
            }
            break
        case 2: // Back
            turnsCount++;
            if (turnsCount < turnsNb) {
                currentCellNb--; // Go Back
                document.getElementById(currentCellNb).innerHTML = i + 1;
            } else {
                mode = 3;
                turnsCount = 0;
                i--;
            }
            break
        case 3: // Down
            turnsCount++;
            if (turnsCount <= turnsNb - 1) {
                currentCellNb = currentCellNb + length; // Go Down
                document.getElementById(currentCellNb).innerHTML = i + 1;
            } else {
                mode = 0;
                turnsCount = 0;
                turnsNb++;
                i--;
            }
            break
        default:
            console.log('Error');
            break;
    };
};

// Color Primes
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

for (i = 1; i <= nbs; i++) {
    let innerNb = document.getElementById(i).innerHTML
    if (isPrime(innerNb)) {
        document.getElementById(i).style.backgroundColor = "black";
        document.getElementById(i).innerHTML = "";
    } else {
        document.getElementById(i).style.color = "white";
    }
};