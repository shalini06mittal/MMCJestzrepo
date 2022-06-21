describe('mock in javascript',()=>{
    test('a simple mock function',()=>{
        const mockobj = jest.fn();
        mockobj();
        expect(mockobj).toHaveBeenCalled();
        expect(mockobj).toHaveBeenCalledTimes(1);
    })
    test('a simple mock function with fake implementation',()=>{
        const mockobj = jest.fn(()=>"mocking");
        mockobj("data");
        expect(mockobj).toHaveBeenCalled();
        expect(mockobj).toHaveBeenCalledTimes(1);
        expect(mockobj).toHaveBeenCalledWith("data");
        expect(mockobj()).toBe("mocking");
        
    })
    test('a simple mock function with fake implementation using mockImplementation()',()=>{
        const mockobj = jest.fn();
        mockobj.mockImplementation((name)=>name.toUpperCase());
        let result=  mockobj("Shalini");
        expect(mockobj).toHaveBeenCalled();
        expect(mockobj).toHaveBeenCalledTimes(1);
        expect(mockobj).toHaveBeenCalledWith("Shalini");
        expect(result).toBe("SHALINI");
    })
})