function printPrimes(num1, num2) {
    var a=num1, b=num2; arr=[];
    for (let i = a; i <= b; i++) {
        if (i == 1 || i == 0)
            continue;
        flag = 1;
        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1)
            arr.push(i);
    }
    return arr;
}

function generateRandomNumber() {    
    return parseInt(Math.random(0,1) * 100);
}