const math = require('./math');
const app = require('./app');
// mock takes the name of the module to be mocked
jest.mock('./math')
describe('app with match module mocked',()=>{
    test('add function of app should call add function of math module'
    ,()=>{
        math.add.mockImplementation(()=>5)
        app.doAdd(1,2);
        expect(math.add).toHaveBeenCalled();
        expect(math.add(2,3)).toBe(5);
    })
})