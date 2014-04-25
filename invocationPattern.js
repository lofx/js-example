(function($){
    
  // There are four patterns of invocation in JavaScript: the method
  // invocation pattern, the function invocation pattern, the constructor invocation pattern, and the apply
  // invocation pattern. The patterns differ in how the bonus parameter this is initialized.
  
  /**
   * The Method Invocation Pattern.
   */
  var myObject = {
    value: 0,
    increment: function(inc){
      this.value += typeof inc === 'number' ? inc : 1;
    }
  };
  
  myObject.increment(1);
  document.writeln(myObject.value); // 1
  
  myObject.increment(2);
  document.writeln(myObject.value); // 3
  
  // Why the value will be keeped, cause it use 'this'.
  // The binding of this to the object happens at invocation time. This very late binding makes functions
  // that use this highly reusable. Methods that get their object context from this are called public methods.
  
  /**
   * The Function Invocation Pattern.
   */
  //  var sum = add(3, 4);
  // When a function is invoked with this pattern, this is bound to the global object.
  // A consequence of this error is that a method
  // cannot employ an inner function to help it do its work because the inner function does not share the method's
  // access to the object as its this is bound to the wrong value.
  // Use that.

// Got confuse.
//  myObject.double = function(num1, num2){
//    that = this;
//    var helper = function(num1, num2){
//      that.value = num1+num2;
//      return that.value;
//    };
//    helper();
//  };
  
  myObject.double = function(num1, num2){
    that = this;
    that.value = num1+num2;
    return that.value;
  };

  // Invoke double as a method.
  var res = myObject.double(3,3);
  document.writeln(res);
  
 /**
  * The Constructor Invocation Pattern.
  */
  var Quo = function (string) {
    this.status = string;
  };
  Quo.prototype.get_status = function (){
    return this.status;
  };
  var myQuo = new Quo("confused");
  document.writeln(myQuo.get_status()); // confused

  /**
   * The Apply Invocation Pattern.
   */

  var array = [3, 4];
  var sum = myObject.double.apply(null, array);
  
  var statusObject = { status:"A-OK"};
  var stats = Quo.prototype.get_status.apply(statusObject);

  document.writeln(sum);
  document.writeln(stats);
 


//  document.writeln(sum);


}(jQuery));



