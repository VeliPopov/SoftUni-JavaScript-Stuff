function factorialDivision(num1, num2) {
    
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let factorialNum1 = factorial(num1);
    let factorialNum2 = factorial(num2);
    let division = factorialNum1 / factorialNum2;
    
    console.log(division.toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)