import sum from '../bas';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
