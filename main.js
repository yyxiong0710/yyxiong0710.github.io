var div = document.createElement("div")
div.classList.add("door");
var k = document.querySelector(".bu.one");
var main = document.getElementById("main");
var img = document.createElement("img");
var img2 = document.createElement("img");
img2.setAttribute("class", "sc2");
img.setAttribute("class", "sc")
img.src = "./pic/sc.jpeg";
img2.src = "./pic/but.png";
var text = document.createTextNode("马克斯·普朗克（Max Planck，1858年4月23日－1947年10月4日）是德国著名的物理学家，被广泛认为是量子理论的创始人之一。他的工作对现代物理学的发展产生了深远的影响。以下是普朗克的简要简介");
var text1 = document.createTextNode("早年生活与教育出生：普朗克生于1858年4月23日，地点为德国的基尔（Kiel）。教育背景：他在慕尼黑大学和柏林大学接受了物理学教育，受教于赫尔曼·冯·赫尔姆霍兹（Hermann von Helmholtz）和威廉·冯·贝特朗（Wilhelm von Bunsen）。")
var p = document.createElement("p");
p.appendChild(text);
p.appendChild(text1);
div.appendChild(img);
div.appendChild(img2);
div.appendChild(p);
k.addEventListener("click", function () {
    main.appendChild(div);
})
img2.addEventListener("click", function () {
    div.remove();
})

var div2 = document.querySelector(".display");
var but = document.querySelector(".sc2");
var k2 = document.querySelector(".bu.two");
k2.addEventListener("click",function(){
    div2.style.display = "block";
})
but.addEventListener("click",function(){
    div2.style.display = "none";
})



function submithandle(){
    console.log("success");
}