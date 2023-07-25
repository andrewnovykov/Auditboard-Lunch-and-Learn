const countDuplicate = (arr) => {
	const myMap = new Map();
	let dupsCount = 0;

	//count occur for each number
	for (let num of arr) {
		if (myMap.has(num)) {
			myMap.set(num, myMap.get(num) + 1);
		} else {
			myMap.set(num, 1);
		}
	}

	//count dups
	for (let count of myMap.values()) {
		if (count > 1) {
			dupsCount++;
		}
	}
	return dupsCount;
};

//console.log(countDuplicate([1, 3, 1, 1, 4, 5, 6, 3, 2]));

module.exports = countDuplicate;
