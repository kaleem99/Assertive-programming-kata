function morseCodeToLetters(str){
    str = str.replace("  ", " / " ).split(" ");
    var tableData = {
        "A" : ".-",   "K" : "-.-",  "U" : "..-",   "5" : ".....",  "," : "--..--", "$" : "...-..-",
        "B" : "-...", "L" : ".-..", "V" : "...-",  "6" : "-....",  "?" : "..--..", " " : "/",
        "C" : "-.-.", "M" : "--",   "W" : ".--",   "7" : "--...",  "(" : "-.--.",
        "D" : "-..",  "N" : "-.",   "X" : "-..-",  "8" : "---..",  ")" : "-.--.-",
        "E" : ".",    "O" : "---",  "Y" : "-.--",  "9" : "----.",  "-" : "-....-", 
        "F" : "..-.", "P" : ".--.", "Z" : "--..",  "0" : "-----",  "\"" : ".-..-.",
        "G" : "--.",  "Q" : "--.-", "1" : ".----", "/" : "-..-.",  "_" : "..--.-",
        "H" : "....", "R" : ".-.",  "2" : "..---", "+" : ".-.-.",  "'" : ".----.",
        "I" : "..",   "S" : "...",  "3" : "...--", "=" : "-...-",  ":" : "---...",
        "J" : ".---", "T" : "-",    "4" : "....-", "." : ".-.-.-", ";" : "-.-.-."
       };
    var output = "";
    for(var i = 0; i < str.length; i++)
    {
        for(var key in tableData)
        {
            if(tableData[key] == str[i])
            {
                output += key;
            }
            else{
                output;
            }
        }
    }
    return output;
}

console.log(morseCodeToLetters(".... .. / - .... . .-. ."));

module.exports = {morseCodeToLetters};