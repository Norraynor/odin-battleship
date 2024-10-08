import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import * as GameManager from "../modules/game";
function component() {
	const element = document.createElement("div");
	console.log(GameManager.Game());

	// Lodash, currently included via a script, is required for this line to work
	element.appendChild(DOMManager.buildGameboard(GameManager().player1));

	return element;
}

document.body.appendChild(component());
