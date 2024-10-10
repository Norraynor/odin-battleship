function buildGameboard(player) {
	const board = player.getBoard();
	const displayBoard = document.createElement("div");
	displayBoard.classList.add("gameboard");
	board.gameboard.forEach((subArr, indexX) => {
		subArr.forEach((element, indexY) => {
			const cell = document.createElement("div");
			cell.textContent = element;
			cell.classList.add("cell");
			cell.setAttribute("x", indexX);
			cell.setAttribute("y", indexY);
			displayBoard.appendChild(cell);
		});
	});
	return displayBoard;
}

module.exports = { buildGameboard };
