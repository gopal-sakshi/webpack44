import _ from 'lodash';
const p1 = document.createElement('p');
p1.textContent = _.join(['loadash', 'addition', 'module1.js'], ' '); 
document.body.append(p1);