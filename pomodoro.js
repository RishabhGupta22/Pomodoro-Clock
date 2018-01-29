$(document).ready(function(){
  var count1=parseInt($("#stime").html());
  var count2=parseInt($("#btime").html());
  var count3=parseInt($("#secs").html());
  var buzzer1=$("#alarm1")[0];
  var buzzer2=$("#alarm2")[0];
  console.log(count3);
  var counter1=0;
  var breaktime=0;
  //the plus minus buttons adding or subtraction on the pomodoro clock timer
  $("#sminus").click(function(){
    if(count1>1){
      count1-=1;
      $("#stime").html(count1);
      $("#mins").html(count1);
    } 
  });
   $("#splus").click(function(){
    if(count1>=1){
      count1+=1;
      $("#stime").html(count1);
      $("#mins").html(count1);
    }
   });
   $("#bminus").click(function(){
    if(count2>5){
      count2-=5;
      $("#btime").html(count2);
    }
     
  });
   $("#bplus").click(function(){
    if(count2>1){
      count2+=5;
      $("#btime").html(count2);
    }
  });
  
 //clicking the start button while disabling it until reset button is not clicked or the timer is run to its full session 
  $("#start").click(function(){
    /*var change=document.getElementById("start");
   if(change.innerHTML=="Start"){
     change.innerHTML="Pause";
   }
   else{
     change.innerHTML="Start";
   } 
   */
    $("#description").show();
//disable the start button including + -    
    document.getElementById("start").disabled = true;
    var disable1 = document.getElementById("splus");
    disable1.classList.add("disabled");
    var disable2 = document.getElementById("sminus");
disable2.classList.add("disabled");
    var disable3 = document.getElementById("bplus");
disable3.classList.add("disabled");
    var disable4 = document.getElementById("bminus");
disable4.classList.add("disabled");
    
   counter1=setInterval(timer,1000);
   var scount=count1*60; 
    var bcount=count2*60;
   function timer(){
     $("#description").html("Session Time");
     scount-=1;
    if(scount===0){ 
      buzzer1.play();
      clearInterval(counter1);
      breaktime=setInterval(breakTimer,1000);
    } 
      
     if(scount%60>=10){
        $("#mins").html(Math.floor(scount/60));
       $("#secs").html(scount%60);
        }
      else{
        $("#mins").html(Math.floor(scount/60));
        $("#secs").html("0"+scount%60);
      } 
     
     function breakTimer(){
       
       $("#description").html("Break Time");
       bcount-=1;
    if(bcount===0){
      buzzer2.play();
      clearInterval(breaktime);
    }  
        
      if(bcount%60>=10){
        $("#mins").html(Math.floor(bcount/60));
       $("#secs").html(bcount%60);
        }
      else{
        $("#mins").html(Math.floor(bcount/60));
        $("#secs").html("0"+bcount%60);
      }
       
      }
    }
 });
  
  //the reset button which also disables the start button
  $("#reset").click(function(){
    count1=25;
    count2=5;
    $("#mins").html(count1);
    $("#secs").html(count3+"0");
     $("#stime").html(count1);
     $("#btime").html(count2);
    $("#description").hide();
    document.getElementById("start").disabled = false;
    var disable1 = document.getElementById("splus");
    disable1.classList.remove("disabled");
    var disable2 = document.getElementById("sminus");
disable2.classList.remove("disabled");
    var disable3 = document.getElementById("bplus");
disable3.classList.remove("disabled");
    var disable4 = document.getElementById("bminus");
disable4.classList.remove("disabled");
//to stop the timer    
     clearInterval(counter1);
     clearInterval(breaktime);
  });
  
});