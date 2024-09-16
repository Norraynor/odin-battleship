const gameboard = require("../modules/gameboard.js");

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
		expect(currentGameboard.board).toStrictEqual(emptyArray);
	});
});
