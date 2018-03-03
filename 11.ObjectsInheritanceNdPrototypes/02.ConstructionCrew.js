function solve(obj) {
    if (obj.handsShaking) {
        obj.bloodAlcoholLevel += obj.weight * obj.experience * 0.1;
        obj.handsShaking = false;
    }

    return obj
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));
console.log(solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
));