(function($){

  var data = [4, 8, 15, 16, 23, 42];
  
// not work.
//  Array.method('reduce', function (f, value) {
//    var i;
//    for (i = 0; i < this.length; i += 1) {
//      value = f(this[i], value);
//    }
//    return value;
//  });

//  var k, s = 0;
//  for (k = 0; k < data.length; k++) {
//    s += data[k];
//  }
//  document.writeln('sum ' + s);  
   
  data.reduce = function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
      value = f(this[i], value);
    }
    return value;
  };

  var add = function (a, b) {
    return a + b;
  };
  
  var mult = function (a, b) {
    return a * b;
  };
  
  var sum = data.reduce(add, 0); // sum is 108
  var product = data.reduce(mult, 1); // product is 7418880

  document.writeln(sum);
  document.writeln(product);

}(jQuery));


