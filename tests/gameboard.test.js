const board = require("../modules/gameboard.js");
const ship = require("../modules/ship.js");

describe("gameboard object tests", () => {
	let currentGameboard = board.Gameboard();
	let emptyArray = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	beforeEach(() => {
		currentGameboard.gameboard = emptyArray;
	});
	afterEach(() => {
		currentGameboard.gameboard = emptyArray;
	});
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
	test("ship takes correct amount of space on board", () => {
		let newShip = ship.Ship(2);
		let gameArray = emptyArray;
		gameArray[0][0] = newShip;
		gameArray[1][0] = newShip;
		currentGameboard.placeShip(newShip, 0, 0);
		expect(currentGameboard.gameboard[0][0]).toStrictEqual(gameArray[0][0]);
		expect(currentGameboard.gameboard[1][0]).toStrictEqual(gameArray[1][0]);
	});
	test("board receive attack", () => {
		expect(currentGameboard.receiveAttack(2, 0)).toBe("miss");
	});
	test("board receive attack and ship sink", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0);
		expect(currentGameboard.gameboard[0][0].hitPoints()).toBe(2);
		//currentGameboard.receiveAttack(0, 0);
		// expect(currentGameboard.gameboard[0][0].hitPoints()).toBe(1);
		expect(currentGameboard.receiveAttack(0, 0)).toBe(1);
		expect(currentGameboard.receiveAttack(0, 0)).toBe(0);
		expect(currentGameboard.gameboard[0][0].hitPoints()).toBe(0);
	});
});
