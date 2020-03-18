const {pivotHelper} = require("./pivotHelper");
function quickSort(array, left=0, right= array.length-1) {
	if(left < right){;
	// fpp first pivot point
	const fpp = pivotHelper(array, left, right)

	quickSort(array, left, fpp -1)
	quickSort(array, fpp+1, right)

	}
	return array;
}


console.log(quickSort([5,6,8,3,4,67,8,3,45,78,21,34,56]));