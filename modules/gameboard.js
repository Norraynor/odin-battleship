function Gameboard() {
	const boardSize = 3;
	function createBoard(size) {
		let board = Array.from({ length: size }, () => Array(size).fill(null));
		return board;
	}
	const gameboard = createBoard(boardSize);
	function placeShip(ship, x, y, horizontal = true) {
		//gameboard[x][y] = ship;
		if (horizontal) {
			if (x + ship.getLength() <= gameboard.length) {
				//place ship
				for (i = x; i < x + ship.getLength(); i++) {
					gameboard[i][y] = ship;
				}
			} else {
				return "invalid placement";
			}
		}
	}
	function receiveAttack(x, y) {
		if (gameboard[x][y] == null) {
			return "miss";
		} else {
			gameboard[x][y].hit();
			return gameboard[x][y].hitPoints();
		}
	}
	return {
		gameboard,
		placeShip,
		receiveAttack,
	};
}

module.exports = { Gameboard };
