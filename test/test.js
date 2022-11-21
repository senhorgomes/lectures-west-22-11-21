const barista = require("../barista");
const { expect, assert } = require("chai");


describe('Happy path', function () {
    it("provide the correct arguments, and returns a object", () => {
        //Create a variable based on the output
        const result = barista("Noor", "Large", ["Oatmilk"], true, ["Mocha"], false, 5);
    
        expect(result).to.be.an("object");
      });
    it("provide the correct arguments, we can access the name key of the drink", () => {
        //Create a variable based on the output
        const result = barista("Ilia", "Large", ["Extra Goat Milk"], true, ["Cali Crunchy Caramel Drizzle", "Mocha"], false, 5);
        
        // expect(result.name).to.equal("Ilia");
        assert.strictEqual(result.name, "Ilia");
        // assert.deepEqual to check for arrays
        // assert.strictEqual uses ===
        // assert.deepEqual(result.dairy, ["Almond Milk",""])
      });
    it("provide the correct arguments, we can access the syrups of the drinks", ()=>{
        const result = barista("Justin", "Medium", ["Almond Milk"], true, ["Cali Caramel", "Mocha"], true, 3)
        assert.deepEqual(result.syrups, ["Cali Caramel", "Mocha"])
    })
      
});
describe('Sad path', function () {
    xit("size needs to be a string", () => {
        //Create a variable based on the output
        // const fctThatWillThrowAnError = () => barista("Anne-Marie", true, [], true, [], true, 2);
        //We dont want to match the value type, we want an error to be spit out
        //It should expect result, to be an error
        // const expectedResult = "Wrong type, please double check your order";
        // expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
      
    xit("dairy needs to be an array", () => {
        //This is the happy path of the test
        //barista("Anne-Marie", "Small", [], true, [], true, 2)
        //Create a variable based on the output
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", 0, true, [], true, 2);
        //We dont want to match the value type, we want an error to be spit out
        //It should expect result, to be an error
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    xit("whipcream needs to be a boolean", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], 0, [], true, 2);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    xit("espressoShots needs to be an integer", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], true, [], true, []);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
    //By placing an x beside our test, mocha will skip the test
    xit("syrups needs to be an array", () => {
        const fctThatWillThrowAnError = () => barista("Anne-Marie", "Small", [], true, 0, true, 2);
        const expectedResult = "Wrong type, please double check your order";
        expect(fctThatWillThrowAnError).to.throw(expectedResult);
    });
      
});