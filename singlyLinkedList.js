class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return undefined;

    let j = 0;
    let current = this.head;

    while (j !== i) {
      current = current.next;
      j++;
    }

    return current;
  }

  set(i, value) {
    const foundNode = this.get(i);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(i, value) {
    if (i < 0 || i > this.length) return false;

    if (i === 0) return !!this.unshift(value);

    if (i === this.length) return !!this.push(value);

    const prevNode = this.get(i - 1);
    const currentNode = this.get(i);
    const newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    const prevNode = this.get(i - 1);
    const removedNode = this.get(i);
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let i = 0;
    let current = this.head;
    let next;
    let prev = null;
    this.head = this.tail;
    this.tail = current;

    while (i < this.length) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
  }

  print(){
    let i = 0;
    const arr = []
    let current = this.head

    while(i < this.length){
      arr.push(current.value)
      current = current.next
      i++;
    }

    console.log(arr)
  }
}

const list = new SinglyLinkedList();

// list
//   .push("Hi")
//   .push("There")
//   .push("How")
//   .push("Are")
//   .push("You");
// .shift();

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();

// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.shift();

// console.log(list.pop());

// list.unshift("hhhh");
// list.unshift("1hhhh");
// list.unshift("2hhhh");

// console.log(list.get(2));

// console.log(list.set(2, "333333"));

// console.log(list.get(2));

list
  .push(0)
  .push(1)
  .push(2)
  .push(3)
  .push(4)
  .push(5)
  .push(6);

// console.log(list)

list.print()

list.reverse();

// console.log(list);

// console.log(list.get(0));

list.print()
