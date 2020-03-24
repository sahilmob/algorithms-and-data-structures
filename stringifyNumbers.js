function stringifyNumbers(obj) {
  const stringifiedObject = {};

  function helper(object, newObj) {
    return Object.entries(object).forEach(item => {
      if (Array.isArray(item[1])) {
        return (newObj[item[0]] = item[1]);
      } else if (typeof item[1] === "object") {
        return (newObj[item[0]] = stringifyNumbers(item[1]));
      } else if (typeof item[1] === "number") {
        return (newObj[item[0]] = item[1].toString());
      } else {
        return (newObj[item[0]] = item[1]);
      }
    });
  }

  helper(obj, stringifiedObject);
  return stringifiedObject;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj));
