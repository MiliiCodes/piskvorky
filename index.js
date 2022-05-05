//zakladám premennú pre hráča, ktorý je na rade

let player = "circle"

//nastavujem funkciu, ktorá zmení obsah tlačítok a hráča, ktorý je na rade

const fillButton = (event) => {
    event.target.classList.add(`game__field--${player}`)
    event.target.disabled = true
    if (player === "circle") {
        player = "cross"
    } else {
        player = "circle"

    document.querySelector("#player").src = `assets/${player}.svg`}

    if (isWinningMove(event.target)) {
        if (player === 'cross') {
          confirm('Hráč, který měl kolečka, vyhrává!');
        } else {
          confirm('Hráč, který měl křížek vyhrává!');
        }
      }
    };

//nastavujem funkciu, ktorá spustí pri kliknutí na tlačítko funkciu nastavenú vyššie

const clickedButton = document.querySelectorAll(".game__field")
for (let i = 0; i < clickedButton.length; i += 1) {
    clickedButton[i].addEventListener("click", fillButton)
}

const getSymbol = (field) => {
	// Název třídy přizpůsob tvému kódu.
	if (field.classList.contains('game__field--cross')) {
		return "cross"
	} else if (field.classList.contains('game__field--circle')) {
		return "circle"
	}

}

const boardSize = 10 // 10x10

const getField = (row, column) => {
   return clickedButton[row * boardSize + column]
}

console.log(getField(1, 3));

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < clickedButton.length && field !== clickedButton[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

console.log(getPosition(1, 3));


const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}

for (let i = 0; i < clickedButton.length; i++) {
    clickedButton[i].addEventListener('click', fillButton);
  }