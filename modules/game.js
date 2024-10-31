import { Player } from "./player";
import { Ship } from "./ship";
// Create ships
const BATTLESHIP = 5;
const CRUISER = 4;
const DESTROYER = 3;
const SUBMARINE = 2;
export default function Game() {
	// Create players
	const player1 = Player("Player 1");
	const player2 = Player("Player 2", true);
	let playersTurn = true;
	function getTurn() {
		return playersTurn;
	}
	function setTurn(val) {
		playersTurn = val;
	}

	window.setInterval(() => {
		console.log("timeout");
		const rebuild = new CustomEvent("rebuild", {
			bubbles: true,
			detail: { turn: false },
		});
		window.dispatchEvent(rebuild);
	}, 2000);

	window.addEventListener("rebuild", (e) => {
		console.log(`Player ${playersTurn ? "1" : "2"}'s turn.`);
		if (e.detail.turn) {
			playersTurn = !playersTurn;
			console.log("hello");
		}
		if (!playersTurn) {
			//computer turn
			let board = player1.getBoard();
			let coords = generateEmptyCoords(board);
			board.receiveAttack(coords.x, coords.y);
			console.log(`computer attacking ${coords.x} , ${coords.y}`);
			const rebuild = new CustomEvent("rebuild", {
				bubbles: true,
				detail: { turn: true },
			});
			window.dispatchEvent(rebuild);

			//figure out proper coords generation
			// figure out marking again on new turn system
		}
	});

	function getPlayers() {
		return [player1, player2];
	}

	function populatePlayerBoard() {
		// Place ships on player boards
		player1.getBoard().placeShip(Ship(BATTLESHIP), 0, 0);
		player1.getBoard().placeShip(Ship(CRUISER), 1, 0);
		player1.getBoard().placeShip(Ship(DESTROYER), 2, 0);
		player1.getBoard().placeShip(Ship(SUBMARINE), 3, 0);

		// Place ships on computer board
		player2.getBoard().placeShip(Ship(BATTLESHIP), 5, 5);
		player2.getBoard().placeShip(Ship(CRUISER), 6, 5);
		player2.getBoard().placeShip(Ship(DESTROYER), 7, 5);
		player2.getBoard().placeShip(Ship(SUBMARINE), 8, 5);
	}
	function generateEmptyCoords(board) {
		let x = Math.floor(Math.random() * board.getLength());
		let y = Math.floor(Math.random() * board.getLength());
		if (board.getHitBoard()[x][y] != null) {
			generateEmptyCoords(board);
		}
		return {
			x,
			y,
		};
	}

	return {
		getPlayers,
		populatePlayerBoard,
		getTurn,
		setTurn,
	};
}

// // Create ships
// const BATTLESHIP = 5;
// const CRUISER = 4;
// const DESTROYER = 3;
// const SUBMARINE = 2;

// // Place ships on player boards
// player1.getBoard().placeShip(Ship(BATTLESHIP), 0, 0);
// player1.getBoard().placeShip(Ship(CRUISER), 1, 0);
// player1.getBoard().placeShip(Ship(DESTROYER), 2, 0);
// player1.getBoard().placeShip(Ship(SUBMARINE), 3, 0);

// // Place ships on computer board
// player2.getBoard().placeShip(Ship(BATTLESHIP), 5, 5, false);
// player2.getBoard().placeShip(Ship(CRUISER), 6, 5, false);
// player2.getBoard().placeShip(Ship(DESTROYER), 7, 5, false);
// player2.getBoard().placeShip(Ship(SUBMARINE), 8, 5, false);

// // Simulate player attacks
// player2.getBoard().receiveAttack(4, 4);
// console.log(player2.getBoard().getGameboard());

// console.log(player2.getBoard().isGameOver()); // true if all ships are sunk, false otherwise
// console.log(player1.getBoard().getGameboard()); // show player's board for debugging purposes
// console.log(player2.getBoard().getHitBoard()); // show player's hit board for debugging purposes
