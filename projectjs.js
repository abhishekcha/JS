let btn=document.querySelector("#btn");
let fileinp=document.querySelector("#fileinp");
 
btn.addEventListener("click",function(){
    fileinp.click();
})
fileinp.addEventListener("change",function(dets){
    btn.textContent=dets.target.files[0].name;
})
let ft=document.querySelector("form");
ft.addEventListener("submit",function(dets){
    dets.preventDefault();
})