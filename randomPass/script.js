
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numSet = "1234567890";
const symSet = "`~!@#$%^&*";

const pass = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");


function getRandomData(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];

}


function passwordGenerator(password = "") {
    if(upper.checked){
        password += getRandomData(upperSet)
    }
    if(lower.checked){
        password +=getRandomData(lowerSet)
    }
    if(number.checked){
        password +=getRandomData(numSet)
    }
    if(symbol.checked){
        password +=getRandomData(symSet)
    }
    if(password.length < totalChar.value){
        return passwordGenerator(password)
    }
    console.log(password)
    passBox.innerText = truncateString(password, totalChar.value);
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        passwordGenerator();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}