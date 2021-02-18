export default class MySymbolModel {
    constructor(id, symb, isValid, typed) {
        this.id = id;
        this.symb = symb;
        this.isValid = isValid;
        this.typed = typed;
    }

    current = false;

    toString() {
        return `${this.id}:${this.symb}`;
    }

    makeCurrent() {
        this.isValid = false;
        this.current = true;
        this.typed = false;
    }

    eraseSymbol() {
        this.isValid = false;
        this.current = false;
        this.typed = false;
    }
}
