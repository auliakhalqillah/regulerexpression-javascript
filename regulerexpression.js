// Using reguler expression
// Written by Aulia Khalqillah
// email : auliakhalqillah.mail@gmail.com
let input = 'inipassword123A';
var num = /[\d+]/g;
let lowercase = /[a-z]/g;
let uppercase = /[A-Z]/g;
var lengthinput = input.length;
var min = 8;
console.log("Length Password:",lengthinput);

checkpassnum = input.match(num);
checkpasslower = input.match(lowercase);
checkpassupper = input.match(uppercase);

console.log('CheckPassNum:', checkpassnum);
console.log('CheckPassLower:', checkpasslower);
console.log('CheckPassUpper:', checkpassupper);

if (lengthinput < min){
    console.log("Error: Password is to weak. At least has minimum 8 characters");
} else if (checkpassnum == null || checkpassnum.length < 3) {
    console.log("Error: Password at least has 3 digits number");
} else if (checkpassupper == null) {
    console.log("Error: Password at leas has 1 uppercase");
} else {
    console.log("Success!!!:", input);
}
