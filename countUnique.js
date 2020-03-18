function countUnique(array){
	let left = 0;
	let right = 1;
	
	const arrayCopy = [...array]

	for(i in array){
		if (arrayCopy[left] === arrayCopy[right]){
			++right
		}else{
			++left
			arrayCopy.splice(left, 1, array[right])
			++right
		}
	}
	return left

}



console.log(countUnique([1,1,1,2,2,2,2,3,5,6,6,6,8,8,9,11,11,11]))