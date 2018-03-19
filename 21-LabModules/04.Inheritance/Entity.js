class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Cannot instantiate directly')
        }
        this.name = name;
    }
}

module.exports = Entity;