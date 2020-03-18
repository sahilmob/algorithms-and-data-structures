class Node{
	
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}


class DoublyLinkedList{

	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}


	push(value){
		const node = new Node(value);
		
		if(this.length === 0){
			this.head = node;
			this.tail = node;
		}else{
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop(){
		if(this.length === 0) return undefined;

		const removedNode = this.tail;

		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}

		this.tail = removedNode.prev;
		this.tail.next = null;
		
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}


	
}