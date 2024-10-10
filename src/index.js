import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import Game from "../modules/game";
function component() {
	const element = document.createElement("div");
	console.log(Game().getPlayers()[0]);

	// Lodash, currently included via a script, is required for this line to work
	element.appendChild(DOMManager.buildGameboard(Game().getPlayers()[0]));

	return element;
}

document.body.appendChild(component());
