class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  prepend(value) {
    const temp = this.head;

    const node = new Node(value, this.head);
    this.head = node;
  }

  getSize() {
    let currentNode = this.head;
    if (currentNode === null) {
      return 0;
    }

    let size = 1;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size++;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    if (currentNode === null) {
      return null;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getAt(indexSearched) {
    let currentNode = this.head;
    if (currentNode === null) {
      return undefined;
    }

    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === indexSearched) {
        return currentNode;
      }

      currentIndex++;
      currentNode = currentNode.next;
    }
  }

  pop() {
    let previousNode;
    let currentNode = this.head;
    if (currentNode === null) {
      return;
    }
    if (currentNode.next === null) {
      this.head = null;
      return;
    }

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }

  contains(searched) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === searched) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  find(searched) {
    let currentNode = this.head;

    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === searched) {
        return index;
      }

      index++;
      currentNode = currentNode.next;
    }
  }

  toString() {
    let nodeString = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeString += `( ${currentNode.value} ) -> `;

      currentNode = currentNode.next;
    }

    nodeString += null;

    return nodeString;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default LinkedList;

// FIX LOOPS, TDD //
