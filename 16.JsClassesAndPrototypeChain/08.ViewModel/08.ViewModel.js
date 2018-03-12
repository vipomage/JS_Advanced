class TextBox{
    constructor(selector,regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);
        $(this._elements).on('input',(e)=>{
            this._value = $(e.target).val();
            this.updateElements();
        })
    }
    get value(){
        return this._value;
    }
    set value(newValue){
        this._value = newValue;
        this.updateElements();
    }
    get elements(){
        return this._elements;
    }
    updateElements(){
        for (let element of this._elements) {
            $(element).val(this._value)
        }
    }
    isValid(){
        return  !this._invalidSymbols.test(this._value)
    }
}
let textbox = new TextBox('.textbox',/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
inputs.on('input',()=>{
    console.log(textbox.value);
})