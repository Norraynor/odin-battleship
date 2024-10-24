function buildGameboard(player) {
	const board = player.getBoard();
	const displayBoard = document.createElement("div");
	displayBoard.classList.add("gameboard");
	board.gameboard.forEach((subArr, indexX) => {
		subArr.forEach((element, indexY) => {
			const cell = document.createElement("div");

			//debugging
			cell.textContent = element?.getLength();

			cell.classList.add("cell");
			cell.setAttribute("x", indexX);
			cell.setAttribute("y", indexY);
			if (
				typeof board.getGameboard()[indexX][indexY] === "object" &&
				board.getGameboard()[indexX][indexY] != null
			) {
				cell.classList.add("ship");
			}
			displayBoard.appendChild(cell);
		});
	});
	return displayBoard;
}
function buildHitBoard(player) {
	const board = player.getBoard();
	const displayBoard = document.createElement("div");
	displayBoard.classList.add("hitboard");

	board.getHitBoard().forEach((subArr, indexX) => {
		subArr.forEach((element, indexY) => {
			const cell = document.createElement("div");

			//debugging
			// cell.textContent = element?.getLength();

			cell.classList.add("cell");
			cell.setAttribute("x", indexX);
			cell.setAttribute("y", indexY);
			if (board.getGameboard()[indexX][indexY] !== null) {
				if (board.getHitBoard()[indexX][indexY] == -1) {
					cell.classList.add("missed");
				} else if (board.getHitBoard()[indexX][indexY] == 1) {
					cell.classList.add("hit");
				}
			}
			cell.addEventListener("click", (e) => {
				e.preventDefault();
				board.receiveAttack(indexX, indexY);
				console.log(board.getGameboard()[indexX][indexY]);
				console.log(board.getHitBoard()[indexX][indexY]);

				//generate rebuild event
				const rebuild = new CustomEvent("rebuild", {
					bubbles: true,
				});
				displayBoard.dispatchEvent(rebuild);

				console.log(`clicked ${[indexX, indexY]}`);

				if (board.isGameOver()) {
					alert("Game Over!");
				}
			});
			displayBoard.appendChild(cell);
		});
	});
	return displayBoard;
}

module.exports = { buildGameboard, buildHitBoard };
