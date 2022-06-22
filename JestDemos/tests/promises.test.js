describe('test promises',()=>{
    // test('promise  without handling',()=>{
    //     const promise = Promise.resolve(true);
    //     promise.then(value=>{
    //         expect(value).toBe(false);
    //     })
    // });
    test('promise  with return',()=>{
        const promise = Promise.resolve(true);
        return promise.then(value=>{
            expect(value).toBe(true);
        })
    });
    test('promise with resolves assertion',()=>{
        const promise = Promise.resolve(true);
        return expect(promise).resolves.toBe(true);
    });
    test('promise with reject assertion',()=>{
        const promise = Promise.reject('error');
        return expect(promise).rejects.toBe('error');
    });
    test('promise with async/await',async()=>{
        const promise = await Promise.resolve(true);
         expect(promise).toBe(true);
    });
})