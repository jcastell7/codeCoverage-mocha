class Prueba {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get num1(){
        return this._num1;
    }
    set num1(number){
        if( typeof number!== 'number') {
            throw new Error('the data must be a number.');
          }
        this._num1 =number;
    }

    setNum1(number) {
        if( typeof number!== 'number') {
            throw new Error('the data must be a number.');
          }
        this._num1 =number;
    }

    get num2(){
        return this._num2;
    }
    set num2(number){
        if (number == 0) {
            console.log(":)")
        }
        if( typeof number!== 'number') {
            throw new Error('the data must be a number.');
          }
        this._num2 =number;
    }
    get sum (){
        return this.num1+this.num2;
    }
    maxNumber() {
        return Math.max(this.num1, this.num2)
    }
    sayHello() {
        return "Hi!"
    }
}


module.exports = Prueba