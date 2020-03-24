function collectStrings(obj) {
  const stringArray = [];

  function helper(object) {
    Object.values(object).forEach(item => {
      if (typeof item === "string") {
        stringArray.push(item);
      } else if (typeof item === "object") {
        return helper(item);
      } else {
        return;
      }
    });
  }

  helper(obj);
  return stringArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
