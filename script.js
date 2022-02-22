function insertValues(num){
    const input = document.getElementById('input-value').value
     document.getElementById('input-value').value = input + num
}  

function calculate(){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)

}

function clearInput(){
    document.getElementById('input-value').value = ""
}

function invertValues(){
    calculate()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1
}

function percentCalc() {
    if (document.getElementById('input-value').value == '') {
        document.getElementById('input-value').value = '0'
    } else {
        calculate()

        resultPercentCalc = document.getElementById('input-value').value / 100
        document.getElementById('input-value').value = resultPercentCalc
    }
}