function curriedDot(vector1) {
  return function (vector2) {
    return vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);
  }
}

// Taking the dot product of any vector with [1, 1, 1]
// is equivalent to summing up the elements of the vector.
const sumElements = curriedDot([1, 1, 1]);

console.log(sumElements([1, 3, -5])); // -1
console.log(sumElements([4, -2, -1])); // 1
