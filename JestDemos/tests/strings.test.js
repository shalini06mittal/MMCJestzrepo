const getEmail = require('../src/strings')

describe('string testing',()=>{
    it(`when getEmail called the returned value should contain 'gmail'`
    ,()=>{
        expect(getEmail('shalini@gmail.com')).toMatch(/gmail/);
    });

    it(`when getEmail called the returned value should not contain 'gmail'`
    ,()=>{
        expect(getEmail('shalini@mmc.com')).not.toMatch(/gmail/);
    })
})