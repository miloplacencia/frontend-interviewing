// Create a function that takes a string and returns a
// new string with duplicates removed

function removeDuplicates(string = '') {
  if (!string) return '';

  return Array.from(new Set(string.split(' '))).join(' ');
}


const str = 'This is is a test test string';
console.log(removeDuplicates(str)); // 'This is a test string'