const addAsync = require('../src/asyncwork');
describe('Asynchronous calls',()=>{
    // it('should add 2 numbers and return the result with a delay',()=>{
    //     expect.assertions(1);
    //     addAsync(2,2,res=>{
    //         console.log(res);
    //         expect(res).toBe(5);
    //     });
    // });
    it('should add 2 numbers and return the result with a delay',
    done=>{
        addAsync(2,2,res=>{
            expect(res).toBe(4);
            done();
        });
    });
})