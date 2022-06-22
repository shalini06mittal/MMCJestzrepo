/**
 * @jest-environment jsdom
 */
const app = require('./app');
const math = require('./math');
describe('app module with spy on',()=>{
    test('calls math.add actual implementation',()=>{
        const addspy = jest.spyOn(math,'add');
        const alertmock = jest.spyOn(window, 'alert').mockImplementation()
        expect(app.doAdd(4,5)).toBe(9);
        expect(addspy).toHaveBeenCalled();
        expect(alertmock).toHaveBeenCalled();
        expect(math.add).toHaveBeenCalledTimes(1);
        expect(math.add).toHaveBeenCalledWith(4,5);
    })
   
})