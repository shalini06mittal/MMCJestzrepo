const {add, sub} = require('../src/calc');
// code coverage
test(`add '5'+'10' gives result 15`,()=>{
    const result = 15;
    const actual = add(5, 10);
    // matchers
    // toBe for exact equality
    expect(actual).toBe(result);
})

it(`sub '30.56' - '20' should give result '10.56'`,()=>{
    const result = 10.56;
    expect(sub(30.56,20)).toBeCloseTo(result);
    expect(sub(30,220)).toBeGreaterThan(50); // this fails
})
