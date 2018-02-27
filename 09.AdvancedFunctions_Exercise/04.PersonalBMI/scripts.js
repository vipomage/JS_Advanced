function result(name, age, weight, height) {
    let bmi = Math.round(weight / ((height / 100) * (height / 100)));
    let obj = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        },
        'BMI': bmi
    };
    if (bmi < 18.5) {
        obj.status = 'underweight';
    } else if (bmi < 25) {
        obj.status = 'normal';
    } else if (bmi < 30 && bmi >= 25) {
        obj.status = 'overweight';
    } else if (bmi >= 30) {
        obj.status = 'obese';
        obj.recommendation = 'admission required';
    }
    return obj;
}

//console.log(result('Peter', 29, 75, 182));
console.log(result('Honey Boo Boo', 9, 57, 137));