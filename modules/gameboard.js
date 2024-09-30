function Gameboard() {
	const boardSize = 3;
	function createBoard(size) {
		let board = Array.from({ length: size }, () => Array(size).fill(null));
		return board;
	}
	const gameboard = createBoard(boardSize);
	const hitBoard = gameboard;
	function getGameboard() {
		return gameboard;
	}
	function getHitBoard() {
		return hitBoard;
	}
	function placeShip(ship, x, y, horizontal = true) {
		//gameboard[x][y] = ship;
		if (horizontal) {
			if (x + ship.getLength() <= gameboard.length) {
				//place ship
				for (i = x; i < x + ship.getLength(); i++) {
					gameboard[x][i] = ship;
				}
			} else {
				return "invalid placement";
			}
		}
	}
	function receiveAttack(x, y) {
		// -1 if miss and 1 if hit
		if (gameboard[x][y] == null) {
			hitBoard[x][y] = -1;
			return "miss";
		} else {
			if (hitBoard[x][y] === null) {
				gameboard[x][y].hit();
				hitBoard[x][y] = 1;
				return gameboard[x][y].hitPoints();
			} else {
				return "already hit";
			}
		}
	}
	return {
		gameboard,
		placeShip,
		receiveAttack,
		getGameboard,
	};
}

module.exports = { Gameboard };
