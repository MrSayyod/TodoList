(()=>{"use strict";const t=(t,o={},s="")=>{const e=document.createElement(t);return Object.keys(o).forEach((t=>{e.setAttribute(t,o[t])})),e.textContent=s,e},o=(t=[])=>{for(let o=t.length-2;o>0;o-=1)t[o].appendChild(t[o+1]);t[0].appendChild(t[1])};let s=new class{constructor(t,o,s,e){this.title=t,this.description=o,this.dueDate=s,this.priority=e}}("job","solve","13-03-21","medium");console.log(s.title),console.log(s),console.log("index.js"),(()=>{console.log("here");const s=document.getElementById("content"),e=t("div",{class:"todo-list body-padding"}),l=t("h1",{},"Todo List"),i=t("form",{class:"mb-3"});let c=["Title","Description","Due date"];c.forEach((s=>{const e=t("div",{class:"form-group col-md-7"}),l=t("input",{type:"text",class:"form-control",id:s,placeholder:s});o([i,e,l])}));const n=t("div",{class:"form-group col-md-4"}),r=t("select",{id:"priority",class:"form-control"});c=["Priority","Low","Medium","High"],c.forEach((o=>{const s=t("option",{},o);r.appendChild(s)})),o([i,n,r]);const d=t("button",{type:"submit",class:"btn btn-primary"},"Add");i.appendChild(d);const a=t("ul",{class:"list-group list-group-flush"}),p=t("li",{class:"list-group-item"}),m=t("span",{},"lorem ipsum"),u=t("span"),h=t("i",{class:"fa fa-times"});o([p,m]),o([p,u,h]),o([s,e,l]),o([s,e,i]),o([s,e,a,p])})()})();
//# sourceMappingURL=main.js.map