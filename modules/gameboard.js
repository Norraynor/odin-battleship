function Gameboard() {
	const boardSize = 10;
	function createBoard(size) {
		let board = Array.from({ length: size }, () => Array(size).fill(null));
		return board;
	}
	//test board
	let board = createBoard(3);
	return {
		board,
	};
}

module.exports = { Gameboard };
