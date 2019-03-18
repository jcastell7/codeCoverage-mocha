const chai = require('chai');
const should = chai.should();
const expect = chai.expect();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let Prueba = require("../prueba");
let suma = new Prueba(1, 2);

describe("Adding numbers", function () {
    it("should return 3 as result of the sum of 1 and 2", function () {
        suma.sum.should.equal(3);
    })
    it("should return 12 as result of the sum of 10 and 2", function () {
        suma.num1 = 10
        suma.sum.should.equal(12);
    })
    it("should return 12 as result of the sum of 10 and 2", function () {
        suma.num2 = 3
        suma.sum.should.equal(13);
    })
    it("should return error", function () {
        suma.sum.should.equal(11);
    })
    it("should return the first number", function () {
        suma.num1.should.equal(10);
    })
    it("should return the second number", function () {
        suma.num2.should.equal(3);
    })
    it("should return the max number", function () {
        suma.maxNumber().should.equal(10);
    })
    it("should say hello", function () {
        suma.sayHello().should.equal("Hi!");
    })
    it("should throw new error", function(){
        try {
            suma.num1 = "hi"
        } catch (e) {
            e.should.be.an('error')
        }
    })
    it("should return a promise",function(){
        (suma.num3=2).then((res)=>{
            res.should.not.be.an('error');
        },(err)=>{
            err.sould.be.an('error');
        }
        );
    })
    it("should throw new error", function(){
        expect(suma.setNum1("hi")).to.throw()
    })
    it("should throw an error", function () {
        suma.num2 = 1
        suma.sum.should.throw(Error);
    })
    it("should throw an error", function () {
        suma.num1 = 1
        suma.num2 = "ow"
        suma.sum.should.equal("1ow");
    })
})