function solution() {
    let products = {
        'apple': {'carb': 1, 'flavour': 2},
        'coke': {'carb': 10, 'flavour': 20},
        'burger': {'carb': 5, 'flavour': 3, 'fat': 7},
        'omelet': {'protein': 5, 'flavour': 1, 'fat': 1},
        'cheverme': {'carb': 10, 'protein': 10, 'flavour': 10, 'fat': 10}
    };
    let stock = {'carb': 0, 'protein': 0, 'flavour': 0, 'fat': 0};

    let instructions = {
        restock: (microElement, qty) => {

            switch (microElement) {
                case 'carbohydrate':
                    stock.carb += Number(qty);
                    return 'Success';
                case 'flavour':
                    stock.flavour += Number(qty);
                    return 'Success';
                case 'protein':
                    stock.protein += Number(qty);
                    return 'Success';
                case 'fat':
                    stock.fat += Number(qty);
                    return 'Success';
            }
        },
        prepare: (recipe, qty) => {
            function checkStockNdReduce() {
                let amount = Number(qty);
                let reqProtein = products[recipe].protein * amount;
                let reqCarb = products[recipe].carb * amount;
                let reqFlav = products[recipe].flavour * amount;
                let reqFat = products[recipe].fat * amount;

                if (reqProtein > stock.protein) {
                    return 'Error: not enough protein in stock';
                } else if (reqCarb > stock.carb) {
                    return 'Error: not enough carbohydrate in stock';
                } else if (reqFat > stock.fat) {
                    return 'Error: not enough fat in stock';
                } else if (reqFlav > stock.flavour) {
                    return 'Error: not enough flavour in stock';
                }
                switch (recipe) {
                    case 'apple': {
                        stock.carb -= reqCarb;
                        stock.flavour -= reqFlav;
                        break;
                    }
                    case 'coke': {
                        stock.carb -= reqCarb;
                        stock.flavour -= reqFlav;
                        break;
                    }
                    case 'burger': {
                        stock.carb -= reqCarb;
                        stock.fat -= reqFat;
                        stock.flavour -= reqFlav;
                        break;
                    }
                    case 'omelet': {
                        stock.protein -= reqProtein;
                        stock.fat -= reqFat;
                        stock.flavour -= reqFlav;
                        break;
                    }
                    case 'cheverme': {
                        stock.protein -= reqProtein;
                        stock.carb -= reqCarb;
                        stock.fat -= reqFat;
                        stock.flavour -= reqFlav;
                        break;
                    }
                }
                return 'Success'
            }

            switch (recipe) {
                case 'apple': {
                    return checkStockNdReduce('apple');

                }
                case 'coke': {
                    return checkStockNdReduce('coke');
                }
                case 'burger': {
                    return checkStockNdReduce('burger');
                }
                case 'omelet': {
                    return checkStockNdReduce('omelet');
                }
                case 'cheverme': {
                    return checkStockNdReduce('cheverme');
                }
            }
        },
        report: () => {
            return `protein=${stock.protein} carbohydrate=${stock.carb} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
    return (input) => {
        input = input.split(' ');
        return instructions[input.shift()](...input);
        //WTF IS THIS ?!
    }
}

let result = solution();

let expectationPairs = [
    ['restock protein 100', 'Success'],
    ['restock carbohydrate 100', 'Success'],
    ['restock fat 100', 'Success'],
    ['restock flavour 100', 'Success'],
    ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
    ['prepare apple 2', 'Success'],
    ['report', 'protein=100 carbohydrate=98 fat=100 flavour=96'],
    ['prepare apple 1', 'Success'],
    ['report', 'protein=100 carbohydrate=97 fat=100 flavour=94']
];

for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    console.log(result(expectation[0]));
}