const {mergeTwoArrays} = require("./mergeFunction");

function mergeSort(array){
	if(array.length <= 1) return array
	let left = mergeSort(array.slice(0, Math.floor((array.length/2))));
	let right = mergeSort(array.slice(Math.floor((array.length)/2)));
	return(mergeTwoArrays(left, right));
}

console.log(mergeSort([4,5,6,3,76,45,19,67,32,41,51]));