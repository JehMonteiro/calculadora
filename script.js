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

function percent(){
    calculate()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input / 100
}