var sel1 = document.getElementById("sel1");
var sel2 = document.getElementById("sel2");
var sel3 = document.getElementById("sel3");
var sel4 = document.getElementById("sel4");
var sel5 = document.getElementById("sel5");
var sel6 = document.getElementById("sel6");
var selection=1;
var slide1 = document.getElementById("container1");
var slide2 = document.getElementById("container2");
var contbutton = document.getElementById("contbutton");

contbutton.style.borderRadius="30px";
contbutton.style.borderColor="purple";

contbutton.onclick = function(){
    window.open("contact.html");
}

sel1.onclick = function(){
    selection =1;
    if (selection == 1){
        sel1.style.top="200px";
        sel1.style.height="600px";
        sel1.style.cursor="default";
        
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
        
        sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
        
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
        
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
        
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
    }else{
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
    }
}

sel2.onclick = function(){
    selection=2;
    if (selection == 2){
       sel2.style.top="200px";
        sel2.style.height="600px";
        sel2.style.cursor="default";
        
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
        
        sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
        
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
        
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
        
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
    }else{
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
    }
    
}

sel3.onclick = function(){
    selection = 3;
    if(selection == 3){
    sel3.style.top="200px";
        sel3.style.height="600px";
        sel3.style.cursor="default";
        
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
        
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
        
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
        
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
        
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
        
        
}else{
    sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
}
}

sel4.onclick = function(){
    selection=4
    if (selection==4){
        sel4.style.top="200px";
        sel4.style.height="600px";
        sel4.style.cursor="default";
        
        sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
        
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
        
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
        
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
        
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
        
    }else{
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
    }
    
}

sel5.onclick = function(){
    selection=5
    if (selection==5){
        sel5.style.top="200px";
        sel5.style.height="600px";
        sel5.style.cursor="default";
        
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
        
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
        
        sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
        
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
        
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
        
    }else{
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
    }
    
}

sel6.onclick = function(){
    selection=6
    if (selection==6){
        sel6.style.top="200px";
        sel6.style.height="600px";
        sel6.style.cursor="default";
        
        sel1.style.top="10px";
        sel1.style.height="25px";
        sel1.style.cursor="pointer";
        
        sel2.style.top="40px";
        sel2.style.height="25px";
        sel2.style.cursor="pointer";
        
        sel3.style.top="70px";
        sel3.style.height="25px";
        sel3.style.cursor="pointer";
        
        sel4.style.top="100px";
        sel4.style.height="25px";
        sel4.style.cursor="pointer";
        
        sel5.style.top="130px";
        sel5.style.height="25px";
        sel5.style.cursor="pointer";
        
    }else{
        sel6.style.top="160px";
        sel6.style.height="25px";
        sel6.style.cursor="pointer";
    }
}

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}