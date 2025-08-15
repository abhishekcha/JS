// single click event.........

// let h1=document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color="red";
// })
//.....................................................

// let h1=document.querySelector("h1");
// h1.addEventListener("dblclick",function(){
//     h1.style.color="blue";
// })
// common events..........
// let input=document.querySelector("input");
// input.addEventListener("input",function(evt){
//     console.log(evt.data);   
// })
// let inp=document.querySelector("input");
// inp.addEventListener("input",function(e){
//     console.log(e.data);
// })
// select tag..............................
// let sel=document.querySelector("select");
// sel.addEventListener("change",function(det){
//     console.log(det);
    
// })
//.........................................
// change event...........
let sel=document.querySelector("select");
let device=document.querySelector("#device");
sel.addEventListener("change",function(e) {
    device.textContent="device selected";    
});