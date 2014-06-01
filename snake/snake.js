(function($){
  $(function(){
  
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();

    var snake_array;
    var food;
    var score;
    var cw = 10;
    var d;
    
    $(document).keydown(function(e){
      var key = e.which;
      if(key == "37" && d != "right") d = "left";
      else if(key == "38" && d != "down") d = "up";
      else if(key == "39" && d != "left") d = "right";
      else if(key == "40" && d != "up") d = "down";
    });
  
    $(".button_up").click(function(){d = 'up';});
    $(".button_down").click(function(){d = 'down';});
    $(".button_left").click(function(){d = 'left';});
    $(".button_right").click(function(){d = 'right';});
    
    init();
    
    function init() {
      d = 'right';
      score = 0;
      create_snake();
      create_food();
      if(typeof game_loop != "undefined") clearInterval(game_loop);
		  game_loop = setInterval(paint, 1200);
    }

    function create_snake() {
      var snake_len = 5;
      snake_array = [];
      for(var i = snake_len-1; i>=0; i--) {
        snake_array.push({x:i, y:0});
      }
    }

    function create_food() {
      food = {
        x : Math.round(Math.random()*(w-cw)/cw),
        y : Math.round(Math.random()*(h-cw)/cw)
      };
    }

    function paint() {
      // Play area.
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "black";
      ctx.strokeRect(0, 0, w, h);

      var nx = snake_array[0].x;
      var ny = snake_array[0].y;

      // control snake.
      if (d == "right") nx ++;
      if (d == "left") nx --;
      if (d == "up") ny --;
      if (d == "down") ny ++;

      // Broke.
      if (nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || collision(nx, ny, snake_array)) {
        init();
        return;
      }
      
      // Eat food.
      if(nx == food.x && ny == food.y)
      {
        var tail = {x: nx, y: ny};
        score++;
        create_food();
      }
      else
      {
        // Pops out the last cell
        var tail = snake_array.pop();
        tail.x = nx; tail.y = ny;
      }
		  // Puts back the tail as the first cell
      // This pops and unshift make the snake move.
      // Not quiet understand.
		  snake_array.unshift(tail); 

      // Paint snake.
      for (var i = 0; i < snake_array.length; i++) {
        var c = snake_array[i];
        paint_cell(c.x, c.y, "snake");
      }

      // Paint food.
      paint_cell(food.x, food.y, "food");
      var score_text = "Score: " + score;
      ctx.fillText(score_text, 5, h-5);
    }
    
    // Snake eat itself.
    function collision(x, y, snake_array) {
      for (var s in snake_array) {
        if (x == snake_array[s].x || y == snake_array[s].y) {
          return false;
        }
      }
      return true;
    }

    function paint_cell(x, y, type) {
      if (type == 'snake') {
        ctx.fillStyle = "blue";
      }
      else if (type == 'food') {
        ctx.fillStyle = "red";
      }
      else if (type == 'tail') {
        ctx.fillStyle = "green";
      }
      
      ctx.fillRect(x*cw, y*cw, cw, cw);
      ctx.strokeStyle = "white";
      ctx.strokeRect(x*cw, y*cw, cw, cw);
    }
  });
}(jQuery));

