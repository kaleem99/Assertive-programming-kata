const {morseCodeToLetters} = require("../src/convertToAlphabets");

describe("Function should convert alphabets to morse code", function(){
    it("should return the converted alphabets to morse code", function(){
        expect(morseCodeToLetters(".... .. / - .... . .-. . ")).toBe("HI THERE");
    });
});