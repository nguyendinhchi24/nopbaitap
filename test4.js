class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }

    getArea() {
        return this.length * this.width
    }

    getPerimeter() {
        return 2 * (this.length + this.width)
    }

    drawRectangle() {
        const canvas = document.getElementById("myCanvas")
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.rect(0, 0, this.length, this.width)
        ctx.stroke()
    }
}

const rectangle = new Rectangle(500, 500)
rectangle.drawRectangle()

rectangle.length = +prompt("nhập vào chiều dài: ")
rectangle.width = +prompt("nhập vào chiều rộng: ")

console.log("Diện tích:", rectangle.getArea())
console.log("Chu vi:", rectangle.getPerimeter())


