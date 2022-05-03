//zakladám premennú pre hráča, ktorý je na rade

let player = "circle"

//nastavujem funkciu, ktorá zmení obsah tlačítok a hráča, ktorý je na rade

const fillButton = (event) => {
    event.target.classList.add(`game__fields--${player}`)
    event.target.disabled = true
    if (player === "circle") {
        player = "cross"
    } else {
        player = "circle"
    }

    document.querySelector("#player").src = `assets/${player}.svg`}



//nastavujem funkciu, ktorá spustí pri kliknutí na tlačítko funkciu nastavenú vyššie

const clickedButton = document.querySelectorAll(".game__fields--empty")
for (let i = 0; i < clickedButton.length; i += 1) {
    clickedButton[i].addEventListener("click", fillButton)
}

const getSymbol = (field) => {
    if (field.classList.contains("game__fields--cross")) {
        return "cross"
    } else if (field.classList.contains("game__fields--circle")) {
        return "circle"
    }
}

