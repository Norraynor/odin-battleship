const ship = require("../modules/ship.js");

describe("ship object test", () => {
	let currentShip = ship.Ship(3);

	test("object exists", () => {
		expect(currentShip).toBeDefined();
	});
});
