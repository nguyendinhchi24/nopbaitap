class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

}


let circle = new Circle(2, 'red');
let radius = circle.getRadius(); // 2
let area = circle.getArea(); // 12.566370614359172
console.log("radius: " + radius + "; area: " + area);
