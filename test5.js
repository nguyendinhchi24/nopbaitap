class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    getCelsius() {
        return this.celsius;
    }

    getFahrenheit() {
        return (this.celsius * 9) / 5 + 32;
    }

    getKenvin() {
        return this.celsius + 273.15;
    }
}

while (true) {
    let celsius = +prompt("nhập vào giá trị nhiệt độ")
    if (celsius < -273) {
        console.log("giá trị nhiệt độ phải cao hơn -273 độ C");
    } else {
        const temperature = new Temperature(celsius);
        console.log('nhiệt độ F:', temperature.getFahrenheit());
        console.log('nhiệt độ kenvin:', temperature.getKenvin());
        break
    }
}



