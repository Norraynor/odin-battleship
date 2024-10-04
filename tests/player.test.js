const player = require("../modules/player.js");
describe("player object tests", () => {
	let playur = player.Player("bob");
	test("player is defined", () => {
		expect(playur).toBeDefined();
	});

	test("player returns gameboard", () => {
		expect(playur.getBoard().getGameboard()).toStrictEqual(
			Array.from({ length: 10 }, () => Array(10).fill(null))
		);
	});
});
