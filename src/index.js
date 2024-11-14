import "./style.css";
import * as DOMManager from "../modules/DOMManager";
import Game from "../modules/game";
function component() {
	const element = document.createElement("div");
	element.classList.add("main");
	const h3 = document.createElement("h3");
	const h1 = document.createElement("h1");
	h1.textContent = "BATTLESHIPS";
	h3.textContent = `computer shoots randomly.
		figure out opponent ships location and destroy them.
		when all ships are destroyed game ends(in console)`;
	const game = Game();
	const players = game.getPlayers();
	// console.log(players[0].getBoard());
	element.appendChild(h1);
	element.appendChild(h3);
	const gameboardContainer = document.createElement("div");
	gameboardContainer.classList.add("container");
	element.appendChild(gameboardContainer);

	window.addEventListener("rebuild", (e) => {
		gameboardContainer.textContent = "";
		gameboardContainer.appendChild(DOMManager.buildGameboard(players[0]));
		gameboardContainer.appendChild(DOMManager.buildHitBoard(players[1]));
	});

	gameboardContainer.appendChild(DOMManager.buildGameboard(players[0]));

	gameboardContainer.appendChild(DOMManager.buildHitBoard(players[1]));

	game.populatePlayerBoard();
	gameboardContainer.textContent = "";
	gameboardContainer.appendChild(DOMManager.buildGameboard(players[0]));
	gameboardContainer.appendChild(DOMManager.buildHitBoard(players[1]));

	console.table(players[0].getBoard().getGameboard());
	game.resetTimer();
	// console.table(players[1].getBoard().getGameboard());

	return element;
}

document.body.appendChild(component());
