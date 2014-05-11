(function($){
  var snake = {};
  snake.len = 18;
  snake.headPX = 0;
  snake.headPY = 0;
  var food = {};
  food.num = 0;
  food.PX = 0;
  food.PY = 0;
  
  // 用毛obj，好像没啥大的价值。
  $(function(){
    $(".button_up").click(function(){moveNext(snake, food, "up");});
    $(".button_down").click(function(){moveNext(snake, food, "down");});
    $(".button_left").click(function(){moveNext(snake, food, "left");});
    $(".button_right").click(function(){moveNext(snake, food, "right");});

    snake.headPX = $("#snake").position.top;
    snake.headPY = $("#snake").position.left;
    
    food.PX = $("#food").position.top;
    food.PY = $("#food").position.left;
    
    console.log(snake);
    console.log(food);
    
    // 没法动态获得他们的坐标，tmd.
//    $("#snake").append('<div class="food"></div>');
//    $("#snake").append('<div class="snake_new"></div>');
//    $("#snake").append('<div class="snake_new"></div>');

    $(document).keydown(function(evt){
      evt = evt ||window.event;
      var key=evt.which||evt.keyCode;
      switch(key)
      {
        case 37:moveNext(snake, food, "left"); break;
        case 38:moveNext(snake, food, "up");break;
        case 39:moveNext(snake, food, "right");break;
        case 40:moveNext(snake, food, "down"); break;
      }
    });
  });

  // Snake move next.
  function moveNext(snake, food, direction) {
    x = 0;
    y = 0;
    switch(direction) {
      case 'left':
        x = -20;
        y = 0;
        eat(snake, food);
        $("#snake").animate({left: "+=" + x + "px" }, 1000);
        break;
      case 'right':
        x = 20;
        y = 0;
        eat(snake, food);
        $("#snake").animate({left: "+=" + x + "px" }, 1000);
        break;
      case 'up':
        x = 0;
        y = -20;
        eat(snake, food);
        $("#snake").animate({top: "+=" + y + "px" }, 1000);
        break;
      case 'down':
        x = 0;
        y = 20;
        eat(snake, food);
        $("#snake").animate({top: "+=" + y + "px" }, 1000);
        break;
    }
    
    // 处理一下边界；
  }
 
  // Snake eat food.
  function eat(snake, food) {
    console.log(snake);
    console.log(food);
    $("snake_new").css('left', food.PX);
    $("snake_new").css('top', food.PY);
    if (snake.headPX > food.PX) {
      $("#snake").append('<div class="snake_new"></div>');
      $("#food").remove();
    }
    if (snake.headPY > food.PY) {
      $("#snake").append('<div class="snake_new"></div>');
      $("#food").remove();
    }
  }
  
})(jQuery);


