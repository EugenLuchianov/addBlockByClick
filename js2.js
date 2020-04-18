window.onload=function(){
  var add=document.querySelector("#add");
  var remove =document.querySelector("#del");
  var parent= document.querySelector(".container");
  var inside= document.querySelector(".inside");

 var count=1

 var divs=document.querySelectorAll(".cub");

  add.onclick=function(){

    var div=document.createElement('div');
    div.classList.add('cub');

    parent.appendChild(div);



    divs=document.querySelectorAll(".cub");

    count++;
    console.log(count);
  }
  remove.onclick=function(){

        if(count>1){

             parent.removeChild(divs[count-1]);
             count--;

        }








  }
}
