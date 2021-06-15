(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__3qnmz",filter__label:"Filter_filter__label__371Y8"}},13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},3:function(t,e,n){t.exports={form:"Form_form__2J9PY",form__input:"Form_form__input__3270m",form__button:"Form_form__button__uysZz"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),i=n(15),o=n(5),l=n(6),u=n(8),m=n(7),d=n(9),b=n.n(d),_=n(0),h=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(_.jsx)("ul",{className:b.a.contacts_list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(_.jsxs)("li",{className:b.a.contacts_item,children:[Object(_.jsxs)("p",{children:[a,":"]}),Object(_.jsx)("p",{children:r}),Object(_.jsx)("button",{className:b.a.contacts_list__button,onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},f=n(13),j=n(14),p=n(2),O=n.n(p),x=n(3),C=n.n(x),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=O.a.generate(),t.numberInputId=O.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsx)("label",{className:C.a.form__lable,htmlFor:this.nameInputId,children:"Name"}),Object(_.jsx)("input",{className:C.a.form__input,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(_.jsx)("label",{className:C.a.form__lable,htmlFor:this.numberInputId,children:"Number"}),Object(_.jsx)("input",{className:C.a.form__input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(_.jsx)("button",{className:C.a.form__button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),g=n(10),N=n.n(g),y=O.a.generate(),F=function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("div",{className:N.a.filter,children:[Object(_.jsx)("label",{className:N.a.filter__label,htmlFor:y,children:"Find contacts by name"}),Object(_.jsx)("input",{className:N.a.filter__input,type:"text",name:"filter",id:y,value:e,onChange:n})]})},I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:f,filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," already exist"));else{var r={id:O.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h1",{className:"title",children:"Phonebook"}),Object(_.jsx)(v,{onSubmit:this.addContact}),Object(_.jsx)("h2",{className:"title",children:"Contacts"}),Object(_.jsx)(F,{value:t,onChange:this.changeFilter}),Object(_.jsx)(h,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(29),n(30);s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(I,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contacts_list:"ContactsList_contacts_list__2kVe0",contacts_item:"ContactsList_contacts_item__3mzl-",contacts_list__button:"ContactsList_contacts_list__button__3kBlq"}}},[[31,1,2]]]);
//# sourceMappingURL=main.39b570b8.chunk.js.map