// function insertionSort(array){
// 	for(let i=0; i < array.length; i++){
// 		if(array[i]< array[i-1]){
// 			for(let j=0; j < i-1; j++){
// 				if (array[j] >= array[i]){
// 					const temp = array[i]
// 					array[i] = array[j]
// 					array[j] = temp 
// 				}
// 			}
// 		}
// 	}		
// 	return array;
// }

function insertionSort(array){
	for (let i=0; i < array.length; i++){
		const currentValue = array[i]
		for(var j=i-1; j>=0 && array[j] > currentValue; j--){
			array[j+1] = array[j];
		}
		array[j+1] = currentValue;
	}
	return array;
}


// console.log(insertionSort([8,2,1,4,9,83,4,3,56,4,5,6,7,0]))
console.log(insertionSort([8,2,1,4,9,83,4,3,56,4,5,6,7,0]))

