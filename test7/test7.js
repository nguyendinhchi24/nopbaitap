class Apple{
 constructor(){
    this.weight = 10
 }
}

class Human{
    constructor(name,sex,weight){
        this.name = name
        this.sex = sex
        this.weight= weight
    }
    speak(speak){
        console.log(this.name + ' say: '+ speak);
    }

    eat(apple){
        if(apple.weight>0){
            apple.weight -= 1
            this.weight += 1
            console.log("cân nặng hiện tại của Adam: " + this.weight);
            console.log("cân nặng hiện tại của quả táo là:"+ apple.weight);
        }else {
            if(this.name =="Adam"){
                let speak = prompt("ban thay tao the nao Adam?")
                Adam.speak(speak)
            }else {
                let speak = prompt("ban thay tao the nao Eva?")
                Eva.speak(speak)
            }
        }
    }
}

let apple = new Apple()


let Adam = new Human('Adam','Nam',70)
let Eva = new Human('Eva','Nu',50)

function adam(){
    Adam.eat(apple)
}
function eva(){
    Eva.eat(apple)
}