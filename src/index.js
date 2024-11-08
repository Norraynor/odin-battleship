import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import Game from "../modules/game";
function component() {
	const element = document.createElement("div");
	element.classList.add("container");

	const game = Game();
	const players = game.getPlayers();
	// console.log(players[0].getBoard());

	window.addEventListener("rebuild", (e) => {
		element.textContent = "";
		element.appendChild(DOMManager.buildGameboard(players[0]));
		element.appendChild(DOMManager.buildHitBoard(players[1]));
	});

	element.appendChild(DOMManager.buildGameboard(players[0]));

	element.appendChild(DOMManager.buildHitBoard(players[1]));

	game.populatePlayerBoard();
	element.textContent = "";
	element.appendChild(DOMManager.buildGameboard(players[0]));
	element.appendChild(DOMManager.buildHitBoard(players[1]));

	console.table(players[0].getBoard().getGameboard());
	game.resetTimer();
	// console.table(players[1].getBoard().getGameboard());

	return element;
}

document.body.appendChild(component());
