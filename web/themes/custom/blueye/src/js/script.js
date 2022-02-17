const mybutton = document.querySelector("#myBtn");
window.addEventListener("scroll",function ()  {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
  
    }
})

mybutton.addEventListener("click",function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} )

