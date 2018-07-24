const COLORS = [
    'salmon', 'skyblue', 'gold', 'gray', 'lightgreen'
];

class Circle {
    
    constructor(isPlayer, target) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 10;
        if (isPlayer) {
            this.color = 'pink';
        } else {
            let randomIndex = 
                    Math.floor(Math.random() * COLORS.length);
            this.color = COLORS[randomIndex];
        }
            
        this.velX = 0;
        this.velY = 0;
        this.isPlayer = isPlayer;
        this.target = target;
        this.isDead = false;
    }
    move() {
        this.x += this.velX;
        this.y += this.velY;

        if (!this.isPlayer) {
            if (this.x < this.target.x) {
                this.x += 0.5;
            } else {
                this.x -= 0.5;
            }
            if (this.y < this.target.y) {
                this.y += 0.5;
            } else {
                this.y -= 0.5;
            }
        }
    }
    draw() {
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        pen.fillStyle = this.color;
        pen.fill();
    }
    collidedWith(other) {
        let realDistanceSq = Math.pow(this.x - other.x, 2) +
                             Math.pow(this.y - other.y, 2);
        let minDistanceSq = Math.pow(this.radius + other.radius, 2);

        return realDistanceSq <= minDistanceSq;
    }
}
