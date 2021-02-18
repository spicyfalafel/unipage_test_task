export default class MySymbolModel {
    constructor(id, symb, isValid, typed) {
        this.id = id;
        this.symb = symb;
        this.isValid = isValid;
        this.typed = typed;
    }

    toString() {
        return `${this.id}:${this.symb}`;
    }
}
