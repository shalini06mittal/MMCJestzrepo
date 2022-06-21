function calculate(a,b,callback)
{
    return callback(a,b);
}

function calpower(a,b){
    console.log('callback')
    return Math.pow(a,b);
}

// do not have the callback method implementation implemented yet
module.exports = 
{calculate, calpower}