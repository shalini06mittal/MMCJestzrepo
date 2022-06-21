const {add} = require('../src/calc');
test.each([
    [1,2, 3],
    [2,5, 7],
    [3,3, 6],
    [4,9, 13],
    [5,11, 16]
])('add %i + %i = %i',(a,b,result)=>{
    expect(add(a,b)).toBe(result);
})