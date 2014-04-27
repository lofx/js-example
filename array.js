(function($){
  var myArray = [];
  myArray.length;// 0
  myArray[0] = 1; // 1
  myArray[1] = 'here'; // 2
  document.writeln(myArray.length);
  myArray[1000000] = true;
  myArray.length;// 1000001
  document.writeln(myArray.length);
  
  var numbers = ['zero', 'one', 'two', 'three'];
  delete numbers[0];
  document.writeln(numbers); //,one,two,three
  document.writeln(numbers.length); // 4 this delete make a hole in the array.
  
  numbers.splice(2,1); // delete the order 2 and delete 1. 
  document.writeln(numbers); //,one,three  
  document.writeln(numbers.length); // 3
  document.writeln(numbers.indexOf('two')); // -1
  document.writeln(numbers.indexOf('three')); // 2  find the key of an array.
  // there is a hole before the one and three moved from 3 to 2, array start from 0, so it is 2.
  
  
//  The rule is simple: when the property names are small sequential integers, you should use
//an array. Otherwise, use an object.
// The typeof operator reports that the type of an array is 'object', which isn't very helpful.

/**
 * Way to detect an array.
 */
  var is_array = function (value) {
    return value &&
      typeof value === 'object' &&
      typeof value.length === 'number' &&
      typeof value.splice === 'function' &&
      !(value.propertyIsEnumerable('length'));
  };
  
  /**
   * Dimensions.
   */ 
  var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  matrix[2][1]; // 7

  // Bad.
//  for (i = 0; i < n; i += 1) {
//    my_array[i] = [];
//  }
  // Note: Array.dim(n, []) will not work here.
  // Each element would get a reference to the same
  // array, which would be very bad.
  
  // Not quite understand.
  var m, n;
  Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
      a = [];
      for (j = 0; j < n; j += 1) {
       a[j] = 0;
      }
      mat[i] = a;
    }
    return mat;
  };
  
  // Make a 4 * 4 matrix filled with zeros.
  var myMatrix = Array.matrix(4, 4, 0);
  document.writeln('matrix-- ' + myMatrix[3][3]);
  // 0
  // Method to make an identity matrix.
  Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
      mat[i][i] = 1;
    }
    return mat;
  };
  myMatrix = Array.identity(4);
  document.writeln('\\\matrix-- ' + myMatrix[3][3]);

}(jQuery));