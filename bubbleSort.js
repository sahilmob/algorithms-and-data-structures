function bubbleSort(array){
	let noSwaps

	for(let i=array.length ; i > 0; i--){
		noSwaps= true
		for(let j=0; j<= i-1; j++){
			console.log("f")
			if(array[j] > array[j+1]){
				const temp = array[j];
				array[j] = array[j+1];
				array[j+1]= temp;
				noSwaps= false;
			}
		}
		if(noSwaps) break;
	}
	return array
}



// console.log(bubbleSort([78,5,34,67,33,22,1,45,2,4,8,42,74,13,23,0]))
console.log(bubbleSort([8,1,2,3,4,5,6,7]))