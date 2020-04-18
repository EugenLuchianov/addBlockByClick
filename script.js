
   var parent= document.querySelector(".container");
    var divs=document.querySelectorAll(".cub");
    var btns_add=document.querySelectorAll(".add_button");
      var btns_dell=document.querySelectorAll(".del");






window.onload=main;

var data=parseInt(divs[0].getAttribute('data-id'));//получение  data-id первого элемента

var div=`
<div class="inside">
    Name:<input type="text" class="name" value="" >
    SurName:<input type="text" class="surname">
    <button  class="add_button" >Добавить пользователя</button>
    <button  class="del none">Удалить пользователя</button>
</div>


`;
 function  main(){
  btns_add.forEach(function(element, index){


//------------скрытие добавление кнопки---------------//
      element.onclick=function(){

           btns_dell[index].classList.toggle('none');
           element.classList.toggle('none');
           addNewChild(element.closest('.cub'))


      }



  });



  btns_dell.forEach(function(element, index){


      element.onclick=function(){
           btns_add[index].classList.toggle('none');
           element.classList.toggle('none');

           removeNewChild(element.closest('.cub'))

      }
  });

  function addNewChild(el){

       var newChild=el.cloneNode(false);
       console.log(newChild.getAttribute('data-id'));

       newChild.setAttribute('data-id',++data);//инкремент  data-id для нового  элимента
       newChild.innerHTML=div;


       parent.appendChild(newChild);
       btns_add=document.querySelectorAll(".add_button");
       btns_dell=document.querySelectorAll(".del");

       main();

  }
  function removeNewChild(el){


       parent.removeChild(el);
       btns_add=document.querySelectorAll(".add_button");
       btns_dell=document.querySelectorAll(".del");

       main();

  }
}
