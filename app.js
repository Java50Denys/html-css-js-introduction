function myParseInt(str, base){
 base = base || 10;
let res = 0;
for(let i = 0; i< str.length; i++) {
    res = res*base + getCode(str[i]);
}
return res;
}
function getCode(symbol){
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10
}
let str1 = "ff";
let str2 = "123";
let str22 = "JAVA";
let str3 = "123m";
let str4 = "123.5";
let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 16);
num = parseInt(str2);
myNum = myParseInt(str2);
num = parseInt(str22, 36);
myNum = myParseInt(str22, 36);
num = parseInt(str3);
myNum = myParseInt(str3);
num = parseInt(str4);
myNum = myParseInt(str4); 
function myToString(number, base){
    let = res = '';
    number = Math.trunc(Math.abs(number));
    do{
        const digit = getSymbol(number % base,);
        res = symbol  + res;
        number = Math.trunc(number/ base);

    }while(number);
    return res;
}
function getSymbol(digit){
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10){
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }

}