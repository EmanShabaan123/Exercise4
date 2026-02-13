let popicons = document.querySelectorAll(".item i") ,
    popfather = document.querySelector(".pop") ,
    popbox = document.querySelector(".pop .box") ,
    popimg = document.querySelector(".pop img") ,
    currindex ,
    images = document.querySelectorAll(".gallery img") ,
    next = popfather.querySelector(".next") ,
    prev = popfather.querySelector(".prev") ,
    close = popfather.querySelector(".close")
    popul = popfather.querySelector("ul");

function togglepop(){
    popfather.classList.toggle("active")
}
function updatein(){
    let liact = popfather.querySelector(".pop .indecators li.active") ;
    if( liact != null){
        liact.classList.remove("active");
    }
    popindecators[currindex].classList.add("active");
}

for(let i=0 ; i< images.length ; i++){
    let newin = document.createElement("li") ;
      newin.textContent  = i+1 ;
    if(i != images.length -1 ){
        newin.classList.add("me-2") ;
    }
    popul.append(newin)
}
let popindecators = popfather.querySelectorAll(".indecators li") ;
popindecators.forEach(function(indecator , index){
    indecator.addEventListener("click", function(e){
        currindex = index ;
        let IMG = images[currindex] ,
            newsrc = IMG.getAttribute("src") ;
        updatein() ;
        popimg.setAttribute("src" ,newsrc) ; 
                  
    })
})
popicons.forEach(function (popicon){
    popicon.addEventListener("click" , function(e){
        let currimg = popicon.parentElement.previousElementSibling ,
            Currsrc = currimg.getAttribute("src") ;

        currindex = currimg.dataset.index ;
        
        updatein() ;


        popimg.setAttribute("src" ,Currsrc) ;

        togglepop() ;
       
    }) ;
})

popfather.addEventListener("click" , togglepop) ;
close.addEventListener("click" , togglepop) ;
popbox.addEventListener("click" , function(e){
    e.stopPropagation() ;
})

next.addEventListener("click" , function(e){
    currindex = ++currindex % images.length ;
    let nextin = currindex ,
        nextimg = images[nextin] ,
        nextsrc = nextimg.getAttribute("src") ;
    popimg.setAttribute("src",nextsrc) ;
    updatein();
})

prev.addEventListener("click" , function(e){
    currindex = (--currindex < 0 ) ? images.length-1 : currindex ;
    let nextin = currindex ,
        nextimg = images[nextin] ,
        nextsrc = nextimg.getAttribute("src") ;
    popimg.setAttribute("src",nextsrc) ;
    updatein();
})
document.addEventListener("keydown" ,function(e){
    if(e.key === "Escape"){
        togglepop() ;
    } 
  
    ////////////////////////////
    let presskey = Number(e.key);
     
        if(!isNaN(presskey) && presskey>0 && presskey<=images.length){
            let newin = presskey-1 ;
             if(newin === currindex){
        popbox.classList.add("already-open");
         setTimeout(()=>{
                popbox.classList.remove("already-open");} ,500)
      }
            currindex = presskey -1 ;
         let target = images[currindex] ,
            tarsrc = target.getAttribute("src") ;
         updatein() ,
         popimg.setAttribute("src",tarsrc) ;
        }if(presskey===0 || presskey>images.length){
            popbox.classList.add("apply-wrong") ;
            setTimeout(()=>{
                popbox.classList.remove("apply-wrong");} ,600)
        }
    ////////////////////////
    if(e.key === "ArrowRight")
    {
    currindex = ++currindex % images.length ;
    let nextin = currindex ,
        nextimg = images[nextin] ,
        nextsrc = nextimg.getAttribute("src") ;
    popimg.setAttribute("src",nextsrc) ;
    updatein();
    }

    if(e.key === "ArrowLeft"){
    currindex = (--currindex < 0 ) ? images.length-1 : currindex ;
    let nextin = currindex ,
        nextimg = images[nextin] ,
        nextsrc = nextimg.getAttribute("src") ;
    popimg.setAttribute("src",nextsrc) ;
    updatein();
    }

  
}) ;