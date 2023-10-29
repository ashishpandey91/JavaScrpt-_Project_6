const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

window.addEventListener( "keydown", (e)=>{
    one.innerHTML = `${e.key === " " ? e.key.innerHTML="space" : e.key}`
    two.innerHTML = `${e.keyCode}`
    three.innerHTML = `${e.code}`
});
console.log(one);