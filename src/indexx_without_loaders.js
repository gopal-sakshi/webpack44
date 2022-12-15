// import './index.css'
import _ from 'lodash';

/************************************************************************************************* */
// we will create p1 ====> 'paragraph html element'
const p1 = document.createElement('p');
p1.textContent = 'Hello from index.js';
document.body.append(p1);
/************************************************************************************************* */

/****************************************************************** */
import Print25 from './print25';

function component24() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 element.onclick = Print25.bind(null, 'print24, new module id generated!, so except vendor.js, index, module, runtime.js hash are changed');

  return element;
}

document.body.appendChild(component24());
/************************************************************************* */

/************************************************************************************************* */
// we will create p2 ====> 'paragraph html element
    // Spread operator was introduced in ES6
    // this ES6 code will be transpiled by babel-loader    
const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = [7, 8, 9, 10, 11];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(' ');
document.body.appendChild(p2);
/************************************************************************************************* */




/*************************************************************************************************/
function component1() {

    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['loadash', 'addition', 'index.js'], ' '); 

    return element;
}



document.body.appendChild(component1());


/*************************************************************************************************/




/**************************************************************************/
import printMe from './print23.js';

function component3() {
    
    const element = document.createElement('div');
    const btn = document.createElement('button'); 
    element.innerHTML = _.join(['print23', 'section'], '__');
    btn.innerHTML = 'Click me and check the console!!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
 
document.body.appendChild(component3());
/**************************************************************************/