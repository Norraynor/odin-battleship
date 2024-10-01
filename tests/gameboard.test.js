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
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		expect(currentGameboard.receiveAttack(0, 0)).toBe(1);
		expect(currentGameboard.receiveAttack(0, 0)).toBe(0);

		expect(currentGameboard.getGameboard()[0][0].isSunk()).toBe(true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(0);
	});
	test("ship is created on 2 spaces horizontally", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0]).toBe(newShip);
		expect(currentGameboard.getGameboard()[0][1]).toBe(newShip);
	});
	test("ship is created on 2 spaces horizontally and one hit is reflected on whole object", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		currentGameboard.receiveAttack(0, 0);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(1);
		expect(currentGameboard.getGameboard()[0][1].hitPoints()).toBe(1);
	});
	test("ship is created on 2 spaces horizontally and sinked is reflected on whole object", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		currentGameboard.receiveAttack(0, 0);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(1);
		currentGameboard.receiveAttack(0, 1);
		expect(currentGameboard.getGameboard()[0][1].hitPoints()).toBe(0);
	});

	test("ship is created on 2 spaces horizontally and cannot be hit twice on the same spot", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		expect(currentGameboard.receiveAttack(0, 0)).toBe(1);
		currentGameboard.receiveAttack(0, 0);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(1);
		currentGameboard.receiveAttack(0, 0);
		expect(currentGameboard.getGameboard()[0][1].hitPoints()).toBe(1);
	});

	test("ship is not destroyed and game not over", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		expect(currentGameboard.isGameOver()).toBe(false);
	});

	test.only("ship is sunk and game is over", () => {
		let newShip = ship.Ship(2);
		currentGameboard.placeShip(newShip, 0, 0, true);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(2);
		currentGameboard.receiveAttack(0, 0);
		expect(currentGameboard.getGameboard()[0][0].hitPoints()).toBe(1);
		expect(currentGameboard.getGameboard()[0][1].isSunk()).toBe(false);
		currentGameboard.receiveAttack(0, 1);
		expect(currentGameboard.getGameboard()[0][1].hitPoints()).toBe(0);
		expect(currentGameboard.getGameboard()[0][1].isSunk()).toBe(true);
		expect(currentGameboard.isGameOver()).toBe(true);
	});
});
