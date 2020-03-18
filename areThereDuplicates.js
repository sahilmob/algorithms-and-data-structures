function areThereDuplicates(...args) {
	const argsFrequency = {}
	for (item of args){
		argsFrequency[item] = (argsFrequency[item] || 0) + 1
	}
	for (item in argsFrequency){
		if (argsFrequency[item] > 1){
			return true
		}
	}
	return false
  }

console.log(areThereDuplicates(1,2,3,4,5,6,6))