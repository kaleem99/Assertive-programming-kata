const {lettersToMorseCode} = require("../src/convertToMorseCode");

describe("Function should convert alphabets to morse code", function(){
    it("should return the converted alphabets to morse code", function(){
        expect(lettersToMorseCode("Hi there")).toBe(".... .. / - .... . .-. . ");
    });
});