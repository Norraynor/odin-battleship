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
				e.preventDefault();
				if (board.getHitBoard()[indexX][indexY]) {
					return;
				}
				board.receiveAttack(indexX, indexY);

				//generate rebuild event
				const rebuild = new CustomEvent("rebuild", {
					bubbles: true,
					detail: { turn: true },
				});
				window.dispatchEvent(rebuild);

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
