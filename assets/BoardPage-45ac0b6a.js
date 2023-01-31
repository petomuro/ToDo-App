import{c as ae,r as W,u as G,d as A,e as J,l as te,a as ge,b as he,g as se,h as oe}from "./index-5fda874c.js";import{d as X,r as ie,a as B,w as ne,g as E,o as r,c as u,F as P,b as q,n as F,u as D,e as a,f as b,t as U,G as R,j as ye,k as xe,l as Te,i as Q,H as $e}from "./index-6359d213.js";const ke={key:0,class:"flex flex-column p-3"},we={class:"flex flex-column my-3"},De=a("label",{class:"text-primary",for:"content"},"Content",-1),be=["onClick"],Ie={class:"flex flex-column"},Ce=a("span",{class:"text-primary"},"Title",-1),Le={class:"text-black-alpha-90"},Ee={class:"flex flex-column my-3"},Ve=a("span",{class:"text-primary"},"Content",-1),Ae={class:"text-black-alpha-90"},Ne={class:"flex flex-column"},Se=a("span",{class:"text-primary"},"Deadline",-1),Be={class:"text-black-alpha-90"},Ue={class:"flex justify-content-between align-items-center"},Me={key:0,class:"flex align-items-center p-3"},je=["onClick"],Fe=["onClick"],Pe={key:1,class:"flex align-items-center p-3"},ze=["onClick"],Oe=["onClick"],qe=["onClick"],Je=["onClick"],Re={key:2,class:"flex align-items-center p-3"},Ge=a("span",{class:"border-2 border-round-xl p-2 bg-green-800 border-green-800"},"Done",-1),He=[Ge],Ke={key:3,class:"flex align-items-center p-3"},Qe=a("span",{class:"border-2 border-round-xl p-2 bg-orange-800 border-orange-800"},"In progress",-1),We=[Qe],Xe={key:0,class:"flex"},Ye=X({__name:"TheTodos",props:{listId:null,listsData:null,todosData:null,filtering:{type:Boolean}},emits:["deleteTodo","createTodo","closeEditingNewTodo","isEditingTodo","updateTodo","doneTodo"],setup(f, {emit:m}){const n=f,M={collection:{$each:ae.forEach({title:{required:W},deadline:{required:W}})}},L=ie({collection:n.todosData});let o=G(M,L);const O=async()=>await o.value.$validate(),p=B(n.todosData),z=(h, y)=>{m("deleteTodo",{listId:h,todoId:y})},I= h=>{m("createTodo",h)},C= h=>{m("closeEditingNewTodo",h)},g=(h, y)=>{const x=A(n.listsData,h),T=J(n.todosData,y);n.todosData[n.todosData.length-1].is_adding_todo?C(x):m("isEditingTodo",{listIndex:x,todoIndex:T,is_editing_todo:!n.todosData[T].is_editing_todo})},w=async(h, y)=>{const x=A(n.listsData,h);let T=J(n.todosData,y);n.todosData[T].is_editing_todo||(T=y-1),await O()&&m("updateTodo",{listIndex:x,listId:h,todoIndex:T,todoId:y,newTodo:p.value[T]})},$=(h, y)=>{const x=A(n.listsData,h),T=J(n.todosData,y);m("doneTodo",{listIndex:x,listId:h,todoIndex:T,todoId:y,is_done_todo:!n.todosData[T].is_done_todo})};return ne(()=>n.todosData,()=>{p.value=n.todosData,L.collection=n.todosData,o=G(M,L)}),(h, y)=>{const x=E("InputText"),T=E("TheTextarea"),N=E("TheCalendar"),c=E("TheButton");return r(),u(P,null,[(r(!0),u(P,null,q(f.todosData,(e, _)=>(r(),u("div",{key:e.id,class:F([{errorTitle:D(o).collection.$each.$response.$errors[_].title.length,errorDeadline:D(o).collection.$each.$response.$errors[_].deadline.length},"flex flex-column justify-content-between bg-gray-300 border-round-xl m-3"])},[e!=null&&e.is_editing_todo?(r(),u("div",ke,[a("label",{class:F([{"p-error":D(o).collection.$each.$response.$errors[_].title.length},"text-primary"]),for:"title"},"Title*",2),b(x,{id:"title",modelValue:p.value[_].title,"onUpdate:modelValue": l=>p.value[_].title=l,class:F({"p-invalid":D(o).collection.$each.$response.$errors[_].title.length}),placeholder:"Add title for todo",type:"text"},null,8,["modelValue","onUpdate:modelValue","class"]),(r(!0),u(P,null,q(D(o).collection.$each.$response.$errors[_].title, l=>(r(),u("div",{key:l,class:"p-error"},U(l.$message.replace("Value","Title")),1))),128)),a("div",we,[De,b(T,{id:"content",modelValue:p.value[_].content,"onUpdate:modelValue": l=>p.value[_].content=l,"auto-resize":!0,cols:"30",placeholder:"Add content for todo",rows:"5"},null,8,["modelValue","onUpdate:modelValue"])]),a("label",{class:F([{"p-error":D(o).collection.$each.$response.$errors[_].deadline.length},"text-primary"]),for:"deadline"},"Deadline*",2),b(N,{id:"deadline",modelValue:p.value[_].deadline,"onUpdate:modelValue":[l=>p.value[_].deadline=l, l=>D(te)(p.value[_].deadline)],class:F({"p-invalid":D(o).collection.$each.$response.$errors[_].deadline.length}),"date-format":"dd.mm.yy",placeholder:"Add deadline for todo","show-time":""},null,8,["modelValue","onUpdate:modelValue","class"]),(r(!0),u(P,null,q(D(o).collection.$each.$response.$errors[_].deadline, l=>(r(),u("div",{key:l,class:"p-error"},U(l.$message.replace("Value","Deadline")),1))),128))])):(r(),u("div",{key:1,class:"flex flex-column p-3 cursor-pointer",onClick: l=>g(f.listId,e==null?void 0:e.id)},[a("div",Ie,[Ce,a("h3",Le,U(e==null?void 0:e.title),1)]),a("div",Ee,[Ve,a("p",Ae,U(e==null?void 0:e.content),1)]),a("div",Ne,[Se,a("p",Be,U(D(te)(e==null?void 0:e.deadline)),1)])],8,be)),a("div",Ue,[e!=null&&e.is_editing_todo?(r(),u("div",Me,[a("i",{class:"pi pi-check cursor-pointer text-primary",onClick: l=>w(f.listId,e==null?void 0:e.id)},null,8,je),a("i",{class:"pi pi-times cursor-pointer mx-3 text-red-800",onClick: l=>g(f.listId,e==null?void 0:e.id)},null,8,Fe)])):(r(),u("div",Pe,[e!=null&&e.is_done_todo?(r(),u("i",{key:1,class:"pi pi-times cursor-pointer text-red-800",onClick: l=>$(f.listId,e==null?void 0:e.id)},null,8,Oe)):(r(),u("i",{key:0,class:"pi pi-check cursor-pointer text-primary",onClick: l=>$(f.listId,e==null?void 0:e.id)},null,8,ze)),a("i",{class:"pi pi-pencil mx-3 cursor-pointer text-blue-800",onClick: l=>g(f.listId,e==null?void 0:e.id)},null,8,qe),a("i",{class:"pi pi-trash cursor-pointer text-red-800",onClick: l=>z(f.listId,e==null?void 0:e.id)},null,8,Je)])),e!=null&&e.is_done_todo?(r(),u("div",Re,He)):R("",!0),!(e!=null&&e.is_adding_todo)&&!(e!=null&&e.is_done_todo)?(r(),u("div",Ke,We)):R("",!0)])],2))),128)),!f.listsData[D(A)(f.listsData,f.listId)].is_adding_list&&!f.filtering?(r(),u("div",Xe,[b(c,{class:"m-3",label:"+ Add new todo",onClick:y[0]||(y[0]= e=>I(f.listId))})])):R("",!0)],64)}}}),Ze={class:"flex justify-content-between"},et={key:0,class:"flex flex-column p-3"},tt={key:1,class:"flex flex-column p-3"},st=a("span",{class:"text-primary"},"Name",-1),ot=["onClick"],at={key:2,class:"flex align-items-center px-3"},it=["onClick"],nt=["onClick"],lt={key:3,class:"flex align-items-center px-3"},dt=["onClick"],ct=["onClick"],rt={key:0,class:"flex flex-column"},ut=X({__name:"TheLists",props:{listsData:null,filtering:{type:Boolean}},emits:["deleteList","createList","closeEditingNewList","isEditingList","updateList","deleteTodo","createTodo","closeEditingNewTodo","isEditingTodo","updateTodo","doneTodo"],setup(f, {emit:m}){const n=f,M={collection:{$each:ae.forEach({name:{required:W}})}},L=ie({collection:n.listsData});let o=G(M,L);const O=async()=>await o.value.$validate(),p=B(n.listsData),z= c=>{m("deleteList",c)},I=()=>{m("createList")},C=()=>{m("closeEditingNewList")},g= c=>{const e=A(n.listsData,c);n.listsData[n.listsData.length-1].is_adding_list?C():m("isEditingList",{listIndex:e,is_editing_list:!n.listsData[e].is_editing_list})},w=async c=>{let e=A(n.listsData,c);n.listsData[e].is_editing_list||(e=c-1),await O()&&m("updateList",{listIndex:e,listId:c,newList:p.value[e]})},$= c=>{m("deleteTodo",c)},h= c=>{m("createTodo",c)},y= c=>{m("closeEditingNewTodo",c)},x= c=>{m("isEditingTodo",c)},T= c=>{m("updateTodo",c)},N= c=>{m("doneTodo",c)};return ne(()=>n.listsData,()=>{p.value=n.listsData,L.collection=n.listsData,o=G(M,L)}),(c, e)=>{const _=E("InputText"),l=E("TheButton");return r(),u(P,null,[(r(!0),u(P,null,q(f.listsData,(i, j)=>(r(),u("div",{key:i.id,class:F([{errorName:D(o).collection.$each.$response.$errors[j].name.length},"flex flex-column bg-gray-200 border-round-xl m-3 w-30rem"])},[a("div",Ze,[i!=null&&i.is_editing_list?(r(),u("div",et,[a("label",{class:F([{"p-error":D(o).collection.$each.$response.$errors[j].name.length},"text-primary"]),for:"name"},"Name*",2),b(_,{modelValue:p.value[j].name,"onUpdate:modelValue": v=>p.value[j].name=v,placeholder:"Add name for list",type:"text"},null,8,["modelValue","onUpdate:modelValue"]),(r(!0),u(P,null,q(D(o).collection.$each.$response.$errors[j].name, v=>(r(),u("div",{key:v,class:"p-error"},U(v.$message.replace("Value","Title")),1))),128))])):(r(),u("div",tt,[st,a("h2",{class:"cursor-pointer text-black-alpha-90",onClick: v=>g(i==null?void 0:i.id)},U(i==null?void 0:i.name),9,ot)])),i!=null&&i.is_editing_list?(r(),u("div",at,[a("i",{class:"pi pi-check mx-3 cursor-pointer text-primary",onClick: v=>w(i==null?void 0:i.id)},null,8,it),a("i",{class:"pi pi-times cursor-pointer text-red-800",onClick: v=>g(i==null?void 0:i.id)},null,8,nt)])):(r(),u("div",lt,[a("i",{class:"pi pi-pencil mx-3 cursor-pointer text-blue-800",onClick: v=>g(i==null?void 0:i.id)},null,8,dt),a("i",{class:"pi pi-trash cursor-pointer text-red-800",onClick: v=>z(i==null?void 0:i.id)},null,8,ct)]))]),b(Ye,{filtering:f.filtering,"list-id":parseInt(i==null?void 0:i.id.toString()),"lists-data":f.listsData,"todos-data":i==null?void 0:i.todos,onDeleteTodo:e[0]||(e[0]= v=>$(v)),onCreateTodo:e[1]||(e[1]= v=>h(v)),onCloseEditingNewTodo:e[2]||(e[2]= v=>y(v)),onIsEditingTodo:e[3]||(e[3]= v=>x(v)),onUpdateTodo:e[4]||(e[4]= v=>T(v)),onDoneTodo:e[5]||(e[5]= v=>N(v))},null,8,["filtering","list-id","lists-data","todos-data"])],2))),128)),f.filtering?R("",!0):(r(),u("div",rt,[b(l,{class:"m-3",label:"+ Add new list",onClick:e[6]||(e[6]= i=>I())})]))],64)}}}),pt={class:"flex flex-column"},vt={class:"flex justify-content-between align-items-center py-3 px-5 bg-cadet-blue"},ft=a("h1",{class:"text-white-alpha-50"},"todo app",-1),mt={class:"mx-3"},_t=a("div",null,null,-1),gt={class:"py-3 px-5 absolute right-0 z-1"},ht={class:"flex flex-column"},yt={class:"p-input-icon-left"},xt=a("i",{class:"pi pi-search z-1"},null,-1),Tt={class:"field-checkbox my-3"},$t=a("label",{for:"done"},"Done",-1),kt={class:"field-checkbox"},wt=a("label",{for:"inProgress"},"In progress",-1),Dt={class:"flex flex-wrap p-3"},Ct=X({__name:"BoardPage",async setup(f){let m,n;const M=ge(),L=B({}),o=B([]),O=$e(),p=parseInt(O.params.id),z=ye(),I=xe(),C=B(!1),g=B(""),w=B(!1),$=B(!1),h=()=>{M.setLists(p,o.value)},y=async()=>await(await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists`)).json(),x=async()=>{try{const t=await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}`);L.value=await t.json(),o.value=await y(),h()}catch(t){C.value||I.add({severity:"error",summary:"Error Message",detail:t,life:3e3})}},T=async()=>{const t=await y(),s=se(p).value,k=oe(t.map(S=>S.todos)),V=oe(s.map(S=>S.todos));return t.length!==s.length||k.length!==V.length},N=async()=>{await T()?await x():(L.value=he().value.find(t=>t.id==p),o.value=se(p).value)},c=()=>{o.value.forEach((t, s)=>{o.value[s].todos=t.todos.filter(({title:k,content:V,deadline:S})=>[k,V,new Date(S).toLocaleString("sk-SK")].some(K=>K.toLowerCase().includes(g.value.toLowerCase())))})},e=()=>{o.value.forEach((t, s)=>{o.value[s].todos=t.todos.filter(({is_done_todo:k})=>[k].some(V=>V===w.value))})},_=()=>{o.value.forEach((t, s)=>{o.value[s].todos=t.todos.filter(({is_done_todo:k})=>[k].some(V=>!V===$.value))})},l=async()=>{C.value=!0,await N(),g.value!==""&&!w.value&&!$.value?c():g.value===""&&w.value&&!$.value?e():g.value===""&&!w.value&&$.value?_():g.value===""&&w.value&&$.value?(e(),_()):g.value!==""&&w.value&&!$.value?(c(),e()):g.value!==""&&!w.value&&$.value?(c(),_()):g.value!==""&&w.value&&$.value?c():C.value=!1},i=async t=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${t}`,{method:"DELETE"}),I.add({severity:"success",summary:"Success Message",detail:"List deleted successfully",life:3e3})}catch(s){I.add({severity:"error",summary:"Error Message",detail:s,life:3e3})}},j= t=>{z.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:async()=>{const s=A(o.value,t);o.value.splice(s,1),await i(t),await x(),C.value&&await l()},reject:()=>{}})},v=async()=>{o.value.push({id:o.value.length+1,boardId:p,name:"",is_adding_list:!0,is_editing_list:!1,todos:[]});const t=o.value.length-1;await Y({listIndex:t,is_editing_list:!0})},le=()=>{o.value.pop()},Y=async t=>{o.value[t.listIndex].is_editing_list=t.is_editing_list,t.is_editing_list||await N()},de=async t=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o.value[t.listIndex].name})}),I.add({severity:"success",summary:"Success Message",detail:"List created successfully",life:3e3})}catch(s){I.add({severity:"error",summary:"Error Message",detail:s,life:3e3})}},ce=async t=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${t.listId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value[t.listIndex])}),I.add({severity:"success",summary:"Success Message",detail:"List updated successfully",life:3e3})}catch(s){I.add({severity:"error",summary:"Error Message",detail:s,life:3e3})}},re=async t=>{o.value[t.listIndex]=t.newList,o.value[t.listIndex].is_editing_list=!1,o.value[t.listIndex].is_adding_list?(o.value[t.listIndex].is_adding_list=!1,await de(t)):await ce(t),await x(),C.value&&await l()},H=async(t, s)=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${p}/lists/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value[s])}),I.add({severity:"success",summary:"Success Message",detail:"Todo updated successfully",life:3e3})}catch(k){I.add({severity:"error",summary:"Error Message",detail:k,life:3e3})}},ue= t=>{z.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:async()=>{const s=A(o.value,t.listId),k=J(o.value[s].todos,t.todoId);o.value[s].todos.splice(k,1),await H(t.listId,s),await x(),C.value&&await l()},reject:()=>{}})},pe=async t=>{const s=A(o.value,t);o.value[s].todos.push({id:o.value[s].todos.length+1,title:"",content:"",deadline:"",is_adding_todo:!0,is_editing_todo:!1,is_done_todo:!1});const k=o.value[s].todos.length-1;await Z({listIndex:s,todoIndex:k,is_editing_todo:!0})},ve= t=>{o.value[t].todos.pop()},Z=async t=>{o.value[t.listIndex].todos[t.todoIndex].is_editing_todo=t.is_editing_todo,t.is_editing_todo||await N()},fe=async t=>{o.value[t.listIndex].todos[t.todoIndex]=t.newTodo,o.value[t.listIndex].todos[t.todoIndex].is_adding_todo=!1,o.value[t.listIndex].todos[t.todoIndex].is_editing_todo=!1,await H(t.listId,t.listIndex),await x(),C.value&&await l()},me=async t=>{o.value[t.listIndex].todos[t.todoIndex].is_done_todo=t.is_done_todo,await H(t.listId,t.listIndex),await x(),C.value&&await l()};return[m,n]=Te(()=>N()),await m,n(),(t, s)=>{var ee;const k=E("RouterLink"),V=E("InputText"),S=E("TheCheckbox"),K=E("AccordionTab"),_e=E("TheAccordion");return r(),u("div",pt,[a("div",vt,[b(k,{class:"no-underline",to:"/"},{default:Q(()=>[ft]),_:1}),a("h1",mt,U((ee=L.value)==null?void 0:ee.title),1),_t]),a("div",gt,[b(_e,null,{default:Q(()=>[b(K,{header:"Filter"},{default:Q(()=>[a("div",ht,[a("span",yt,[xt,b(V,{modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]= d=>g.value=d),placeholder:"Search",type:"text",onInput:s[1]||(s[1]= d=>l())},null,8,["modelValue"])]),a("div",Tt,[b(S,{modelValue:w.value,"onUpdate:modelValue":s[2]||(s[2]= d=>w.value=d),binary:!0,"input-id":"done",onInput:s[3]||(s[3]= d=>l())},null,8,["modelValue"]),$t]),a("div",kt,[b(S,{modelValue:$.value,"onUpdate:modelValue":s[4]||(s[4]= d=>$.value=d),binary:!0,"input-id":"inProgress",onInput:s[5]||(s[5]= d=>l())},null,8,["modelValue"]),wt])])]),_:1})]),_:1})]),a("div",Dt,[b(ut,{filtering:C.value,"lists-data":o.value,onDeleteList:s[6]||(s[6]= d=>j(d)),onCreateList:s[7]||(s[7]= d=>v()),onCloseEditingNewList:s[8]||(s[8]= d=>le()),onIsEditingList:s[9]||(s[9]= d=>Y(d)),onUpdateList:s[10]||(s[10]= d=>re(d)),onDeleteTodo:s[11]||(s[11]= d=>ue(d)),onCreateTodo:s[12]||(s[12]= d=>pe(d)),onCloseEditingNewTodo:s[13]||(s[13]= d=>ve(d)),onIsEditingTodo:s[14]||(s[14]= d=>Z(d)),onUpdateTodo:s[15]||(s[15]= d=>fe(d)),onDoneTodo:s[16]||(s[16]= d=>me(d))},null,8,["filtering","lists-data"])])])}}});export{Ct as default};
