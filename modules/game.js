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
	let timer;
	function getTurn() {
		return playersTurn;
	}
	function setTurn(val) {
		playersTurn = val;
	}
	function resetTimer() {
		window.clearInterval(timer);
		console.log("timer reset");

		timer = window.setInterval(() => {
			const rebuild = new CustomEvent("rebuild", {
				bubbles: true,
				detail: { turn: false },
			});
			window.dispatchEvent(rebuild);
		}, 2000);
	}
	function getTimer() {
		return timer;
	}

	window.addEventListener("rebuild", (e) => {
		console.log(`Player ${playersTurn ? "1" : "2"}'s turn.`, e.detail);
		if (e.detail.turn) {
			playersTurn = !playersTurn;
			console.log("hello");
			resetTimer();
		}
		if (!playersTurn) {
			//computer turn
			let board = player1.getBoard();
			let coords = generateEmptyCoords(player1);
			console.log(coords);
			board.receiveAttack(coords.x, coords.y);
			const rebuild = new CustomEvent("rebuild", {
				bubbles: true,
				detail: { turn: true },
			});
			window.dispatchEvent(rebuild);
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
	function generateEmptyCoords(player) {
		let board = player.getBoard();
		let x = Math.floor(Math.random() * board.getLength());
		let y = Math.floor(Math.random() * board.getLength());
		let moves = player.getMoves();

		if (x in moves) {
			if (moves[x].indexOf(y) !== -1) {
				return generateEmptyCoords(player);
			} else {
				moves[x].push(y);
				return {
					x,
					y,
				};
			}
		} else {
			moves[x] = [y];
			return {
				x,
				y,
			};
		}
	}

	return {
		getPlayers,
		populatePlayerBoard,
		getTurn,
		setTurn,
		resetTimer,
		getTimer,
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
