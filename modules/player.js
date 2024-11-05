const gameboard = require("./gameboard");

function Player(name, computer = false) {
	let board = gameboard.Gameboard(10);
	let movesPlayed = [];
	function getBoard() {
		return board;
	}
	function getMoves() {
		return movesPlayed;
	}
	return {
		name,
		getBoard,
		getMoves,
	};
}

module.exports = { Player };
