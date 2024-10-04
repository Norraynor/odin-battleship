const gameboard = require("./gameboard");

function Player(name, computer = false) {
	let board = gameboard.Gameboard(10);
	function getBoard() {
		return board;
	}
	return {
		name,
		getBoard,
	};
}

module.exports = { Player };
