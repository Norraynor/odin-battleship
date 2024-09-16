function Ship(length) {
	let hits = 0;
	function getLength() {
		return length;
	}
	function hitPoints() {
		return length - hits;
	}
	function isSunk() {
		if (hitPoints() <= 0) {
			return true;
		}
		return false;
	}
	function hit() {
		hits++;
	}

	return { getLength, hitPoints, isSunk, hit };
}
module.exports = { Ship };
