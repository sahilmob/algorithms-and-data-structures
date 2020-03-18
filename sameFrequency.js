function sameFrequency(num1, num2){

	const num1Frequency = {}
	const num2Frequency = {}

	const num1Array = num1.toString().split("")
	const num2Array = num2.toString().split("")

	for (let num of num1Array){
		num1Frequency[num] = (num1Frequency[num] || 0)  +1 
	}

	for (let num of num2Array){
		num2Frequency[num] = (num2Frequency[num] || 0)  +1 
	}

	console.log(num1Frequency, num2Frequency)


	for (let num in num1Frequency){
		if(num1Frequency[num] !== num2Frequency[num]){
			return false
		}
	}
	return true;
}


console.log(sameFrequency(182,128))
