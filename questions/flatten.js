// Without using .flat(), create a function to flatten an array

function flatten(exArr = []) {
  if (!exArr) return [];

  const newArr = [];

  exArr.forEach((val) => {
    if (Array.isArray(val)) {
      const values = flatten(val);
      newArr.push(...values);
    } else {
      newArr.push(val);
    }
  })

  return newArr;
}
const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
console.log(flatten(exampleArray), 'newArray'); // [1,2,3,4,5,6,7,8,9,10]
