const add = (a,b)=>a+b;
const sub = (a,b)=>{
    if(a>b)
    return a-b;
   return  b-a;
}
module.exports = {add, sub};