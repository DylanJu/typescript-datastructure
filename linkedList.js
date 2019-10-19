export class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  last() {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  insert(item) {
    const newNode = new Node(item);
    const currentNode = this.last();

    currentNode.next = newNode;
  }

  remove() {
    let secondLastNode = this.head;

    while (secondLastNode.next && secondLastNode.next.next) {
      secondLastNode = secondLastNode.next;
    }

    secondLastNode.next = null;
  }

  find(item) {
    let currentNode = this.head;

    while (currentNode.item !== item && currentNode.next) {
      currentNode = currentNode.next;
    }

    if (currentNode === this.head) {
      return null;
    }

    return currentNode;
  }

  display() {
    const displayList = [];
    let currentNode = this.head;

    while (currentNode.next) {
      displayList.push(currentNode.next.item);
      currentNode = currentNode.next;
    }

    return displayList;
  }

  size() {

  }
}

export class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}
