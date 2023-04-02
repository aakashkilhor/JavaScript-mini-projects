const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const chars = "abcdefghijklmnopqrstuvwxyz"
const symbs = `~! @#$%^&*()_-+={[}]|\:;"'<,>.?/`
// console.log(chars.length)

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {

    let copyValue = resultEl.innerText;
    if(copyValue!==""){
        resultEl.style.backgroundColor = '#808080'
        setTimeout(() => {
            resultEl.style.backgroundColor = 'transparent'
        }, 4000);
    }
    navigator.clipboard.writeText(copyValue).then(() => {
        alert('successfully copied');
    })
    .catch(() => {
        alert('something went wrong');
    });
    
})

generateEl.addEventListener('click', () => {
    let genPass = generatePassword(randomFunc.lower,randomFunc.upper,randomFunc.number,randomFunc.symbol,lengthEl.value)
    console.log(genPass)
    if(genPass!==''){

        resultEl.innerText = genPass
    }
    else{
        resultEl.innerText= "Select kr noob"
    }
   
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    let goneInUpp = false;
    let goneInLow = false;
    let goneInNum = false;
    let goneInSym = false;

    for(let i = 0; i<length; i++){
        if(uppercaseEl.checked && !goneInUpp){
            password = password + upper()
            // goneInUpp = true;
            // goneInLow = false;
            // goneInNum = false;
            // goneInSym = false;
            // continue;
        }
        if(lowercaseEl.checked && !goneInLow){
            password = password + lower()
            // goneInLow = true;
            // goneInUpp = false;
            // goneInNum = false;
            // goneInSym = false;
            // continue;

        }
        if(numbersEl.checked && !goneInNum){
            password = password + number()
            // goneInNum = true;
            // goneInUpp = false;
            // goneInLow = false;
            // goneInSym = false;
            // continue;

        }
        if(symbolsEl.checked && !goneInSym){
            password = password + symbol()
            // goneInSym = true;
            // goneInUpp = false;
            // goneInLow = false;
            // goneInNum = false;
            // continue;

        }
        if(password.length>=length){
            break;
        }

    }

    return password
    
}

function getRandomLower() {
    return chars[Math.floor(Math.random()*26)].toLowerCase()
}

function getRandomUpper() {
    return chars[Math.floor(Math.random()*26)].toUpperCase()


}

function getRandomNumber() {
return Math.floor(Math.random()*10)

}

function getRandomSymbol() {
    return symbs[Math.floor(Math.random()*31)]


}
