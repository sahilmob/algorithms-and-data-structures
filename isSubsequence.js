function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	while(j < str2.length){
		if(str1[i] === str2[j])i++
		if(i === str1.length) return true;
		j++;
	}
  }

console.log(isSubsequence("hello", "hello world"));
