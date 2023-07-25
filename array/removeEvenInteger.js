const removeEven = (arr) => {
	const odds = [];
	for (let num of arr) {
		if (num % 2 != 0) {
			odds.push(num);
		}
	}
	return odds;
};

module.exports = removeEven;
