var result = document.getElementById('#start')
var sec = sec+1
function start()
{
    result.innerHTML="start"
    sec++
    setInterval (start,10)
}