function sum() {
    let itemPrices = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = 0;
    for (let i= 0;i<itemPrices.length-1;i++) {
        sum+= Number(itemPrices[i].textContent);
        console.log(sum);
    }
    document.getElementById('sum').textContent = sum;
}