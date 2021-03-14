(()=>{"use strict";const t=(t,e={},o="")=>{const c=document.createElement(t);return Object.keys(e).forEach((t=>{c.setAttribute(t,e[t])})),c.textContent=o,c},e=(t=[])=>{for(let e=t.length-2;e>0;e-=1)t[e].appendChild(t[e+1]);t[0].appendChild(t[1])},o=(()=>{const t=[];return{createTodo:function(e,o,c,d,l=0){const n={};n.id=t.length,n.title=e,n.description=o,n.dueDate=c,n.priority=d,n.projectId=l,t.push(n)},getProjectTodos:e=>t.filter((t=>t.projectId==e)),getAllTodos:()=>[...t],getTodo:e=>t[e],updateTodo:(e,o,c,d,l,n=0)=>{t[e].title=o,t[e].description=c,t[e].dueDate=d,t[e].priority=l,t[e].projectId=n},deleteTodo:e=>t.splice(e,1)}})(),c=(()=>{const t={0:"default"};return{createProject:function(e){const o=Object.keys(t)[Object.keys(t).length-1];t[parseInt(o,10)+1]=e},getProject:e=>t[e],getAllProject:()=>Object.assign(t)}})(),d=function(e){let o=document.getElementById("project");o&&e.removeChild(o),o=t("select",{id:"project",class:"form-control mr-3"});const d=c.getAllProject();for(const e in d){const c=t("option",{value:e},d[e]);o.appendChild(c)}e.appendChild(o)},l=function(d){const l=document.querySelector("body"),n=t("div",{class:"container"}),r=t("div",{class:"modal",id:"myModal"}),s=t("div",{class:"modal-dialog"}),a=t("div",{class:"modal-content"}),i=t("div",{class:"modal-header"}),p=t("h4",{class:"modal-title"},"Edit Todo"),m=t("div",{class:"modal-body"}),u=t("form",{class:"mb-3"});["title","description","dueDate"].forEach((c=>{const l=t("div",{class:"form-group col-md-7"}),n=t("input",{type:"text",class:"form-control",id:c,placeholder:c,value:o.getTodo(d)[c]});e([u,l,n])}));const f=t("label",{for:"priority",class:"col-sm-2 col-form-label"},"Priority");u.appendChild(f);const g=t("div",{class:"form-group col-md-4"}),y=t("select",{id:"priority",class:"form-control"});["Not Urgent","Urgent"].forEach((e=>{const o=t("option",{},e);y.appendChild(o)})),e([u,g,y]);const v=t("label",{for:"project",class:"col-sm-2 col-form-label"},"Project");u.appendChild(v);const j=t("div",{class:"form-group col-md-4",id:"project-group"}),b=t("select",{id:"project",class:"form-control mr-3"}),h=c.getAllProject();for(const e in h){const o=t("option",{value:e},h[e]);b.appendChild(o)}j.appendChild(b),e([u,j]);const E=t("button",{type:"submit",class:"btn btn-success",id:"update-todo","data-dismiss":"modal"},"Update"),I=t("div",{class:"modal-footer d-flex justify-content-between"}),C=t("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"},"Close");e([a,i,p]),e([a,m]),e([m,u]),e([a,I,E]),e([a,I,C]),e([l,n,r,s,a])},n=function(){const d=document.getElementById("content"),r=t("div",{class:"todo-list"});document.querySelector(".todo-list")&&d.removeChild(document.querySelector(".todo-list"));const s=c.getAllProject();for(const c in s){const a=c,i=o.getProjectTodos(a);if(!i.length)continue;const p=t("h3",{},s[c]),m=t("ul",{class:"list-group list-group-flush"});i.forEach((c=>{const d=t("li",{class:"list-group-item"}),r=t("span",{},c.title),s=t("p",{},c.description),a=t("span",{},c.priority),i=t("div"),p=t("span",{class:"mx-2"}),u=t("i",{class:"fa fa-pencil-square-o","data-index":c.id,"data-toggle":"modal","data-target":"#myModal",id:"edit-icon"}),f=t("span"),g=t("i",{class:"fa fa-times","data-index":c.id});g.addEventListener("click",(t=>{o.deleteTodo(t.target.dataset.index),n()})),e([d,r]),e([d,s]),e([d,i,a]),e([d,i,p,u]),e([d,i,f,g]),e([m,d]),u.addEventListener("click",(t=>{l(t.target.dataset.index);const e=document.querySelector(".modal #title"),c=document.querySelector(".modal #description"),d=document.querySelector(".modal #dueDate"),r=document.querySelector(".modal #priority");document.getElementById("update-todo").addEventListener("click",(l=>{const s=document.querySelector(".modal #project");l.preventDefault(),o.updateTodo(t.target.dataset.index,e.value,c.value,d.value,r.value,parseInt(s.value,10)),n()}))}))})),e([d,r,p]),e([d,r,m])}};!function(){const o=document.getElementById("content"),c=t("h1",{},"Todo List"),l=t("form",{class:"mb-3"});["Title","Description","Due date"].forEach((o=>{const c=t("div",{class:"form-group col-md-7"}),d=t("input",{type:"text",class:"form-control",id:o,placeholder:o});e([l,c,d])}));const n=t("label",{for:"priority",class:"col-sm-2 col-form-label"},"Priority");l.appendChild(n);const r=t("div",{class:"form-group col-md-4"}),s=t("select",{id:"priority",class:"form-control"});["Not Urgent","Urgent"].forEach((e=>{const o=t("option",{},e);s.appendChild(o)})),e([l,r,s]);const a=t("label",{for:"project",class:"col-sm-2 col-form-label"},"Project");l.appendChild(a);const i=t("div",{class:"form-group col-md-4",id:"project-group"});d(i),e([l,i]);const p=t("button",{type:"submit",class:"btn btn-primary",id:"add-todo"},"Add Todo");l.appendChild(p),e([o,c]),e([o,l])}(),function(){const o=document.getElementById("content"),c=t("form",{class:"mb-3"}),d=t("div",{class:"form-group col-md-7"}),l=t("input",{type:"text",class:"form-control",id:"project-name",placeholder:"Project name"});e([c,d,l]);const n=t("button",{type:"submit",class:"btn btn-primary",id:"create-project"},"Create Project");c.appendChild(n),e([o,c])}(),n();const r=document.getElementById("Title"),s=document.getElementById("Description"),a=document.getElementById("Due date"),i=document.getElementById("priority");document.getElementById("add-todo").addEventListener("click",(t=>{const e=document.getElementById("project");t.preventDefault(),((t,e,c,d,l)=>{o.createTodo(t,e,c,d,l)})(r.value,s.value,a.value,i.value,parseInt(e.value,10)),n()}));const p=document.getElementById("project-group"),m=document.getElementById("project-name");document.getElementById("create-project").addEventListener("click",(t=>{t.preventDefault(),c.createProject(m.value),d(p),alert("New project created")}))})();
//# sourceMappingURL=main.js.map