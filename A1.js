function findOppositeNumber(n, inputNumber){
    opposite = ((n + inputNumber*2)/2) % n;
    return opposite;
}
console.log(findOppositeNumber(6,5));