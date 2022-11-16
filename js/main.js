let btn=document.getElementById("upto")

window.addEventListener("scroll",()=>{
   if(window.scrollY>60){
      btn.style.visibility="visible"
   }
   else{
      btn.style.visibility="hidden"
   }
})

btn.addEventListener("click",()=>{
   window.scrollTo({top:0,left:0,behavior:"smooth"})
})