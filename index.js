import LinkedList from './linkedList.js';

const test = new LinkedList();

test.append('third');
test.append('fourth');
test.append('fifth');
test.prepend('first');
test.prepend('zero');

test.insertAt('second', 1);
console.log(test.toString());
