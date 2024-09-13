function Ship(length) {
	let hits = [];
	function getLength() {
		return length;
	}
	function hitPoints() {
		return hits;
	}
	function isSunk() {
		if (hitPoints() >= getLength()) {
			return true;
		}
		return false;
	}
	function hit() {}

	return { getLength, hitPoints, isSunk, hit };
}
module.exports = { Ship };
