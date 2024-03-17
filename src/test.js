const root=document.getElementById("root");
const newEl=document.createElement('div');
newEl.setAttribute("id","mydiv");
let num=13;
newEl.textContent=num;
root.appendChild(newEl);
const btn=document.createElement('button');
btn.textContent="increase";
root.appendChild(btn);
///////--------////
btn.addEventListener("click",function () {
    console.log(newEl.textContent);
    num=num+1;
    newEl.textContent=num;
})