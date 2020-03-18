function merge(arr1, arr2){
	const newArray = []
	let i = 0;
	let j = 0;

	while(i < arr1.length && j < arr2.length){
		if(arr1[i] < arr2[j]){
			newArray.push(arr1[i]);
			i++;
		}else{
			newArray.push(arr2[j]);
			j++;
		}
	}

	while(i < arr1.length){
		newArray.push(arr1[i])
		i++
	}
	while(j < arr2.length){
		newArray.push(arr2[j])
		j++
	}

	return newArray;
}


exports.mergeTwoArrays = merge;


// console.log(merge([1,10,50], [2,14,99,100]))