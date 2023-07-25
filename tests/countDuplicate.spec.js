const countDuplicate = require('../array/countDuplicate');

test('should return correct number', () => {
	const expectedResult = 2;
	const result = countDuplicate([8, 1, 3, 1, 4, 5, 6, 3, 2]);
	expect(result).toEqual(expectedResult);
});
