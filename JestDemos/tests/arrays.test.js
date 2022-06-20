const colors  = require('../src/arrays');
describe('arrays testing',()=>{
    test(`colors array should contain red 'color'`,()=>{
        expect(colors).toContain('red');
    })
})