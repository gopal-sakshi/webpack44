import './index.css'

// we will create p1 ====> 'paragraph html element'
const p1 = document.createElement('p');
p1.textContent = 'Hello from index.js';
document.body.append(p1);

// we will create p2 ====> 'paragraph html element
    // Spread operator was introduced in ES6
    // this ES6 code will be transpiled by babel-loader    
const p2 = document.createElement('p');
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11];
const numbers3 = [...numbers1, ...numbers2];
p2.textContent = numbers3.join(' ');
document.body.appendChild(p2);