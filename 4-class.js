class Calculator {
    static sum(x, y) {
        return x + y;
    }
    sum2(x, y) {
        return x + y;
    }
    multipply(x, y) {
        return x * y;
    }
}

const CalculatorObject = new Calculator();
// console.log(Calculator.sum(1, 2));
// console.log(CalculatorObject.sum2(2, 3));

console.log(CalculatorObject.multipply(2, 3));