
function pivotHelper(array, start=0, end=array.length+1){
	function swap(arr, i, j){
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	let pivot = array[start];
	let noOfItems = start;

	for(let i=start+1; i < array.length; i++){
		if (pivot > array[i] ){ 
			noOfItems++;
			swap(array, noOfItems, i)
		}
	}
	swap(array, noOfItems, start)
	return noOfItems
}


// pivotHelper([5,6,8,3,4,67,8,3,45,78,21,34,56]);

exports.pivotHelper = pivotHelper;