let h1=document.querySelector("h1");
console.dir(h1)
h1.innerHTML="<i>hacker</i>";
h1.hidden=true;
let a=document.querySelector("a");
//a.href="https://www.google.com"; // or
a.setAttribute("href","https://www.google.com");
// you can change image using set attribute
// get attribute 
// remove attribute 
// create element..
let h2=document.createElement("h1");
h2.textContent="i am hacker pro plus";
document.querySelector("div").appendChild(h2);
// what is dom->The DOM is an API for HTML documkents..
let lis=document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
    
})
let btn=document.querySelector("button");
btn.removeAttribute("disabled");



