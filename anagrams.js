function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let string1Frequency = {};
  let string2Frequency = {};

  for (char of string1) {
    string1Frequency[char] = (string1Frequency[char] || 0) + 1;
  }
  for (char of string2) {
    string2Frequency[char] = (string2Frequency[char] || 0) + 1;
  }

  for (key in string1Frequency) {
    if (!string2Frequency[key]) {
      return false;
    }

    if (string1Frequency[key] !== string2Frequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("aaz", "zza"));
