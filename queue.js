class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    const removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);
