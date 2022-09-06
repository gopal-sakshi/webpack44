import { printPrimes } from '@gopal612-js-lib';          // Can not use import statement outside a module
import { generateRandomNumber } from '@gopal612-js-lib';

document.getElementById('printPrimesId').addEventListener("click",printPrimes23);

function printPrimes23() {
    var blah1 = printPrimes(10,99);
    var blah2 = generateRandomNumber();
    console.log(blah1, blah2);
    // console.log('blah1, blah2');
}