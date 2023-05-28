let hourEl = document.getElementById("hours");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let ampnEl = document.getElementById("ampm");
let messageEl= document.getElementById("message");
let nightTime=document.getElementById("nightTime");
let form=document.forms['card4'];
// document
// clock logic
function time(callback){
    let d=new Date();
    let hour=d.getHours();
    minuteEl.innerHTML=d.getMinutes();
    secondEl.innerHTML=d.getSeconds();
    callback(hour);
    if(hour>=12) {
      hourEl.innerHTML=hour-12;
      ampnEl.innerHTML="PM";
    }else{
      ampnEl.innerHTML="AM";
      hourEl.innerHTML=hour;

    }
}
setInterval(()=>time(message),1000);
 
// changing the message
function message(time) {
    if(time>20 || time<=5){
        messageEl.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    }else if(time>5 && time<=11){
        messageEl.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    }else if(time>11 && time<=16){
        messageEl.innerHTML="LET'S HAVE SOME LUNCH !!";
    }else{
        messageEl.innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }

}
// dynamical adding the value on the schedule

 let setNightTime=form.menu4;
 let option=setNightTime.option;
 setNightTime.onchange= function(){
    let optionValue="";
     optionValue+="Night Time :"+this.value;
    nightTime.innerHTML=optionValue;
    
    console.log(optionValue);
 }
