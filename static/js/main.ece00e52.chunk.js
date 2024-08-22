(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=function(){return r.a.createElement("h2",null,"Expense Tracker")},o=n(2),i=n(7),s=n(1),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});case"START_EDIT_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{currentTransaction:t.payload});case"UPDATE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.map((function(e){return e.id===t.payload.id?t.payload:e})),currentTransaction:null});default:return e}},E={transactions:[],currentTransaction:null},d=Object(a.createContext)(E),p=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,currentTransaction:l.currentTransaction,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})},startEditTransaction:function(e){u({type:"START_EDIT_TRANSACTION",payload:e})},updateTransaction:function(e){u({type:"UPDATE_TRANSACTION",payload:e})}}},t)};var f=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,function(e){var t=e.toFixed(2).split(".");return"$ "+("-"===t[0].split("")[0]?"-":"")+t[0].split("").reverse().reduce((function(e,t,n,a){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}(e)))};function T(e){var t=e.toFixed(2).split(".");return"$ "+t[0].split("").reverse().reduce((function(e,t,n,a){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},T(t))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},T(n))))};var v=function(e){var t=e.transaction,n=Object(a.useContext)(d),c=n.deleteTransaction,l=n.startEditTransaction,u=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,u,function(e){var t=e.toFixed(2).split(".");return"$ "+t[0].split("").reverse().reduce((function(e,t,n){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}(t.amount)),r.a.createElement("button",{onClick:function(){return c(t.id)},className:"delete-btn"},"x"),r.a.createElement("button",{onClick:function(){return l(t)},className:"edit-btn"},"Edit"))},O=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},N=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(13);var A=function(){return r.a.createElement(p,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(N,null)))};l.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ece00e52.chunk.js.map