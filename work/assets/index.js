'use strict';

$(document).ready(function(){
  $('.feedback__slaider').slick({
      arrows:true,
      infinite:true,
      speed:500,
      slidesToShow:3,
      autoplaySpeed:2000,
      easing:"ease",
      responsive:[
        {
          breakpoint:900,
          settings:{
            slidesToShow:2,
          }
        },
        {
          breakpoint:768,
          settings:{
            slidesToShow:1,
          }
        },
      ],
  });
});


function pacetTab(){
    let tabs = document.querySelectorAll('.pacet__tab');
    let overs = document.querySelectorAll('.pacet__overflow');
    let items = document.querySelectorAll(".pacet__view");
    let itemsAdap = document.querySelectorAll(".pacet__view.adap");
    for(let tab of tabs){
        tab.addEventListener("click",function(){
            for(let item of tabs){
                item.classList.remove("active");
            }
            for(let item of items){
                item.classList.remove("active");
            }
            for(let item of itemsAdap){
                item.classList.remove("active");
            }
            for(let over of overs){
                over.classList.remove("active");    
            }
            this.querySelector(".pacet__overflow").classList.add("active");
            this.classList.add("active");
            let id = this.id;
            document.querySelector(`.${id}.max`).classList.add("active");
            document.querySelector(`.${id}.adap`).classList.add("active");
        });
    }
}
pacetTab();

let items = document.querySelectorAll('.slaider__item');
    let current = 1;

    setInterval(function(){
        for(let item of items) {
            item.classList.remove("opacity");
             item.classList.remove("animate__fadeIn");
        }
        if(current == items.length){
            current = 0;
        }
        items[current].classList.add("opacity");
        items[current].classList.add("animate__fadeIn");
        current = current + 1;
    },3000);    