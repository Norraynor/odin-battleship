function buildGameboard(player) {
	const board = player.getBoard();
	const displayBoard = document.createElement("div");
	board.forEach((subArr, indexX) => {
		subArr.forEach((element, indexY) => {
			let cell = document.createElement("div");
			cell.textContent = element;
			cell.classList.add("cell");
			cell.setAttribute("x", indexX);
			cell.setAttribute("y", indexY);
			displayBoard.appendChild(cell);
		});
	});
}

module.exports = { buildGameboard };
