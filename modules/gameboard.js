function Gameboard() {
	const boardSize = 10;
	function createBoard(size) {
		let board = Array.from({ length: size }, () => Array(size).fill(null));
		return board;
	}
	const gameboard = createBoard(3);
	function placeShip(ship, x, y, horizontal = true) {
		gameboard[x][y] = ship;
		if (horizontal) {
			if (x + ship.getLength() <= gameboard.length) {
				//place ship
			} else {
				return "invalid placement";
			}
		}
	}
	//test board
	//let board = createBoard(3);
	return {
		gameboard,
		placeShip,
	};
}

module.exports = { Gameboard };
