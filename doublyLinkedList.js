class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = removedNode.prev;
    this.tail.next = null;

    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return undefined;
    let current;
    let count = 0;
    const mid = Math.floor(this.length / 2);

    if (i <= mid) {
      current = this.head;
      while (count !== i) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== i) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(i, value) {
    const node = this.get(i);

    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(i, value) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(value);
    if (i === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const node = this.get(i - 1);
    const next = node.next;

    node.next = newNode;
    newNode.prev = node;
    newNode.next = next;
    next.prev = newNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return !!this.shift();
    if (i === this.length - 1) return !!this.pop();

    const removedNode = this.get(i);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push(0).push(1).push(2).push(3).push(4);

list.insert(4, 11);

console.log(list.get(4));
