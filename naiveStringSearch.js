function naiveSearch(long, pattern) {
let count = 0;
  for (let i = 0; i < long.length; i++) {
	 for (let j = 0; j < pattern.length; j++) {
		//  console.log(long[i+j],pattern[j])
		if(long[i+j] !== pattern[j]){
			break;
		}
		if(j === pattern.length - 1){
			count++
		}
	}
  }
  return count;
}
console.log(naiveSearch("lorielollollol loled", "lol"));
