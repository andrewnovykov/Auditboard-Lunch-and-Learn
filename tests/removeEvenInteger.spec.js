const removeEven = require('../array/removeEvenInteger');

test('should return correct data', () => {
	const expectedResult = [1, 5, 3];
	const result = removeEven([1, 2, 4, 5, 10, 6, 3]);
	expect(result).toEqual(expectedResult);
});
