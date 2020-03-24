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
}

const b = new BST();

b.insert(10);
b.insert(11);
b.insert(9);
b.insert(19);
b.insert(8);

console.log(b.find(9));
