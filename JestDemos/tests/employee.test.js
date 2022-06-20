// objects
const addProperty = require('../src/employee');

describe('employee object testing',()=>{
    test('employee object assignment add a new property',()=>{
        const testdata = {name:'shalini', city:'Mumbai'};
        testdata['country'] = 'India';
        expect(addProperty('country', 'India')).toEqual(testdata); 
    });
})

describe('number matcher testing',()=>{
    it(`adding positive numbers should not be zero`,()=>{
        for(var i =1;i<=5;i++)
            for (var b=1;b<=i;b++)
                expect(i+b).not.toBe(0);
    });
    it('tests for all the number matchers',()=>{
        const data = 3+10;
        expect(data).toBeGreaterThan(10);
        expect(data).toBeGreaterThanOrEqual(10);
        expect(data).toBeGreaterThanOrEqual(13);
        expect(data).toBeLessThan(20);

    });
})