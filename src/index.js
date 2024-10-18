import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import Game from "../modules/game";
function component() {
	const element = document.createElement("div");
	const players = Game().getPlayers();
	// console.log(players[0].getBoard());

	// Lodash, currently included via a script, is required for this line to work
	element.appendChild(DOMManager.buildGameboard(players[0]));

	Game().populatePlayerBoard();
	console.table(players[0].getBoard().getGameboard());
	// console.table(players[1].getBoard().getGameboard());

	return element;
}

document.body.appendChild(component());
