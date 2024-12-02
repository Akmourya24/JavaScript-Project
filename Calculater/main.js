let allvalue = ''
let val1 = null;
let oprater;
function displayValue(elementId) {
    let bsa = document.getElementById(elementId).innerText;
    let vsa = document.getElementById("value").innerText;
    allvalue = vsa + bsa;

    document.getElementById("value").innerText = allvalue;

}

function setOprater(op) {
    oprater = op
    val1 = Number(allvalue)
    document.getElementById("valueop").innerText = op;
    document.getElementById("firstvalue").innerText = val1
    document.getElementById("value").innerText = '';

}

function caculateResult() {
    const val2 = Number(allvalue)
    document.getElementById("calculate").innerText = val2

    let result;
    switch (oprater) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        case '%':
            result = val1 % val2;
            break;
        default:
            result = Error;

    }
    document.getElementById('value').innerText = result;
    allvalue = result.toString()
}
document.getElementById("plus").addEventListener('click', () => setOprater('+'))
document.getElementById("minus").addEventListener('click', () => setOprater('-'))
document.getElementById("multiple").addEventListener('click', () => setOprater('*'))
document.getElementById("divison").addEventListener('click', () => setOprater('/'))
document.getElementById("reminder").addEventListener('click', () => setOprater('%'))

document.getElementById("equal").addEventListener('click', caculateResult)


function deletValue() {
    document.getElementById("value").innerText = 0;
    document.getElementById("valueop").innerText = ''
    document.getElementById("firstvalue").innerText = ''
    document.getElementById("calculate").innerText = ''
}




