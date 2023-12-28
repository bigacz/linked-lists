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