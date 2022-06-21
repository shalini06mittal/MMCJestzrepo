const factorial = require('../src/exceptions');
//import factorial from '../src/calc';
//const calc = require('../src/calc');
describe('for exceptions',()=>{
    it(`when factorial called with value '0' should throw error`
    ,()=>{
        // toThrow requires a function 
        expect(()=>factorial(0)).toThrow();
        expect(()=>factorial(-3)).toThrow(Error);
        expect(()=>factorial(-3)).toThrow('-3 cannot be less than 0');
    })
})
