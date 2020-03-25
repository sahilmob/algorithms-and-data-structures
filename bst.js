class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  checkNode(node, value) {
    if (value < node.value) {
      if (this.left) {
        return current.right;
      } else {
      }
    } else {
      return current.right;
    }
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //   find(value) {
  //     if (!this.root) return undefined;

  //     let current = this.root;

  //     while (true) {
  //       if (value === current.value) return current;
  //       if (value < current.value) {
  //         if (current.left) {
  //           current = current.left;
  //         } else {
  //           return undefined;
  //         }
  //       } else {
  //         if (current.right) {
  //           current = current.right;
  //         } else {
  //           return undefined;
  //         }
  //       }
  //     }
  //   }

  // another solution
  find(value) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;
    while (current && !found) {
      //   console.log("current", current);
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  bfs() {
    const q = [];
    const values = [];

    q.push(this.root);

    while (q.length) {
      const node = q.shift();
      values.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return values;
  }

  dfsPreOrder() {
    const values = [];
    function traverse(node) {
      values.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return values;
  }
}

const b = new BST();

b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(8);
b.insert(20);

// console.log(b.find(9));
console.log(b.dfsPreOrder());
