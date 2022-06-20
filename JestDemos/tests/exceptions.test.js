const factorial = require('../src/exceptions');

describe('for exceptions',()=>{
    it(`when factorial called with value '0' should throw error`
    ,()=>{
        // toThrow requires a function 
        expect(()=>factorial(0)).toThrow();
        expect(()=>factorial(-3)).toThrow(Error);
        expect(()=>factorial(-3)).toThrow('-3 cannot be less than 0');
    })
})