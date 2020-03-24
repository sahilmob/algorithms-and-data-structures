class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.size++;
    return this.size;
  }

  pop() {
    if (this.first) {
      const removedNode = this.first;
      this.first = removedNode.next;
      removedNode.next = null;
      this.size--;
      return removedNode;
    }
    return undefined;
  }
}
