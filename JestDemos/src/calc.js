const add = (a,b)=>a+b;
const sub = (a,b)=>{
    if(a>b)
    return a-b;
    b-a;
}
module.exports = {add, sub};