class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinedList {
	constructor(){
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(value){
		const node = new Node(value);

		if(!this.head){
			this.head = node;
			this.tail = node;
		}else{
			this.tail.next = node;
			this.tail = node;
		}

		this.length++
		return this;
	}

	pop(){
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while(current.next){
			newTail = current
			current = current.next
		}


		newTail.next = null;
		this.length--
		this.tail = newTail
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	reverse(){
		let currentNode= this.head; // the node we are working with 
		this.head = this.tail;
		this.tail = currentNode;
		let next; // The next item to work with
		let prev = null; // This should be the next for the current item.

		for(let i=0; i < this.length; i++){
			next = currentNode.next; // save the next for the current node (which will be the current node next iteration)
			currentNode.next = prev // Set the next node for the current node
			prev = node; // Set the current node as the previous node
			node = next;
		}
		return this;
	}

	print(){
		console.log(this)
	}
}



const list = new LinedList()

list.push("a")
list.push("b")
list.push("c")
list.reverse()
list.print()