

var hr = 0;
var mint =0;
var sec = 0;
var count = 0;
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
function reset()
{
    time = false;
   hr=0;
   mint=0;
   sec=0;
   count=0;
   document.getElementById("hr").innerHTML = "00";
   document.getElementById("mint").innerHTML = "00";
   document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";

}
function digiwatch()
{
  if(time == true)
  { 
    count = count+1;
     if(count == 100)
     {
       sec = sec + 1;
       count = 0;

     }
    
     if(sec == 60)
     {
        mint = mint+1;
        sec  = 0 ;

     }
     if(mint == 60 )
     {
       hr = hr+1 ;
       mint = 0;
       sec = 0;
     }

     document.getElementById("hr").innerHTML = hr;
     document.getElementById("mint").innerHTML = mint;
     document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
   setTimeout ( "digiwatch()" , 10)
  }
}
