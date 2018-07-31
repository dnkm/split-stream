const canvas = document.querySelector("canvas");
const pen = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circle = new Circle(true);
circle.angle = 0;

let enemies = [];
for(let i=0; i<5; i++) {
    enemies[i] = new Circle(false, circle);
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        
    }
    if (event.key === 'w') {
        
    }
    if (event.key === 'd') {
        
    }
    if (event.key === 's') {
        
    }
    if (event.key === 'f') {
        
    }
});

setInterval(function() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    circle.draw();
    circle.move();

    for(let i=0; i<enemies.length; i++) {
        if (enemies[i].isDead) continue;
        enemies[i].draw();
        enemies[i].move();
        if (!enemies[i].isDead && enemies[i].collidedWith(circle)) {
            enemies[i].color ='red';
            enemies[i].draw();
            enemies[i].isDead = true;
            circle.radius ++;
            
            // enemies.forEach(en => console.log(i, en.isDead));
        }
    }
}, 1000/30);
