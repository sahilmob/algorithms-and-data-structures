function maxSubarraySum(arr, length){
	
	let max = 0;

	if(arr.length < length) return null;

	for(let i=0; i < length; i++){
		max += arr[i]
	}

	let tempMax = max;
	for (let i=1; i< arr.length; i++){
		const end = parseInt(i) + parseInt(length -1)
		if (end >= arr.length) return max;
		 tempMax= tempMax - arr[i-1] + arr[end]
		if (tempMax > max){
			max = tempMax
		}
	}
	return max
  }

  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))