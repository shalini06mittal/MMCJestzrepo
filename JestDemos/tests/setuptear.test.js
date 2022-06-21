/**
 * setup => initialization stuff
 * DB call => select 
 * getCustomers()
 * weather appn => fetch weather details of say 10 cities
 * tear down => clear up the resources
 */
// (function(){
//     console.log('IIFE')
// })()
 beforeEach(()=>{
    console.log('GLOBAL - BEFORE');
    // file open
})

test('global test',()=>{
    console.log('test global')
})
describe('setup and tear down -1 ',()=>{
    beforeAll(()=>{
        console.log('before all 1')
    })
    afterAll(()=>{
        console.log('after all 1')
    })
    beforeEach(()=>{
        console.log('1 - BEFORE');
        // file open
    })
    it('test 1',()=>{
        console.log('test 1');
        expect(true).toBeTruthy();
        // adding contents in the file
    })
    it('test 2',()=>{
        console.log('test 2');
        expect(2+2).toBe(4);
        
    })
    afterEach(()=>{
        console.log('1- after ')
    })
})
describe('setup and tear down - 2',()=>{
    beforeAll(()=>{
        console.log('2- before all')
    })
    afterAll(()=>{
        console.log('2- after all')
    })
    beforeEach(()=>{
        console.log('2 - BEFORE');
        // file open
    })
    it('test 3',()=>{
        console.log('test 3');
        expect(true).toBeTruthy();
        // adding contents in the file
    })
    it('test 4',()=>{
        console.log('test 4');
        expect(2+2).toBe(4);
    })
    afterEach(()=>{
        console.log('2- after ')
    })
})