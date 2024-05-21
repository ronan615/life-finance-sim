

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  var percentchange=Math.floor(Math.random() * 0.03);
  var randstock = setInterval(stocktick, 1000);
  clearInterval(randstock)
  var totalunrealised=document.getElementById("investstats").value
  var pricefor1click=getCookie("pricefor1click")
  
  pricefor1click=parseInt(pricefor1click)
  if (Number.isNaN(pricefor1click)) {
      pricefor1click = 50
      document.getElementById("pricefor1click").innerHTML = pricefor1click;
  }
  var pricefor10click=getCookie("pricefor10click")
  pricefor10click=parseInt(pricefor10click)
  if (Number.isNaN(pricefor10click)) {
      pricefor10click = 500
      document.getElementById("pricefor10click").innerHTML = pricefor10click;
  }
  var pricefor100click=getCookie("pricefor100click")
  pricefor100click=parseInt(pricefor100click)
  if (Number.isNaN(pricefor100click)) {
      pricefor100click = 5000
      document.getElementById("pricefor100click").innerHTML = pricefor100click;
  }
  var pricefor1000click=getCookie("pricefor1000click")
  pricefor1000click=parseInt(pricefor1000click)
  if (Number.isNaN(pricefor1000click)) {
      pricefor1000click = 50000
      document.getElementById("pricefor1000click").innerHTML = pricefor1000click;
  }
  var pricefor1clickauto=getCookie("pricefor1clickauto")
  pricefor1clickauto=parseInt(pricefor1clickauto)
  if (Number.isNaN(pricefor1clickauto)) {
      pricefor1clickauto = 20
      document.getElementById("pricefor1clickauto").innerHTML = pricefor1clickauto;
  }
  var pricefor10clickauto=getCookie("pricefor10clickauto")
  pricefor10clickauto=parseInt(pricefor10clickauto)
  if (Number.isNaN(pricefor10clickauto)) {
      pricefor10clickauto = 200
      document.getElementById("pricefor10clickauto").innerHTML = pricefor10clickauto;
  }
  var pricefor100clickauto=getCookie("pricefor100clickauto")
  pricefor100clickauto=parseInt(pricefor100clickauto)
  if (Number.isNaN(pricefor100clickauto)) {
      pricefor100clickauto = 2000
      document.getElementById("pricefor100clickauto").innerHTML = pricefor100clickauto;
  }
  var pricefor1000clickauto=getCookie("pricefor1000clickauto")
  pricefor1000clickauto=parseInt(pricefor1000clickauto)
  if (Number.isNaN(pricefor1000clickauto)) {
      pricefor1000clickauto = 20000
      document.getElementById("pricefor1000clickauto").innerHTML = pricefor1000clickauto;
  }
  var pricefor100000clickauto=getCookie("pricefor100000clickauto")
  pricefor100000clickauto=parseInt(pricefor100000clickauto)
  if (Number.isNaN(pricefor100000clickauto)) {
      pricefor100000clickauto = 2000000
      document.getElementById("pricefor100000clickauto").innerHTML = pricefor100000clickauto;
  }
  var money = getCookie("money")
  money = parseInt(money)
  
  var perclick = getCookie("clickperclick")
  perclick = parseInt(perclick)
  if (Number.isNaN(money)) {
      money = 700
  }
  var tutorial = getCookie("tutorial")
  tutorial = parseInt(tutorial)
  if (Number.isNaN(tutorial)) {
      tutorial = 0
  }
  var perclickauto = getCookie("perclickauto")
  perclickauto = parseInt(perclickauto)
  if (Number.isNaN(perclickauto)) {
      perclickauto = 0
       
  }
  
  if (Number.isNaN(perclick)) {
      perclick = 1
  }
  
  setInterval(autoclick, 1000);
  goalcheckinterval=setInterval(goalcheck, 1000);
  
  function wipedata(){
  document.cookie="money="-money
  document.cookie="pricefor1click="-pricefor1click
  document.cookie="pricefor10click="-pricefor10click
  document.cookie="pricefor100click="-pricefor100click
  document.cookie="pricefor1000click="-pricefor1000click
  document.cookie="pricefor1clickauto="-pricefor1clickauto
  document.cookie="pricefor10clickauto="-pricefor10clickauto
  document.cookie="pricefor1000clickauto="-pricefor1000clickauto
  money=money-money
  money=+700
  perclickauto=perclickauto-perclickauto
  pricefor10click=pricefor10click-pricefor10click+500
  pricefor100click=pricefor100click-pricefor100click+5000
  pricefor1000click=pricefor1000click-pricefor1000click+50000
  pricefor1click=pricefor1click-pricefor1click+50
  pricefor1000clickauto=pricefor1000clickauto-pricefor1000clickauto+3000
  pricefor1clickauto=pricefor1clickauto-pricefor1clickauto+30
  pricefor10clickauto=pricefor10clickauto-pricefor10clickauto+300
  perclick=perclick-perclick+1
  document.getElementById("moneyid").innerHTML = money;
      document.getElementById("pricefor1click").innerHTML = pricefor1click;
      document.getElementById("pricefor10click").innerHTML = pricefor10click;
      document.getElementById("pricefor1clickauto").innerHTML = pricefor1clickauto;
      document.getElementById("pricefor10clickauto").innerHTML = pricefor10clickauto;
      document.getElementById("pricefor100clickauto").innerHTML = pricefor100clickauto;
      document.getElementById("pricefor1000clickauto").innerHTML = pricefor1000clickauto;
      document.getElementById("pricefor100click").innerHTML = pricefor100click;
      document.getElementById("pricefor1000click").innerHTML = pricefor1000click;
   
  
  }
  
  function addstartercash(){
      money=money+0
      document.getElementById("moneyid").innerHTML = money;
      //alert("startercash added")
      document.cookie="money="+money
  }
  function addcheatcash(){
      alert("cheatcash added")
      var money25add=money/4
      money25add=parseInt(money25add)
      money=money+money25add
      document.getElementById("moneyid").innerHTML = money;
      alert("cheatcash added")
      document.cookie="money="+money
      }
  var userid=getCookie("userid")
  function generateuserid(){
      userid=parseInt(userid)
      if (Number.isNaN(userid)) {
          userid=Math.floor(Math.random()*1000001)
          document.getElementById("userid").innerHTML = userid;
          document.cookie="userid="+userid
          }
      document.getElementById("userid").innerHTML = userid;
  }
  function generatenewuserid(){
      if (confirm("by generating a new user id,this will wipe all your data") == true) {
      wipedata()
      userid=Math.floor(Math.random()*1000001)
      document.getElementById("userid").innerHTML = userid;
      document.cookie="userid="+userid
  }   else{
      document.getElementById("userid").innerHTML = userid;
  }
  }
  function useridforme(){
      ///////////////////////////////
      //this is used to give me vip//
      //its meant to be ran in eurda/
      ///////////////////////////////
      userid=1
      time=time-time
      document.getElementById("time").innerHTML = time
      document.getElementById("userid").innerHTML = userid;
      document.cookie="userid="+userid
  }
  
  if(userid==1){
      //money=19999999999
      
      //wipedata()
      //perclickauto=694200000
      document.getElementById("perclickauto").innerHTML = perclickauto;
      
      //alert("NaN/10 ")
      document.getElementById("moneyid").innerHTML = money;
      document.cookie="money="+money
  }
  
  var buttonearnblinkoffvar=0
  var buttonearnblinkonvar=0
  var add1clickbtnonvar=0
  var add1clickbtnoffvar=0
  var add1clickautobtnonvar=0
  var add1clickautobtnoffvar=0
  var buttonearn = document.getElementById("click_button");
  function checkfortutorial(){
      if (tutorial==0){
          alert("welcome to life finance sim, This game was made by ronan and brady.");
          alert("click the blinking button to earn money")
          buttonearnblinkoffvar=setInterval(buttonearnblinkoff, 500)
          buttonearnblinkonvar=setInterval(buttonearnblinkon, 1000)
          
          buttonearn.addEventListener("click", buttonearnblinkonstop)
      }
  }
  function buttonearnblinkon(){
      document.getElementById("click_button").style.background='#383731'
  }
  function buttonearnblinkoff(){
      document.getElementById("click_button").style.background='#f20505';
  }
  var add1clickbutton = document.getElementById("add1click")
  function buttonearnblinkonstop(){
      buttonearn.removeEventListener("click", buttonearnblinkonstop)
  document.getElementById("click_button").style.background='#383731'
      clearInterval(buttonearnblinkoffvar)
      clearInterval(buttonearnblinkonvar)
      alert("Each time you click the button, you only get 1. Click the blinking button to increase it to 2")
      add1clickbtnonvar=setInterval(add1clickbtnon, 500)
      add1clickbtnoffvar=setInterval(add1clickbtnoff, 1000)
      add1clickbutton.addEventListener("click", add1clickbtnonstop)
      
  }
  var add1clickautobutton = document.getElementById("add1clickauto");
  function add1clickbtnonstop(){
      add1clickbutton.removeEventListener("click", add1clickbtnonstop)
      clearInterval(add1clickbtnonvar)
      clearInterval(add1clickbtnoffvar)
      document.getElementById("add1click").style.background='#383731'
      alert("you can also buy idle clicks. Scroll down and click the blinking button")
      add1clickautobtnonvar=setInterval(add1clickbtnautoon, 500)
      add1clickautobtnoffvar=setInterval(add1clickbtnautooff, 1000)
      
      add1clickautobutton.addEventListener("click", add1clickbtnautoonstop)
      
  }
  function add1clickbtnautoonstop(){
      add1clickautobutton.removeEventListener("click", add1clickbtnautoonstop)
      clearInterval(add1clickautobtnonvar)
      clearInterval(add1clickautobtnoffvar) 
      document.getElementById("add1clickauto").style.background='#383731'
      alert("Yay, now you know how to play the game. Have fun!")
      tutorial=1
      document.cookie="tutorial="+tutorial
      window.reload()
  }
  function add1clickbtnautoon(){
      document.getElementById("add1clickauto").style.background='#f20505';
  }
  function add1clickbtnautooff(){
      document.getElementById("add1clickauto").style.background='#383731'
  }
  function add1clickbtnon(){
      document.getElementById("add1click").style.background='#f20505';
  }
  function add1clickbtnoff(){
      document.getElementById("add1click").style.background='#383731'
  }
  function gameinit(){
      document.getElementById("moneyid").innerHTML = money;
      document.getElementById("pricefor1click").innerHTML = pricefor1click;
      document.getElementById("pricefor10click").innerHTML = pricefor10click;
      document.getElementById("pricefor1clickauto").innerHTML = pricefor1clickauto;
      document.getElementById("pricefor10clickauto").innerHTML = pricefor10clickauto;
      document.getElementById("pricefor100clickauto").innerHTML = pricefor100clickauto;
      document.getElementById("pricefor1000clickauto").innerHTML = pricefor1000clickauto;
      document.getElementById("pricefor100000clickauto").innerHTML = pricefor100000clickauto;
      document.getElementById("pricefor100click").innerHTML = pricefor100click;
      document.getElementById("pricefor1000click").innerHTML = pricefor1000click;
      //wipedata()
      //alert("wiped data")
      addstartercash()
      //alert("wiped data: take that huh Ur game loves mee so much ")
      generateuserid()
      checkfortutorial()
          
      
  }
  gameinit()
  function click_earn(){
      money = money+perclick
      //alert(money)
      document.cookie="money="+money
      document.getElementById("moneyid").innerHTML = money;
      //alert(money)
      
  }
  
  setInterval(totalplaytime,1000)
  function totalplaytime(){
      var time=getCookie("timeplayed")
      time=parseInt(time)
      if (Number.isNaN(time)) {
      time = 0
      document.getElementById("time").innerHTML = time/60;
      document.cookie="timeplayed="+time
  }
  time=time+1
  document.getElementById("time").innerHTML = time
      document.cookie="timeplayed="+time
  }
  
  function checkadd1click(){
      if (money>pricefor1click-1) { 
          money=money-pricefor1click;
          pricefor1click=pricefor1click+20
          perclick=perclick+1;
          document.cookie="pricefor1click="+ pricefor1click
          document.getElementById("pricefor1click").innerHTML = pricefor1click;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="clickperclick="+ perclick
      }
          else{
              alert("no funds")
          
          
      }
  }
  function checkadd10click(){
      if (money>pricefor10click-1) { 
          money=money-pricefor10click;
          pricefor10click=pricefor10click+200
          perclick=perclick+10;
          document.cookie="pricefor10click="+ pricefor10click
          document.getElementById("pricefor10click").innerHTML = pricefor10click;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="clickperclick="+ perclick
      }
          else{ 
              alert("no funds")
          document.cookie="money="+ money
          
      }
  }
  function checkadd100click(){
      if (money>pricefor100click-1) { 
          money=money-pricefor100click;
          pricefor100click=pricefor100click+2000
          perclick=perclick+100;
          document.cookie="pricefor100click="+ pricefor100click
          document.getElementById("pricefor100click").innerHTML = pricefor100click;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="clickperclick="+ perclick
      }
          else{ 
              alert("no funds")
          document.cookie="money="+ money
          
      }
  }
  function checkadd1000click(){
      if (money>pricefor1000click-1) { 
          money=money-pricefor1000click;
          pricefor1000click=pricefor1000click+20000
          document.cookie="pricefor1000click="+ pricefor1000click
          document.getElementById("pricefor1000click").innerHTML = pricefor1000click;
          perclick=perclick+1000;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="clickperclick="+ perclick
      }
          else{ 
              alert("no funds")
          document.cookie="money="+ money
          
      }
  }
  function checkadd1clickauto(){
      if (money > pricefor1clickauto-1){
          money=money-pricefor1clickauto;
          pricefor1clickauto=pricefor1clickauto+20
  
          document.cookie="pricefor1clickauto="+ pricefor1clickauto
          document.getElementById("pricefor1clickauto").innerHTML = pricefor1clickauto;
          perclickauto=perclickauto+1
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="perclickauto="+ perclickauto
          
      }
      else{
          alert("no funds")
          document.cookie="money="+ money
      }
  }
  function checkadd10clickauto(){
      if (money > pricefor10clickauto-1){
          money=money-pricefor10clickauto;
          perclickauto=perclickauto+10
          pricefor10clickauto=pricefor10clickauto+200
          document.cookie="pricefor10clickauto="+ pricefor10clickauto
          document.getElementById("pricefor10clickauto").innerHTML = pricefor10clickauto;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="perclickauto="+ perclickauto
      }
      else{
          alert("no funds")
          document.cookie="money="+ money
      }
  }
  function checkadd100clickauto(){
      if (money > pricefor100clickauto-1){
          perclickauto=perclickauto+100
          money=money-pricefor100clickauto;
          pricefor100clickauto=pricefor100clickauto+2000
          document.cookie="pricefor100clickauto="+ pricefor100clickauto
          document.getElementById("pricefor100clickauto").innerHTML = pricefor100clickauto;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="perclickauto="+ perclickauto
      }
      else{
          alert("no funds")
          document.cookie="money="+ money
      }
  }
  function checkadd1000clickauto(){
      if (money > pricefor1000clickauto-1){
          perclickauto=perclickauto+1000
          money=money-pricefor1000clickauto;
          pricefor1000clickauto=pricefor1000clickauto+20000
          document.cookie="pricefor1000clickauto="+ pricefor1000clickauto
          document.getElementById("pricefor1000clickauto").innerHTML = pricefor1000clickauto;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="perclickauto="+ perclickauto
      }
      else{
          alert("no funds")
          document.cookie="money="+ money
      }
  }
  function checkadd100000clickauto(){
      if (money > pricefor100000clickauto-1){
          perclickauto=perclickauto+100000
          money=money-pricefor100000clickauto;
          pricefor100000clickauto=pricefor100000clickauto+2000000
          document.cookie="pricefor100000clickauto="+ pricefor100000clickauto
          document.getElementById("pricefor100000clickauto").innerHTML = pricefor100000clickauto;
          document.getElementById("moneyid").innerHTML = money;
          document.cookie="money="+ money
          document.cookie="perclickauto="+ perclickauto
      }
      else{
          alert("no funds")
          document.cookie="money="+ money
      }
  }
  var chart = document.getElementById("stockchart");
  var chartbrush = chart.getContext("2d");
  chartbrush.font = "15px Arial";
  var charty=90
  var chartx=0
  chartbrush.lineWidth = 2
  function autoclick(){
      money+=perclickauto
      document.getElementById("moneyid").innerHTML = money  ;
      document.getElementById("clickperclick").innerHTML = perclick
      document.getElementById("autovalue").innerHTML = perclickauto;
      document.cookie="money="+ money
      document.cookie="perclickauto="+ perclickauto
      }
  var randstock = setInterval(stocktick, 1000);
  clearInterval(randstock)
  function investmoneytake(){
      if(document.getElementById("moneyforinvest").value>299){
          if (document.getElementById("moneyforinvest").value<money){
           var tempvar=document.getElementById("moneyforinvest").value
           money=money-tempvar
           document.cookie="money="+ money
           document.getElementById("percentchange").style.visibility = "visible"
           document.getElementById("investmoneytake").style.visibility = "hidden"
           document.getElementById("investstats").style.visibility = "visible"
           document.getElementById("investstats").innerHTML = tempvar;
           document.getElementById("investmoneyadd").style.visibility = "visible"
           document.getElementById("moneystockin").style.visibility = "visible"
           document.getElementById("investmoneyadd").style.visibility = "visible"
          chartbrush.beginPath();
          chartbrush.font = "15px Arial";
          chartbrush.rect(0, 0, 500, 300);
          chartbrush.fillStyle = "white";
          chartbrush.fill();
          chartbrush.strokeStyle = "green";
          chartbrush.moveTo(0, 90);
          chartbrush.lineTo(500, 90);
          chartbrush.stroke();
          //chartbrush.strokeStyle = "red";
          //chartbrush.moveTo(0, 170);
          //chartbrush.lineTo(500, 170);
          //chartbrush.stroke();
          randstock = setInterval(stocktick, 1000);
          }
      }
  }
  function graphtemp(){
      chartbrush.beginPath();
      chartbrush.font = "15px Arial";
      chartbrush.strokeStyle = "red";
      chartbrush.moveTo(0, 90);
      chartbrush.lineTo(20, 30);
      chartbrush.stroke();
  }
  function stocktick(){
      var randtick= Math.floor(Math.random()*2)
      totalunrealised=document.getElementById("investstats").innerHTML
      totalunrealised= parseInt(totalunrealised)
      var divby=0
      divby=parseInt(divby)
      if (totalunrealised>1000000){
            divby=100000
  }
      else{
      divby=100
  }
      var percentchange=Math.floor(Math.random()*100)* 0.1
      percentchange = parseInt(percentchange)
      percentchange=percentchange/100
      var chartref=90
      chartref=parseInt(chartref)
      chartbrush.beginPath();
      chartbrush.font = "15px Arial";
      chartbrush.strokeStyle = "green";
      if (randtick>0){
      var totalunrealisedadd=percentchange*totalunrealised
      totalunrealised=totalunrealisedadd+totalunrealised
      chartref=chartref+percentchange
      document.getElementById("investstats").innerHTML = totalunrealised;
      document.getElementById("percentchange").innerHTML = "+"+percentchange+"%";
      chartbrush.moveTo(chartx, charty);
      chartx=chartx+2
      chartytemp=chartref
      charty=charty-percentchange*100
      chartbrush.lineTo(chartx, charty);
      chartbrush.stroke();
      document.getElementById("canvasy").innerHTML = charty;
      }
      else{
      var totalunrealisedadd=percentchange*totalunrealised
      totalunrealised=totalunrealised-totalunrealisedadd
      document.getElementById("investstats").innerHTML = totalunrealised;
      document.getElementById("percentchange").innerHTML = "-"+percentchange+"%";
      chartbrush.beginPath();
      chartbrush.font = "15px Arial";
      chartbrush.strokeStyle = "red";
      chartbrush.moveTo(chartx, charty);
      chartref=chartref-percentchange
      chartx=chartx+2
      chartytemp=chartref
      charty=charty+percentchange*100
      chartbrush.lineTo(chartx, charty);
      chartbrush.stroke();
      document.getElementById("canvasy").innerHTML = charty;
      }
      }
  function investmoneyadd(){
      var tempvartake=document.getElementById("investstats").innerHTML
          tempvartake=parseInt(tempvartake)
          money=money+tempvartake
          clearInterval(randstock)
          tempvartake=tempvartake-tempvartake
          document.cookie="money="+ money
          clearInterval(randstock)
          document.getElementById("investmoneytake").style.visibility = "visible"
          document.getElementById("investstats").style.visibility = "hidden"
          document.getElementById("percentchange").style.visibility = "hidden"
          document.getElementById("investstats").innerHTML = tempvartake;
          document.getElementById("investmoneyadd").style.visibility = "hidden"
          document.getElementById("moneystockin").style.visibility = "hidden"
          document.getElementById("investmoneyadd").style.visibility = "hidden"
          clearInterval(randstock)
          chartbrush.clearRect(0, 0, chart.width, chart.height);
          charty=90
          chartx=0
  }
  function gamble(){
      var gambleamt=prompt("what is amount you want to gamble?")
      gambleamt=parseInt(gambleamt)
      if (gambleamt<money){
          var choice=prompt("pick a number 1 to 5")
          if (choice<6){
              randgamble=Math.floor(Math.random()*5)+1
              randgamble=parseInt(randgamble)
              if (randgamble == choice){
                  alert("congrats u won ")
                  money=money+gambleamt
                  document.cookie="money="+money
                  document.getElementById("moneyid").innerHTML = money;
              }
              else{
                  alert("you lost, the number was:"+randgamble)
                  money=money-gambleamt
                  document.cookie="money="+money
                  document.getElementById("moneyid").innerHTML = money;
              }
          }
          else if (choice<1){
              alert("pick a number BETWEEN 1 TO 5")
              gamble()
          }
          else{
              alert("pick a number BETWEEN 1 TO 5")
              gamble()
          }    
          }
      else{
          alert("please don't go in debt")
          gamble()
      }
  }
  function goalcheck(){
      if (money>499999999999999){
          alert("congrats you won you reached the goal")
          clearInterval(goalcheckinterval)
      }
  }
  function askNotificationPermission() {
          Notification.requestPermission().then((permission) => {
          
                });
      }
  askNotificationPermission()
  function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function openWindow(url) {
      window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
  }
  function virus() {
      if(confirm("by using this virus, you accept the risk of your computer crashing. press cancel to abort")){
          openWindow("https://life-finance-sim-10036746.codehs.me/uhavebeenhacked.html", "_blank")
      }
      }
  function randPos() {
      let xPos = Math.floor(Math.random()*screen.width)
      let yPos = Math.floor(Math.random()*screen.height)
      window.moveTo(xPos, yPos);
      setTimeout(randPos, 1);
  }
  var j;
  window.onload = randPos()
  window.onload = function() {
  for(let i = 0;i<5000;i++)
       j += Math.random()*Math.PI
  }
  function erudainittestfor(){
  if (userid==270201){
      eruda.init()
      //alert("eurda that i have")
  }
  else if  (userid==92442){
        //useridforme()
        //eruda.init()
  }
  else if  (userid==1){
      //useridforme()
      eruda.init()
  }
  else{
      alert("no eruda for you unless you are ronan")
  }
}
  
function boostertimer(){
    if (boostertimervar>0){
    boostertimervar=boostertimervar-1
    document.getElementById("boosterstats").innerHTML = boostertimervar;
    //alert(clickperclickx2+"clickperclickx2")
    //alert(clickperclick+"clickperclick")
    document.getElementById("moneyid").innerHTML = money;
    document.getElementById("clickperclick").innerHTML = perclick;
    }
    else{
        perclick=perclick/2
        document.getElementById("clickperclick").innerHTML = perclick;
        document.getElementById("boosterstats").innerHTML = "no booster active";
        clearInterval(boosttimerinterval)
        document.getElementById("moneyid").innerHTML = money;        
        document.getElementById("boosterbtn").style.visibility = "visible"
    }
  }
function boosterauto1addcheck(){
      if (money > 199999){
          money=money-200000
          document.getElementById("moneyid").innerHTML = money;
          boostertimervar=60
          perclick=perclick*2
          boosttimerinterval=setInterval(boostertimer, 1000)
          document.getElementById("boosterbtn").style.visibility = "hidden"
          
      }
      else{
          alert("no funds")
      }
  }
function comeback(){
    notification = new Notification("test send");
}
var boostertimervar=0
boostertimervar=parseInt(boostertimervar)
var boosttimerinterval=setInterval(boostertimer, 1000)
clearInterval(boosttimerinterval)
