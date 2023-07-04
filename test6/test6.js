function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function() {
        this.left += this.speed;
        console.log('ok: ' + this.left);
      };
    
      this.moveLeft = function() {
        this.left -= this.speed;
        console.log('ok: ' + this.left);
      };
    
      this.moveUp = function() {
        this.top -= this.speed;
        console.log('ok: ' + this.top);
      };
    
      this.moveDown = function() {
        this.top += this.speed;
        console.log('ok: ' + this.top);
      };

    
}
let speed = +prompt("nhap vao toc do:")
var hero = new Hero('img/lon.png', 20, 30, 200,speed);

function start() {
  if (hero.left < window.innerWidth - hero.size && hero.top === 20) {
    hero.moveRight();
  } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  } else if (hero.left > 30 && hero.top >= window.innerHeight - hero.size) {
    hero.moveLeft();
  } else if (hero.left === 30 && hero.top > 20) {
    hero.moveUp();
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500);
}

start();