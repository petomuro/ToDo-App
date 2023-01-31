import{c as A,r as j,u as N,f as D,a as V}from"./index-1b1c0b01.js";import{d as b,r as O,a as M,o as l,c as d,F as v,b as T,e as o,f as E,g as $,n as I,u as C,t as S,h as P,w as R,i as U,j as L,k as Y,l as F}from"./index-f44d9817.js";const J={key:0,class:"flex flex-column p-3"},W={class:"flex flex-column justify-content-center p-3"},q=o("span",{class:"text-primary"},"Title",-1),H={class:"text-black-alpha-90"},z=o("hr",{class:"mx-1"},null,-1),G={key:2,class:"flex align-items-center py-3"},K=["onClick"],Q=["onClick"],X={key:3,class:"flex align-items-center py-3"},Z=["onClick"],ee=["onClick"],te={class:"flex flex-column"},se=b({__name:"TheBoards",props:{boardsData:null},emits:["deleteBoard","createBoard","isEditingBoard","updateBoard"],setup(g,{emit:u}){const c=g,p={collection:{$each:A.forEach({title:{required:j}})}},s=O({collection:c.boardsData}),f=N(p,s),n=async()=>await f.value.$validate(),m=M(c.boardsData),y=r=>{u("deleteBoard",r)},_=()=>{u("createBoard")},h=r=>{const i=D(c.boardsData,r);c.boardsData[i].is_adding_board?y(r):u("isEditingBoard",{boardIndex:i,is_editing_board:!c.boardsData[i].is_editing_board})},x=async r=>{const i=D(c.boardsData,r);await n()&&u("updateBoard",{boardIndex:i,boardId:r,newBoard:m.value[i]})};return(r,i)=>{const B=$("InputText"),k=$("RouterLink"),w=$("TheButton");return l(),d(v,null,[(l(!0),d(v,null,T(g.boardsData,(e,t)=>(l(),d("div",{key:t,class:I([{errorName:C(f).collection.$each.$response.$errors[t].title.length},"flex flex-column justify-content-center bg-gray-200 border-round-xl m-3 w-20rem"])},[e!=null&&e.is_editing_board?(l(),d("div",J,[o("label",{class:I([{"p-error":C(f).collection.$each.$response.$errors[t].title.length},"text-primary"]),for:"name"},"Title*",2),E(B,{modelValue:m.value[t].title,"onUpdate:modelValue":a=>m.value[t].title=a,placeholder:"Add title for board",type:"text"},null,8,["modelValue","onUpdate:modelValue"]),(l(!0),d(v,null,T(C(f).collection.$each.$response.$errors[t].title,a=>(l(),d("div",{key:a,class:"p-error"},S(a.$message.replace("Value","Title")),1))),128))])):(l(),P(k,{key:1,to:`/${e==null?void 0:e.id}`,class:"no-underline"},{default:R(()=>[o("div",W,[q,o("h2",H,S(e==null?void 0:e.title),1)])]),_:2},1032,["to"])),z,e!=null&&e.is_editing_board?(l(),d("div",G,[o("i",{class:"pi pi-check mx-3 cursor-pointer text-primary",onClick:a=>x(e==null?void 0:e.id)},null,8,K),o("i",{class:"pi pi-times cursor-pointer text-red-800",onClick:a=>h(e==null?void 0:e.id)},null,8,Q)])):(l(),d("div",X,[o("i",{class:"pi pi-pencil mx-3 cursor-pointer text-blue-800",onClick:a=>h(e==null?void 0:e.id)},null,8,Z),o("i",{class:"pi pi-trash cursor-pointer text-red-800",onClick:a=>y(e==null?void 0:e.id)},null,8,ee)]))],2))),128)),o("div",te,[E(w,{class:"m-3",label:"+ Add new board",onClick:i[0]||(i[0]=e=>_())})])],64)}}}),ae=F('<div class="flex flex-column align-items-center p-3 bg-cadet-blue"><div class="flex flex-column align-items-end"><h1 class="text-7xl">todo app</h1><p class="-mt-3">BY PETER MURIN</p></div><div class="flex flex-column"><h2>Hey, What&#39;s up! What do you want to do today?</h2><h2>Start adding items to your to-do list</h2></div></div>',1),oe={class:"flex flex-wrap justify-content-center p-3 bg-flora-white"},ie=o("div",{class:"flex justify-content-center p-3"},[o("h1",{class:"text-black-alpha-90"},"KEEP YOUR DAYS ORGANISED WITH TODO APP")],-1),le=b({__name:"IntroPage",async setup(g){let u,c;const p=V(),s=M([]),f=U(),n=L(),m=()=>{p.setBoards(s.value)},y=async()=>{try{const e=await fetch("https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards");s.value=await e.json(),p.setBoards(s.value),n.add({severity:"success",summary:"Success Message",detail:"Data fetched successfully",life:3e3})}catch(e){n.add({severity:"error",summary:"Error Message",detail:e,life:3e3})}},_=async()=>{p.getBoards?s.value=JSON.parse(p.getBoards):await y()},h=async e=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${e}`,{method:"DELETE"}),n.add({severity:"success",summary:"Success Message",detail:"Board deleted successfully",life:3e3})}catch(t){n.add({severity:"error",summary:"Error Message",detail:t,life:3e3})}},x=async e=>{await f.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:async()=>{const t=D(s.value,e);s.value.splice(t,1),await h(e),m()},reject:()=>{n.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},r=async()=>{s.value.push({id:s.value.length+1,title:"",is_adding_board:!0,is_editing_board:!1});const e=s.value.length-1;await i({boardIndex:e,is_editing_board:!0})},i=async e=>{s.value[e.boardIndex].is_editing_board=e.is_editing_board,e.is_editing_board||await _()},B=async e=>{try{await fetch("https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:s.value[e.boardIndex].title})}),n.add({severity:"success",summary:"Success Message",detail:"Board created successfully",life:3e3})}catch(t){n.add({severity:"error",summary:"Error Message",detail:t,life:3e3})}},k=async e=>{try{await fetch(`https://63d3f5218d4e68c14eb69fe7.mockapi.io/api/v1/boards/${e.boardId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value[e.boardIndex])}),n.add({severity:"success",summary:"Success Message",detail:"Board updated successfully",life:3e3})}catch(t){n.add({severity:"error",summary:"Error Message",detail:t,life:3e3})}},w=async e=>{s.value[e.boardIndex]=e.newBoard,s.value[e.boardIndex].is_editing_board=!1,s.value[e.boardIndex].is_adding_board?(s.value[e.boardIndex].is_adding_board=!1,await B(e)):await k(e),m()};return[u,c]=Y(()=>_()),await u,c(),(e,t)=>(l(),d(v,null,[ae,o("div",oe,[E(se,{"boards-data":s.value,onDeleteBoard:t[0]||(t[0]=a=>x(a)),onCreateBoard:t[1]||(t[1]=a=>r()),onIsEditingBoard:t[2]||(t[2]=a=>i(a)),onUpdateBoard:t[3]||(t[3]=a=>w(a))},null,8,["boards-data"])]),ie],64))}});export{le as default};
