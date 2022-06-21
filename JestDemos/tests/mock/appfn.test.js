const math = require('./math');
const app = require('./app');

describe('app module testing..',()=>{
    beforeEach(()=>{
        math.add = jest.fn();
        math.sub = jest.fn(()=>10);
    })
    test(`when 'add' is called the 'math.add' is called by 'doAdd()'`
    ,()=>{
        app.doAdd(2,3);
        expect(math.add).toHaveBeenCalled();
    })
    test(`when 'add' is called the 'math.add' returns a value`
    ,()=>{
        math.add.mockImplementation(()=>100)
        app.doAdd(50,50);
        expect(math.add).toHaveBeenCalled();
        expect(math.add(50,50)).toBe(100);
    })
    test(`when 'sub' called should have called 'math.sub' and return a value`,()=>{
        app.doSubtract(20,10);
        expect(math.sub).toHaveBeenCalled();
        expect(math.sub).toHaveBeenCalledWith(20,10);
        expect(math.sub(20,10)).toBe(10);
    });
})