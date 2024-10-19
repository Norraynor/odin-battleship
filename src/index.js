import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import Game from "../modules/game";
function component() {
	const element = document.createElement("div");
	const game = Game();
	const players = game.getPlayers();
	// console.log(players[0].getBoard());

	element.appendChild(DOMManager.buildGameboard(players[0]));

	game.populatePlayerBoard();
	element.textContent = "";
	element.appendChild(DOMManager.buildGameboard(players[0]));

	console.table(players[0].getBoard().getGameboard());
	// console.table(players[1].getBoard().getGameboard());

	return element;
}

document.body.appendChild(component());
