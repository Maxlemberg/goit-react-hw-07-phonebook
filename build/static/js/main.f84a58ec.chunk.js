(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={input:"Input_input__2HnG0",form:"Input_form__2x0hd",label:"Input_label__1qY8C",disabled:"Input_disabled__CFq4X",button:"Input_button__ixZn7 Input_disabled__CFq4X"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),r=n(10),l=n(7),o=n(11),u=n(12),m=n(15),b=n(14),d=n(13),p=n.n(d),h=n(2),j=n.n(h),_=n(0),f=function(t){var e=t.handleSubmit,n=t.handleInput,a=t.value,c=t.number,s=!(a&&c);return Object(_.jsxs)("form",{onSubmit:e,className:j.a.form,children:[Object(_.jsxs)("label",{htmlFor:"",className:j.a.label,children:["Name",Object(_.jsx)("input",{className:j.a.input,type:"text",placeholder:"Enter name",onInput:n,value:a,name:"name"})]}),Object(_.jsxs)("label",{className:j.a.label,children:["Number",Object(_.jsx)("input",{className:j.a.input,type:"number",placeholder:"Enter number",onInput:n,value:c,name:"number"})]}),s?Object(_.jsx)("button",{type:"submit",disabled:s,className:j.a.disabled,children:"Add contact"}):Object(_.jsx)("button",{type:"submit",disabled:s,className:j.a.button,children:"Add contact"})]})},x=n(5),O=n.n(x),v=function(t){var e=t.filter,n=t.handleInput;return Object(_.jsxs)("label",{className:O.a.cont,htmlFor:"",children:[Object(_.jsx)("h3",{className:O.a.title,children:"Find contacts by name"}),Object(_.jsx)("input",{type:"text",value:e,className:O.a.input,name:"filter",onInput:n})]})},N=n(3),I=n.n(N),S=function(t){var e=t.contacts,n=t.filter,a=t.onDelete,c=n.toLowerCase(),s=e.filter((function(t){return t.name.toLowerCase().includes(c)})).map((function(t){var e=t.id,n=t.name,c=t.number;return Object(_.jsxs)("li",{className:I.a.itemLi,children:[Object(_.jsxs)("span",{className:I.a.text,children:[n,": ",c]}),Object(_.jsx)("button",{type:"button",className:I.a.button,id:e,onClick:a,children:"Delete"})]},e)}));return Object(_.jsx)("ul",{className:I.a.list,children:s})},g=n(6),y=n.n(g),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:Object(l.a)(t.props.contacts),filter:"",name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(n.contacts.some((function(t){return t.name===a})))alert("\u0406\u043c\u044f ".concat(a," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454!"));else{var s={id:p.a.generate(),name:a,number:c};t.setState((function(t){return{contacts:[s].concat(Object(l.a)(t.contacts))}})),t.resetInput()}},t.resetInput=function(){t.setState({name:"",number:""})},t.handleInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(r.a)({},a,c))},t.onDelete=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e.target.id}));t.setState({contacts:Object(l.a)(n)})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts.length!==e.contacts.length&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.handleSubmit,e=this.handleInput,n=this.onDelete,a=this.state,c=a.name,s=a.number,i=a.filter,r=a.contacts;return Object(_.jsxs)("div",{className:y.a.container,children:[Object(_.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(_.jsx)(f,{handleSubmit:t,handleInput:e,value:c,number:s}),Object(_.jsx)("h2",{className:y.a.title2,children:"Contacts"}),Object(_.jsx)(v,{fiter:i,handleInput:e}),Object(_.jsx)(S,{contacts:r,filter:i,onDelete:n})]})}}]),n}(a.Component);C.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]};var k=C;i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={itemLi:"ContactsList_itemLi__2HHha",button:"ContactsList_button__37c9a",text:"ContactsList_text__11grw",list:"ContactsList_list__kF9ZA"}},5:function(t,e,n){t.exports={title:"Filter_title__3wEM4",input:"Filter_input__1U0eI",cont:"Filter_cont__1rhc9"}},6:function(t,e,n){t.exports={container:"App_container__3Tg8a",title:"App_title__28GmG",title2:"App_title2__1i-NN App_title__28GmG"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f84a58ec.chunk.js.map