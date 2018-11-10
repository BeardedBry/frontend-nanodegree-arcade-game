
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = randomNum(-600,-80);
    this.y = randomNum(0,3) * 100;

    // Sets the enemy speeds
    this.speed = randomNum(180,525);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
    // Movement Speed
    this.x += this.speed * dt;

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    function collision(){
        console.log('hit');
        player.x = 200;
        player.y = 400;
    }
    // Collision Detection
    let xDistance = this.x - player.x;
    let yDistance = this.y - player.y;

    if(xDistance < 60 && xDistance > -50){
        if(yDistance < 60 && yDistance > -50){
            collision()
        //console.log(this.x - player.x);
        };
    }

    // Respawn
    if(this.x > 500){
        this.x = randomNum(-700,-80);
        this.y = randomNum(0,3) * 100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y+30);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(dt) {
    if(player.y < 0){
        console.log('win');
    }    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y+25);
};

Player.prototype.handleInput = function(e) {
    switch(e) {
        case 'up':
            if(this.y > -100){this.y -= 100;};
            break;
        case 'down':
            if(this.y < 400){this.y += 100;};
            break;
        case 'left':
            if(this.x > 0){this.x -= 100;};
            break;
        case 'right':
            if(this.x < 400){this.x += 100;};
            break;
    }
    console.log('Player X: ' + player.x);
    console.log('Player Y: ' + player.y);
};

const p1 = new Player;
const enemy1 = new Enemy;
const enemy2 = new Enemy;
const enemy3 = new Enemy;
const enemy4 = new Enemy;
const enemy5 = new Enemy;
const enemy6 = new Enemy;
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = p1;
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Randomize function for movement. Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }