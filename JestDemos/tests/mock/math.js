const add = (a,b)=>{
    console.log('adding...')
    alert('add called')
    return a+b
};
const sub = (a,b)=> a-b;
const mul = (a,b)=> a*b;
const divide = (a,b)=> a/b;
module.exports = {add, sub, mul, divide};