const math = require('./math');
const doAdd = (a,b) => math.add(a,b);
const doSubtract = (a,b) => math.sub(a,b);
const doMultiply = (a,b) => math.mul(a,b);
const doDivide = (a,b) => math.divide(a,b);

module.exports = {
    doAdd, doDivide, doMultiply, doSubtract
}