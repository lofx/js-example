(function($){
  var source = [];
  // one.
  var obj_one = {};
  obj_one.label = 'label for object one';
  obj_one.value = 'value for object one';
  source.push(obj_one);
  
  // two.
  var obj_two = {'name1':'anna', name2: 'ec'};
  source.push(obj_two);
  
  // Factory.
  var action = function(){
    return 'burn up';
  };
  function Record1(){
    var list = new Object();
    list.name = 'Factory';
    list.age = '24';
    list.action = action();
    return list;
  }
  
  var x = Record1();
  source.push(x);
  
  // Constructor.
  var action2 = function(){
    return 'burning';
  };
  function Record2(){
    this.name = 'Constructor';
    this.age = '24';
    this.action = action2();
  }
  var y = new Record2();
  source.push(y);
  
  // Prototype.
  var action3 = function(){
    return 'fire';
  };
  function Record3(){};
  Record3.prototype.name = 'Prototype';
  Record3.prototype.age = '24';
  Record3.prototype.action = action3();
  var  z = new Record3();
  source.push(z);
  
  // Mix.
  // oops.
  function Record4(){
    this.age = '24';
    this.name = 'mix'; 
  };
  action4 = function(){
    return 'shit';
  };
//  why ?
//  Record4.prototype.action = function(){
//    return 'kill it';
//  };
  Record4.prototype.action = action4();
  
  var k = new Record4();
  source.push(k);
  
  // dynamic prototype.
  // oops.
  action5 = function(){
    return "damn you";
  };
  function Record5(){
    this.age = '24';
    this.name = 'dynamix prototype';
    if (typeof Record5._action === 'undefined') {
      Record5.prototype.action = action5();
      Record5._action = true;
    }
  }
  
  var g = new Record5();
  source.push(g);

  console.dir(source);
}(jQuery));