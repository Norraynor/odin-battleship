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
			if (board.getHitBoard()[indexX][indexY] == -1) {
				cell.classList.add("missed");
			} else if (board.getHitBoard()[indexX][indexY] == 1) {
				cell.classList.add("hit");
			}
			if (board.getGameboard()[indexX][indexY]?.isSunk()) {
				cell.classList.add("sunk");
			}
			displayBoard.appendChild(cell);
		});
	});
	if (board.isGameOver()) {
		console.error("Game Over!");
	}
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
			if (board.getHitBoard()[indexX][indexY] == -1) {
				cell.classList.add("missed");
			} else if (board.getHitBoard()[indexX][indexY] == 1) {
				cell.classList.add("hit");
			}
			if (board.getGameboard()[indexX][indexY]?.isSunk()) {
				cell.classList.add("sunk");
			}

			cell.addEventListener("click", (e) => {
				if (board.getHitBoard()[indexX][indexY]) {
					console.log("not empty?", board.getHitBoard()[indexX][indexY]);
					return;
				}
				board.receiveAttack(indexX, indexY);

				console.log(`clicked ${[indexX, indexY]}`);

				//generate rebuild event
				const rebuild = new CustomEvent("rebuild", {
					bubbles: true,
					detail: { turn: true },
				});
				window.dispatchEvent(rebuild);

				if (board.isGameOver()) {
					console.warning("Game Over!");
				}
			});
			displayBoard.appendChild(cell);
		});
	});
	return displayBoard;
}

module.exports = { buildGameboard, buildHitBoard };
