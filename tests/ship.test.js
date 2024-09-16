const ship = require("../modules/ship.js");

describe("ship object test", () => {
	let currentShip = ship.Ship(3);

	beforeEach(() => {
		currentShip = ship.Ship(3);
	});
	test("object exists", () => {
		expect(currentShip).toBeDefined();
	});
	test("length of ship is returned", () => {
		expect(currentShip.getLength()).toBe(3);
	});
	test("hit points show numbers of hits compared to length", () => {
		expect(currentShip.hitPoints()).toBe(3);
	});
	test("hit points decreased after hit", () => {
		expect(currentShip.hitPoints()).toBe(3);
		currentShip.hit();
		expect(currentShip.hitPoints()).toBe(2);
	});
	test("ship is not sunk", () => {
		expect(currentShip.isSunk()).toBe(false);
	});
	test("ship is sunk after hits", () => {
		expect(currentShip.isSunk()).toBe(false);
		currentShip.hit();
		currentShip.hit();
		currentShip.hit();
		expect(currentShip.isSunk()).toBe(true);
	});
});
