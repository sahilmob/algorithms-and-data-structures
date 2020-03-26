class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (node.priority >= parent.priority) break;
      this.values[parentIndex] = node;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const lastItem = this.values.pop();
    const length = this.values.length;
    if (this.values.length > 0) {
      this.values[0] = lastItem;
    } else {
      return min;
    }
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < lastItem.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < lastItem.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) return min;
      this.values[index] = this.values[swap];
      this.values[swap] = lastItem;
      index = swap;
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("heigh fever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
