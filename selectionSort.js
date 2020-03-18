// function selectionSort(array){
// 	let x = 0

// 	for(let i=0; i < array.length; i++){
// 		for (let j=i+1; j< array.length; j++){
// 			console.log(++x)
// 			if(array[j] < array[i]){
// 				const temp = array[i]
// 				array[i] = array[j]
// 				array[j] = temp
// 			}
// 		}
// 	}

// 	return array;
// }

function selectionSort(array){
	console.log(array)
	for(let i=0; i < array.length; i++){
		let lowest = i;
		for (let j=i+1; j< array.length; j++){
			if(array[j] < array[lowest]){
				lowest = j;
			}
		}
		if(i !== lowest){
			console.log("swapping")
			let temp = array[i];
			array[i] = array[lowest];
			array[lowest] = temp
		}
	}	
	return array
}


console.log(selectionSort([0,8,2,1,4,9,83,4,3,56,4,5,6,7,0]))
