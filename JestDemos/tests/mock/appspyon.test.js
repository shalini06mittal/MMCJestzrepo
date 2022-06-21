const math = require('./math');
const app = require('./app');

describe('app module with spy on',()=>{
    test('calls math.add actual implementation',()=>{
        const addspy = jest.spyOn(math,'add');
       // jest.spyOn(window, 'alert')
        expect(app.doAdd(4,5)).toBe(9);
        expect(addspy).toHaveBeenCalled();
        expect(math.add).toHaveBeenCalledTimes(1);
        expect(math.add).toHaveBeenCalledWith(4,5);
    })
   
})