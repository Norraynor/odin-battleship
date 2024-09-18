const gameboard = require("../modules/gameboard.js");
const ship = require("../modules/ship.js");

describe("gameboard object tests", () => {
	let currentGameboard = gameboard.Gameboard();
	let emptyArray = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	test("gameboard exists", () => {
		expect(currentGameboard).toBeDefined();
	});
	test("gameboard is empty", () => {
		expect(currentGameboard.gameboard).toStrictEqual(emptyArray);
	});
	test("gameboard has ship after placing", () => {
		let newShip = ship.Ship(2);
		let gameArray = emptyArray;
		gameArray[0][0] = newShip;
		currentGameboard.placeShip(newShip, 0, 0);
		expect(currentGameboard.gameboard[0][0]).toStrictEqual(gameArray[0][0]);
	});
});
