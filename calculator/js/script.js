const close = document.getElementById('close')
const toggle = document.getElementById('toggle')
const menu = document.getElementById('menu')




toggle.addEventListener('click', function () { menu.classList.add('shownav') })

close.addEventListener('click', function () { menu.classList.remove('shownav') })
   



//function for displaying values
function dis(val)
{
document.getElementById("result").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
//function for clearing the display

function clr()
{
document.getElementById("result").value = ""
}

function runBack() {

    document.getElementById('')
}

function perc(val) {
    return (val/100) * val
   
} 



