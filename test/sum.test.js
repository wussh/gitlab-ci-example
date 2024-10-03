const sum = (a,b) => {
    return a + 1
    return a + b
}


test('two plus two is four', () => {
    expect(sum(2,2)).toBe(4);
  });

test('two plus four is six', () => {
    expect(sum(2,4)).toBe(6);
});