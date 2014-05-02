(function($){
  
  /**
   * Pseudo-classical inheritance (through prototyping):
   */
  function Base(){
    this.color = 'Base color //';
    this.age = '2';
  }
  
  Base.prototype.name = function(){
    return this.name = 'Base name //';
  };
  
  function Sub(){ 
//    this.color = 'red';
  }
  
  Sub.prototype = new Base(); // this is inherit ?
  Sub.prototype.showColor = function(){
    return this.color;
  };
  
  var instance = new Sub();
  var subColor = instance.showColor();
  var subName = instance.name();
  document.writeln(subColor); // Base color
  document.writeln(subName); // Base name

  /**
   * Function application or "constructor chaining":
   */
  function Sub2() {
    Base.apply(this, arguments);
//    this.color = 'green';
  }
  var instance2 = new Sub2();
  document.writeln(instance2.color); // Base color
  document.writeln(instance2.hasOwnProperty('age')); // true;
  document.writeln(instance2.hasOwnProperty('name')); // false; ?
  
  /**
   * Parasitic inheritance or Power Constructors:
   */
  function createBase() {
    var obj = {};
    obj.name = 'createBase';
    obj.color = 'createBaseColor';
    return obj;
  }
  function createSub(){
    var sub = createBase(); // no new ?
    sub.age = '3';
    return sub;
  }
  var instance3 = new createSub();
  document.writeln(instance3.name);
  
  /**
   * ECMAScript 5th Ed. Object.create method:
   */
  if (typeof Object.create !== 'function') {
    Object.create = function(o){
      function F() {};
      F.prototype = o;
      return new F();
    };
  }
  
  var superInstance = {
    member1 : 'superMember1',
    member2 : 'superMember2'
  };
  var superInstance = Object.create(superInstance);
  superInstance.member3 = 'superMember3';
  document.writeln(superInstance.member1);

})(jQuery);


