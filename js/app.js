var horloge = (function horloge(){
  "use strict";
  var color, nb;


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }


  function chrono(){
    var date= new Date();
    var day=date.getDay();
    var d=date.getDate();
    var m=date.getMonth();
    var y=1900+date.getYear();
    var h=date.getHours();
    var min=date.getMinutes();
    var s=date.getSeconds();
    if(s<10)
    {
      s="0"+s;
    }
    if(min<10)
    {
      min="0"+min;
    }
    if(h<10)
    {
      h="0"+h;
    }
    if (m==0){m="Janvier"}
    if (m==1){m="Février"}
    if (m==2){m="Mars"}
    if (m==3){m="Avril"}
    if (m==4){m="Mai"}
    if (m==5){m="Juin"}
    if (m==6){m="Juillet"}
    if (m==7){m="Août"}
    if (m==8){m="Septembre"}
    if (m==9){m="Octobre"}
    if (m==10){m="Novembre"}
    if (m==11){m="Décembre"}
    if (day==1){day="Lundi"}
    if (day==2){day="Mardi"}
    if (day==3){day="Mercredi"}
    if (day==4){day="Jeudi"}
    if (day==5){day="Vendredi"}
    if (day==6){day="Samedi"}
    if (day==0){day="Dimanche"}

    document.getElementById('horloge').innerHTML=day+" "+d+" "+m+" "+y+" - "+h+":"+min+":"+s;
    document.getElementById("horloge").style.color = getRandomColor();
  }

  const init= function init(){

    var timer = window.setInterval(chrono, 500);
  };


  window.onload = init;


}()); //fin
