import './index.css'
import _ from 'lodash';
import bearImage from './bear.jpeg';

/************************************************************************************************* */
// we will create p1 ====> 'paragraph html element'
const p1 = document.createElement('p');
p1.textContent = 'Hello from index.js';
document.body.append(p1);
/************************************************************************************************* */


/************************************************************************************************* */
// we will create p2 ====> 'paragraph html element
    // Spread operator was introduced in ES6
    // this ES6 code will be transpiled by babel-loader    
const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(' ');
document.body.appendChild(p2);
/************************************************************************************************* */


/*************************************************************************************************/
import { cube } from './math1.js';
// we did not import the square method from the src/math1.js
    // this square method ===> deadcode (or) unused export

function componentMath1() {
    
    const elementMath = document.createElement('pre');
    // Lodash, now imported by this script
    elementMath.innerHTML = [
        'Math', 
        'used_only_cube', 
        '5 cube is ', 
        cube(5)
    ].join('\n\n');
    
    return elementMath;
}
 
document.body.appendChild(componentMath1());
/*************************************************************************************************/




/*************************************************************************************************/
function component1() {

    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['loadash', 'addition', 'index.js'], ' '); 

    return element;
}

function component2() {

    const element = document.createElement('div');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = bearImage;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component1());
document.body.appendChild(component2());


/*************************************************************************************************/



/********************************************************************************** */

import Data from './data.xml';
import Notes from './data.csv';
import clubDetails from './data.json';

console.log(Data);
console.log(Notes);
console.log(clubDetails);
/********************************************************************************** */


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