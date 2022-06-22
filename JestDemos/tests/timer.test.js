jest.useFakeTimers();
jest.spyOn(global,'setTimeout');
test('waits for 1 second before endong the game',()=>{
    const timer = require('../src/timergame');
    timer();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

})
