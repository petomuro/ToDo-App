import{c as ee,r as H,u as te,d as A,e as O,l as Y,a as pe,g as Z,b as me}from "./index-7b058723.js";import{d as K,r as se,a as V,g as C,o as i,c as l,F as j,b as P,n as M,u as w,e as o,f as T,t as E,G as q,i as fe,j as ve,k as _e,w as G,H as ge}from "./index-e439ae92.js";const he={key:0,class:"flex flex-column p-3"},ye={class:"flex flex-column my-3"},xe=o("label",{class:"text-primary",for:"content"},"Content",-1),$e=["onClick"],Te={class:"flex flex-column"},ke=o("span",{class:"text-primary"},"Title",-1),be={class:"text-black-alpha-90"},we={class:"flex flex-column my-3"},Ie=o("span",{class:"text-primary"},"Content",-1),De={class:"text-black-alpha-90"},Ce={class:"flex flex-column"},Le=o("span",{class:"text-primary"},"Deadline",-1),Ve={class:"text-black-alpha-90"},Ee={class:"flex justify-content-between align-items-center"},Ae={key:0,class:"flex align-items-center p-3"},Se=["onClick"],Be=["onClick"],Ue={key:1,class:"flex align-items-center p-3"},Me=["onClick"],je=["onClick"],Ne=["onClick"],Fe=["onClick"],Pe={key:2,class:"flex align-items-center p-3"},ze=o("span",{class:"border-2 border-round-xl p-2 bg-green-800 border-green-800"},"Done",-1),Oe=[ze],qe={key:3,class:"flex align-items-center p-3"},Je=o("span",{class:"border-2 border-round-xl p-2 bg-orange-800 border-orange-800"},"In progress",-1),Re=[Je],Ge={key:0,class:"flex"},He=K({__name:"TheTodos",props:{listId:null,listsData:null,todosData:null,filtering:{type:Boolean}},emits:["deleteTodo","createTodo","isEditingTodo","updateTodo","doneTodo"],setup(g, {emit:h}){const f=g,N={collection:{$each:ee.forEach({title:{required:H},deadline:{required:H}})}},S=se({collection:f.todosData}),a=te(N,S),F=async()=>await a.value.$validate(),p=V(f.todosData),L=(d, m)=>{h("deleteTodo",{listId:d,todoId:m})},k= d=>{h("createTodo",d)},D=(d, m)=>{const I=A(f.listsData,d),x=O(f.todosData,m);f.todosData[x].is_adding_todo?L(d,m):h("isEditingTodo",{listIndex:I,todoIndex:x,is_editing_todo:!f.todosData[x].is_editing_todo})},$=async(d, m)=>{const I=A(f.listsData,d),x=O(f.todosData,m);await F()&&h("updateTodo",{listIndex:I,listId:d,todoIndex:x,todoId:m,newTodo:p.value[x]})},y=(d, m)=>{const I=A(f.listsData,d),x=O(f.todosData,m);h("doneTodo",{listIndex:I,listId:d,todoIndex:x,todoId:m,is_done_todo:!f.todosData[x].is_done_todo})};return(d, m)=>{const I=C("InputText"),x=C("TheTextarea"),c=C("TheCalendar"),r=C("TheButton");return i(),l(j,null,[(i(!0),l(j,null,P(g.todosData,(s, v)=>(i(),l("div",{key:s.id,class:M([{errorTitle:w(a).collection.$each.$response.$errors[v].title.length,errorDeadline:w(a).collection.$each.$response.$errors[v].deadline.length},"flex flex-column justify-content-between bg-gray-300 border-round-xl m-3"])},[s!=null&&s.is_editing_todo?(i(),l("div",he,[o("label",{class:M([{"p-error":w(a).collection.$each.$response.$errors[v].title.length},"text-primary"]),for:"title"},"Title*",2),T(I,{id:"title",modelValue:p.value[v].title,"onUpdate:modelValue": t=>p.value[v].title=t,class:M({"p-invalid":w(a).collection.$each.$response.$errors[v].title.length}),placeholder:"Add title for todo",type:"text"},null,8,["modelValue","onUpdate:modelValue","class"]),(i(!0),l(j,null,P(w(a).collection.$each.$response.$errors[v].title, t=>(i(),l("div",{key:t,class:"p-error"},E(t.$message.replace("Value","Title")),1))),128)),o("div",ye,[xe,T(x,{id:"content",modelValue:p.value[v].content,"onUpdate:modelValue": t=>p.value[v].content=t,"auto-resize":!0,cols:"30",placeholder:"Add content for todo",rows:"5"},null,8,["modelValue","onUpdate:modelValue"])]),o("label",{class:M([{"p-error":w(a).collection.$each.$response.$errors[v].deadline.length},"text-primary"]),for:"deadline"},"Deadline*",2),T(c,{id:"deadline",modelValue:p.value[v].deadline,"onUpdate:modelValue":[t=>p.value[v].deadline=t, t=>w(Y)(p.value[v].deadline)],class:M({"p-invalid":w(a).collection.$each.$response.$errors[v].deadline.length}),"date-format":"dd.mm.yy",placeholder:"Add deadline for todo","show-time":""},null,8,["modelValue","onUpdate:modelValue","class"]),(i(!0),l(j,null,P(w(a).collection.$each.$response.$errors[v].deadline, t=>(i(),l("div",{key:t,class:"p-error"},E(t.$message.replace("Value","Deadline")),1))),128))])):(i(),l("div",{key:1,class:"flex flex-column p-3 cursor-pointer",onClick: t=>D(g.listId,s==null?void 0:s.id)},[o("div",Te,[ke,o("h3",be,E(s==null?void 0:s.title),1)]),o("div",we,[Ie,o("p",De,E(s==null?void 0:s.content),1)]),o("div",Ce,[Le,o("p",Ve,E(w(Y)(s==null?void 0:s.deadline)),1)])],8,$e)),o("div",Ee,[s!=null&&s.is_editing_todo?(i(),l("div",Ae,[o("i",{class:"pi pi-check cursor-pointer text-primary",onClick: t=>$(g.listId,s==null?void 0:s.id)},null,8,Se),o("i",{class:"pi pi-times cursor-pointer mx-3 text-red-800",onClick: t=>D(g.listId,s==null?void 0:s.id)},null,8,Be)])):(i(),l("div",Ue,[s!=null&&s.is_done_todo?(i(),l("i",{key:1,class:"pi pi-times cursor-pointer text-red-800",onClick: t=>y(g.listId,s==null?void 0:s.id)},null,8,je)):(i(),l("i",{key:0,class:"pi pi-check cursor-pointer text-primary",onClick: t=>y(g.listId,s==null?void 0:s.id)},null,8,Me)),o("i",{class:"pi pi-pencil mx-3 cursor-pointer text-blue-800",onClick: t=>D(g.listId,s==null?void 0:s.id)},null,8,Ne),o("i",{class:"pi pi-trash cursor-pointer text-red-800",onClick: t=>L(g.listId,s==null?void 0:s.id)},null,8,Fe)])),s!=null&&s.is_done_todo?(i(),l("div",Pe,Oe)):q("",!0),!(s!=null&&s.is_adding_todo)&&!(s!=null&&s.is_done_todo)?(i(),l("div",qe,Re)):q("",!0)])],2))),128)),g.filtering?q("",!0):(i(),l("div",Ge,[T(r,{class:"m-3",label:"+ Add new todo",onClick:m[0]||(m[0]= s=>k(g.listId))})]))],64)}}}),Ke={class:"flex justify-content-between"},Qe={key:0,class:"flex flex-column p-3"},We={key:1,class:"flex flex-column p-3"},Xe=o("span",{class:"text-primary"},"Name",-1),Ye=["onClick"],Ze={key:2,class:"flex align-items-center px-3"},et=["onClick"],tt=["onClick"],st={key:3,class:"flex align-items-center px-3"},nt=["onClick"],at=["onClick"],ot={key:0,class:"flex flex-column"},it=K({__name:"TheLists",props:{listsData:null,filtering:{type:Boolean}},emits:["deleteList","createList","isEditingList","updateList","deleteTodo","createTodo","isEditingTodo","updateTodo","doneTodo"],setup(g, {emit:h}){const f=g,N={collection:{$each:ee.forEach({name:{required:H}})}},S=se({collection:f.listsData}),a=te(N,S),F=async()=>await a.value.$validate(),p=V(f.listsData),L= c=>{h("deleteList",c)},k=()=>{h("createList")},D= c=>{const r=A(f.listsData,c);f.listsData[r].is_adding_list?L(c):h("isEditingList",{listIndex:r,is_editing_list:!f.listsData[r].is_editing_list})},$=async c=>{const r=A(f.listsData,c);await F()&&h("updateList",{listIndex:r,listId:c,newList:p.value[r]})},y= c=>{h("deleteTodo",c)},d= c=>{h("createTodo",c)},m= c=>{h("isEditingTodo",c)},I= c=>{h("updateTodo",c)},x= c=>{h("doneTodo",c)};return(c, r)=>{const s=C("InputText"),v=C("TheButton");return i(),l(j,null,[(i(!0),l(j,null,P(g.listsData,(t, B)=>(i(),l("div",{key:t.id,class:M([{errorName:w(a).collection.$each.$response.$errors[B].name.length},"flex flex-column bg-gray-200 border-round-xl m-3 w-30rem"])},[o("div",Ke,[t!=null&&t.is_editing_list?(i(),l("div",Qe,[o("label",{class:M([{"p-error":w(a).collection.$each.$response.$errors[B].name.length},"text-primary"]),for:"name"},"Name*",2),T(s,{modelValue:p.value[B].name,"onUpdate:modelValue": _=>p.value[B].name=_,placeholder:"Add name for list",type:"text"},null,8,["modelValue","onUpdate:modelValue"]),(i(!0),l(j,null,P(w(a).collection.$each.$response.$errors[B].name, _=>(i(),l("div",{key:_,class:"p-error"},E(_.$message.replace("Value","Title")),1))),128))])):(i(),l("div",We,[Xe,o("h2",{class:"cursor-pointer text-black-alpha-90",onClick: _=>D(t==null?void 0:t.id)},E(t==null?void 0:t.name),9,Ye)])),t!=null&&t.is_editing_list?(i(),l("div",Ze,[o("i",{class:"pi pi-check mx-3 cursor-pointer text-primary",onClick: _=>$(t==null?void 0:t.id)},null,8,et),o("i",{class:"pi pi-times cursor-pointer text-red-800",onClick: _=>D(t==null?void 0:t.id)},null,8,tt)])):(i(),l("div",st,[o("i",{class:"pi pi-pencil mx-3 cursor-pointer text-blue-800",onClick: _=>D(t==null?void 0:t.id)},null,8,nt),o("i",{class:"pi pi-trash cursor-pointer text-red-800",onClick: _=>L(t==null?void 0:t.id)},null,8,at)]))]),T(He,{filtering:g.filtering,"list-id":parseInt(t==null?void 0:t.id.toString()),"lists-data":g.listsData,"todos-data":t==null?void 0:t.todos,onDeleteTodo:r[0]||(r[0]= _=>y(_)),onCreateTodo:r[1]||(r[1]= _=>d(_)),onIsEditingTodo:r[2]||(r[2]= _=>m(_)),onUpdateTodo:r[3]||(r[3]= _=>I(_)),onDoneTodo:r[4]||(r[4]= _=>x(_))},null,8,["filtering","list-id","lists-data","todos-data"])],2))),128)),g.filtering?q("",!0):(i(),l("div",ot,[T(v,{class:"m-3",label:"+ Add new list",onClick:r[5]||(r[5]= t=>k())})]))],64)}}}),lt={class:"flex flex-column"},dt={class:"flex justify-content-between align-items-center py-3 px-5 bg-cadet-blue"},rt=o("h1",{class:"text-white-alpha-50"},"todo app",-1),ct={class:"mx-3"},ut=o("div",null,null,-1),pt={class:"py-3 px-5 absolute right-0 z-1"},mt={class:"flex flex-column"},ft={class:"p-input-icon-left"},vt=o("i",{class:"pi pi-search z-1"},null,-1),_t={class:"field-checkbox my-3"},gt=o("label",{for:"done"},"Done",-1),ht={class:"field-checkbox"},yt=o("label",{for:"inProgress"},"In progress",-1),xt={class:"flex flex-wrap p-3"},kt=K({__name:"BoardPage",async setup(g){let h,f;const N=pe(),S=V({}),a=V([]),F=ge(),p=parseInt(F.params.id),L=fe(),k=ve(),D=V(!1),$=V(""),y=V(!1),d=V(!1),m=()=>{N.setLists(p,a.value)},I=async()=>await(await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists`)).json(),x=async()=>{try{const e=await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}`);S.value=await e.json(),a.value=await I(),m()}catch(e){D.value||k.add({severity:"error",summary:"Error Message",detail:e,life:3e3})}},c=async()=>{(await I()).length>Z(p).value.length?await x():(S.value=me().value.find(e=>e.id==p),a.value=Z(p).value)},r=()=>{a.value.forEach((e, n)=>{a.value[n].todos=e.todos.filter(({title:b,content:U,deadline:z})=>[b,U,new Date(z).toLocaleString("sk-SK")].some(R=>R.toLowerCase().includes($.value.toLowerCase())))})},s=()=>{a.value.forEach((e, n)=>{a.value[n].todos=e.todos.filter(({is_done_todo:b})=>[b].some(U=>U===y.value))})},v=()=>{a.value.forEach((e, n)=>{a.value[n].todos=e.todos.filter(({is_done_todo:b})=>[b].some(U=>!U===d.value))})},t=async()=>{D.value=!0,await c(),$.value!==""&&!y.value&&!d.value?r():$.value===""&&y.value&&!d.value?s():$.value===""&&!y.value&&d.value?v():$.value===""&&y.value&&d.value?(s(),v()):$.value!==""&&y.value&&!d.value?(r(),s()):$.value!==""&&!y.value&&d.value?(r(),v()):$.value!==""&&y.value&&d.value&&r()},B=async e=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${e}`,{method:"DELETE"}),k.add({severity:"success",summary:"Success Message",detail:"List deleted successfully",life:3e3})}catch(n){k.add({severity:"error",summary:"Error Message",detail:n,life:3e3})}},_=async e=>{await L.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:async()=>{const n=A(a.value,e);a.value.splice(n,1),await B(e),m(),await t()},reject:()=>{}})},ne=async()=>{a.value.push({id:a.value.length+1,boardId:p,name:"",is_adding_list:!0,is_editing_list:!1,todos:[]});const e=a.value.length-1;await Q({listIndex:e,is_editing_list:!0})},Q=async e=>{a.value[e.listIndex].is_editing_list=e.is_editing_list,e.is_editing_list||await c()},ae=async e=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.value[e.listIndex].name})}),k.add({severity:"success",summary:"Success Message",detail:"List created successfully",life:3e3})}catch(n){k.add({severity:"error",summary:"Error Message",detail:n,life:3e3})}},oe=async e=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${e.listId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value[e.listIndex])}),k.add({severity:"success",summary:"Success Message",detail:"List updated successfully",life:3e3})}catch(n){k.add({severity:"error",summary:"Error Message",detail:n,life:3e3})}},ie=async e=>{a.value[e.listIndex]=e.newList,a.value[e.listIndex].is_editing_list=!1,a.value[e.listIndex].is_adding_list?(a.value[e.listIndex].is_adding_list=!1,await ae(e)):await oe(e),m(),await t()},J=async(e, n)=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.value[n])}),k.add({severity:"success",summary:"Success Message",detail:"Todo updated successfully",life:3e3})}catch(b){k.add({severity:"error",summary:"Error Message",detail:b,life:3e3})}},le=async e=>{await L.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:async()=>{const n=A(a.value,e.listId),b=O(a.value[n].todos,e.todoId);a.value[n].todos.splice(b,1),await J(e.listId,n),m(),await t()},reject:()=>{}})},de=async e=>{const n=A(a.value,e);a.value[n].todos.push({id:a.value[n].todos.length+1,title:"",content:"",deadline:"",is_adding_todo:!0,is_editing_todo:!1,is_done_todo:!1});const b=a.value[n].todos.length-1;await W({listIndex:n,todoIndex:b,is_editing_todo:!0})},W=async e=>{a.value[e.listIndex].todos[e.todoIndex].is_editing_todo=e.is_editing_todo,e.is_editing_todo||await c()},re=async e=>{a.value[e.listIndex].todos[e.todoIndex]=e.newTodo,a.value[e.listIndex].todos[e.todoIndex].is_adding_todo=!1,a.value[e.listIndex].todos[e.todoIndex].is_editing_todo=!1,await J(e.listId,e.listIndex),m(),await t()},ce=async e=>{a.value[e.listIndex].todos[e.todoIndex].is_done_todo=e.is_done_todo,await J(e.listId,e.listIndex),m(),await t()};return[h,f]=_e(()=>c()),await h,f(),(e, n)=>{var X;const b=C("RouterLink"),U=C("InputText"),z=C("TheCheckbox"),R=C("AccordionTab"),ue=C("TheAccordion");return i(),l("div",lt,[o("div",dt,[T(b,{class:"no-underline",to:"/"},{default:G(()=>[rt]),_:1}),o("h1",ct,E((X=S.value)==null?void 0:X.title),1),ut]),o("div",pt,[T(ue,null,{default:G(()=>[T(R,{header:"Filter"},{default:G(()=>[o("div",mt,[o("span",ft,[vt,T(U,{modelValue:$.value,"onUpdate:modelValue":n[0]||(n[0]= u=>$.value=u),placeholder:"Search",type:"text",onInput:n[1]||(n[1]= u=>t())},null,8,["modelValue"])]),o("div",_t,[T(z,{modelValue:y.value,"onUpdate:modelValue":n[2]||(n[2]= u=>y.value=u),binary:!0,"input-id":"done",onInput:n[3]||(n[3]= u=>t())},null,8,["modelValue"]),gt]),o("div",ht,[T(z,{modelValue:d.value,"onUpdate:modelValue":n[4]||(n[4]= u=>d.value=u),binary:!0,"input-id":"inProgress",onInput:n[5]||(n[5]= u=>t())},null,8,["modelValue"]),yt])])]),_:1})]),_:1})]),o("div",xt,[T(it,{filtering:D.value,"lists-data":a.value,onDeleteList:n[6]||(n[6]= u=>_(u)),onCreateList:n[7]||(n[7]= u=>ne()),onIsEditingList:n[8]||(n[8]= u=>Q(u)),onUpdateList:n[9]||(n[9]= u=>ie(u)),onDeleteTodo:n[10]||(n[10]= u=>le(u)),onCreateTodo:n[11]||(n[11]= u=>de(u)),onIsEditingTodo:n[12]||(n[12]= u=>W(u)),onUpdateTodo:n[13]||(n[13]= u=>re(u)),onDoneTodo:n[14]||(n[14]= u=>ce(u))},null,8,["filtering","lists-data"])])])}}});export{kt as default};
