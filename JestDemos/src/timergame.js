function timer(callback)
{
    setTimeout(()=>{
        console.log(`Time's Up -- STOP`);
        callback && callback();
    },1000);
}
module.exports = timer