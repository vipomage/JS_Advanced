function solve(obj) {
    let output = {};
    
    let storage = {
        'small engine':{power:90,volume:1800},
        'normal engine':{power:120,volume:2400},
        'monster engine':{power:200,volume:3500}
    };
    
    let carriage = {
        'hatchback':{type:'hatchback',color:obj.color},
        'coupe':{type:'coupe',color:obj.color}
    };
    output.model = obj.model;
    if (obj.power>storage["small engine"].power) {
        if (obj.power>storage["normal engine"].power) {
            output.engine = storage["monster engine"];
        }else{
            output.engine = storage["normal engine"];
        }
    }else{
        output.engine = storage['small engine']
    }
    output.carriage = carriage[obj.carriage];
    let wheelSize;
    output.wheels = [];
    if (obj.wheelsize %2 === 0) {
            wheelSize = obj.wheelsize -1;
    }else{
        wheelSize = obj.wheelsize;
    }
    for (let i = 0; i < 4; i++) {
        output.wheels.push(wheelSize)

    }
    
    return output
}

console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));