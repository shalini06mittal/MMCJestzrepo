const obj = require('./op');

describe('op module',()=>{
    test(`when 'calclulate() called should have called the mock callback once`,()=>{
        const mockcallback = jest.fn((a,b)=> Math.pow(a,b));
        let result = obj.calculate(2,4, mockcallback);
        expect(mockcallback).toHaveBeenCalled();
        expect(result).toBeCloseTo(16);

    });
    test(`when 'calclulate() called should have called the real callback once`,()=>{
        //const mockcallback = jest.fn((a,b)=> Math.pow(a,b));
        jest.spyOn(obj, 'calpower');
        let result = obj.calculate(2,4, obj.calpower);
        
        expect(obj.calpower).toHaveBeenCalled();
        expect(result).toBeCloseTo(16);

    });
})