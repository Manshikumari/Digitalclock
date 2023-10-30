

var hr = 0;
var min =0;
var sec = 0;

var time=false;

function start()
{
    time=true;
    digiwatch();
}
function stop()
{
    time = false;
}
function Reset()
{
    time = false;
}
function digiwatch()
{
  if(time == true)
  { 
    sec = sec +1;
    document.getElementById("sec").innerHTML = sec;
   setTimeout ( "digiwatch()" , 10)
  }

}
