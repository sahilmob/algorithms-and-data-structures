function capitalizeFirst(array) {
  const capitalizedArray = [];

  function helper(arr) {
    while (arr.length) {
      const capitalizedFirstLetter =
        arr[0][0].toUpperCase() + array[0].substring(1);
      capitalizedArray.push(capitalizedFirstLetter);
      arr.splice(0, 1);
      helper(arr);
    }
  }
  helper(array);
  return capitalizedArray;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
