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
length = +prompt("nhập vào chiều dài: ")
width = +prompt("nhập vào chiều rộng: ")
const rectangle = new Rectangle(length, width)
rectangle.drawRectangle()



console.log("Diện tích:", rectangle.getArea())
console.log("Chu vi:", rectangle.getPerimeter())


