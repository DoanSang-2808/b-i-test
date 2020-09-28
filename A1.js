function findOppositeNumber(n, inputNumber){
    opposite = ((n + (inputNumber*2)) / 2) % n;
    return opposite;
}
let n = 0;
while(n >= 4 || n <= 20){
    n = Number(prompt("Nhập vào 1 số chắn từ 4-20"));
    break;
}
console.log(n)
console.log(findOppositeNumber(n,1));