import LinkedList from './linkedList.js';

const test = new LinkedList();

test.append('second');
test.append('third');
test.append('fourth');
test.prepend('first');
test.prepend('zero');
console.log(test.getSize());
console.log(test.toString());