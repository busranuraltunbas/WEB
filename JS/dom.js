document.getElementById("write").innerText = "Yazı";

var oku = document.getElementById("read").innerText;

var read = document.querySelector(".first");

var check = document.getElementById("attr");
check.checked =  true

var country = document.getElementById("country");
var list = document.createElement("option");

list.setAttribute("value", 2);
list.innerText = "İstanbul";

country.appendChild(list);

let events = document.getElementById("event");
events.addEventListener('click', ()=> {
    let txt = document.getElementById("eventText");
    txt.innerText= "Sample Button";
});