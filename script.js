let oneEl = document.getElementById("one");
let twoEl = document.getElementById("two");
let threeEl = document.getElementById("three");
let fourEl = document.getElementById("four");
let fiveEl = document.getElementById("five");
let sixEl = document.getElementById("six");
let sevenEl = document.getElementById("seven");
let eightEl = document.getElementById("eight");
let nineEl = document.getElementById("nine");
let zeroEl = document.getElementById("zero");
let plusEl = document.getElementById("plus");
let minusEl = document.getElementById("minus");
let divideEl = document.getElementById("divide");
let multiplyEl = document.getElementById("multiply");
let pointEl = document.getElementById("point");
let equalEl = document.getElementById("equal");
let areaEl = document.getElementById("myArea");
let delEl = document.getElementById("del")

oneEl.addEventListener("click", function () {
    areaEl.value += 1;
})

twoEl.addEventListener("click", function () {
    areaEl.value += 2;
})

threeEl.addEventListener("click", function () {
    areaEl.value += 3;
})

fourEl.addEventListener("click", function () {
    areaEl.value += 4;
})

fiveEl.addEventListener("click", function () {
    areaEl.value += 5;
})

sixEl.addEventListener("click", function () {
    areaEl.value += 6;
})

sevenEl.addEventListener("click", function () {
    areaEl.value += 7;
})

eightEl.addEventListener("click", function () {
    areaEl.value += 8;
})

nineEl.addEventListener("click", function () {
    areaEl.value += 9;
})

zeroEl.addEventListener("click", function () {
    areaEl.value += 0;
})

plusEl.addEventListener("click", function(){
    if(isNaN(areaEl.value[areaEl.value.length-1])){
       areaEl.value = areaEl.value.slice(0, -1);
        areaEl.value+= "+";
    }else{areaEl.value+= "+"}

})


minusEl.addEventListener("click", function(){
    if(isNaN(areaEl.value[areaEl.value.length-1])){
        areaEl.value = areaEl.value.slice(0, -1);
         areaEl.value+= "-";
     }else{areaEl.value+= "-"}
 
})


divideEl.addEventListener("click", function(){
    if(isNaN(areaEl.value[areaEl.value.length-1])){
        areaEl.value = areaEl.value.slice(0, -1);
         areaEl.value+= "/";
     }else{areaEl.value+= "/"}
 
})

multiplyEl.addEventListener("click", function(){
    if(isNaN(areaEl.value[areaEl.value.length-1])){
        areaEl.value = areaEl.value.slice(0, -1);
         areaEl.value+= "*";
     }else{areaEl.value+= "*"}
 
})

pointEl.addEventListener("click",function(){
    areaEl.value+=".";
})

equalEl.addEventListener("click", function () {
    areaEl.value=eval(areaEl.value);

})

delEl.addEventListener("click", function(){
    areaEl.value="";
})