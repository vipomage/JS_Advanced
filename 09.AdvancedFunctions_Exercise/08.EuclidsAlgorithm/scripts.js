function printGreatestCommonDivisor(firstNumber, secondNumber) {
    let temp = 0;

    while (secondNumber !== 0)
    {
        temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
    }

    return firstNumber;
}

console.log(printGreatestCommonDivisor(252, 105));