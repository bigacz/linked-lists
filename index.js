import LinkedList from './linkedList.js';

const testAppend = new LinkedList();
testAppend.append('one');
testAppend.append('two');
console.log(testAppend.toString()); // ( one ) -> ( two ) -> null

const testPrepend = new LinkedList();
testPrepend.prepend('two');
testPrepend.prepend('one');
console.log(testPrepend.toString()); // ( one ) -> ( two ) -> null

const testSize = new LinkedList();
console.log(testSize.getSize()); // 0testHead
testSize.append('one');
console.log(testSize.getSize()); // 1

const testHead = new LinkedList();
console.log(testHead.getHead()); // null
testHead.append('one');
console.log(testHead.getHead()); // Node { value: 'one', next: null }
testHead.append('two');
console.log(testHead.getHead()); // Node { value: 'one', next: Node {...} }

const testTail = new LinkedList();
console.log(testTail.getTail()); // null
testTail.append('one');
console.log(testTail.getTail()); // Node { value: 'one', next: null }
testTail.append('two');
console.log(testTail.getTail()); // Node { value: 'two', next: null }

const testGet = new LinkedList();
console.log(testGet.getAt(4)); // undefined
testGet.append('one');
testGet.append('two');
testGet.append('three');
testGet.append('four');
console.log(testGet.getAt(1)); // Node {value: 'two', next: Node {...} }
console.log(testGet.getAt(3)); // Node { value: 'four', next: null }

const testPop = new LinkedList();
console.log(testPop.toString()); // null
testPop.pop();
console.log(testPop.toString()); // null
testPop.append('one');
testPop.append('two');
testPop.pop();
console.log(testPop.toString()); // ( one ) -> null

const testContains = new LinkedList();
console.log(testContains.contains('two')); // false
testContains.append('one');
console.log(testContains.contains('two')); // false
testContains.append('two');
console.log(testContains.contains('two')); // true

const testFind = new LinkedList();
console.log(testFind.find('three')); // undefined
testFind.append('two');
console.log(testFind.find('three')); // undefined
testFind.append('three');
console.log(testFind.find('three')); // 1
testFind.prepend('one');
console.log(testFind.find('three')); // 2

const testString = new LinkedList();
console.log(testString.toString()); // null
testString.append('one');
console.log(testString.toString()); // ( one ) -> null
testString.append('two');
console.log(testString.toString()); // ( one ) -> ( two ) -> null

const testInsert = new LinkedList();
console.log(testInsert.toString()); // null
testInsert.insertAt('two', 0);
console.log(testInsert.toString()); // ( two ) -> null
testInsert.insertAt('three', 1);
console.log(testInsert.toString()); // ( one ) -> ( three ) -> null
testInsert.insertAt('two', 1);
console.log(testInsert.toString()); // ( two ) -> ( two ) -> ( three ) -> null
// index below 0 and higher than length will throw an error

const testRemove = new LinkedList();
testRemove.append('one');
testRemove.removeAt(0);
console.log(testRemove.toString()); // null
testRemove.append('one');
testRemove.append('two');
testRemove.append('three');
testRemove.removeAt(1);
console.log(testRemove.toString()); // ( one ) -> ( three ) -> null
testRemove.removeAt(1);
console.log(testRemove.toString()); // ( one ) -> null
testRemove.removeAt(0);
console.log(testRemove.toString()); // null

// index below 0 and higher than length - 1 will throw an error
