"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[102],{7102:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,a,o,s,d,p,c=t(9434),l=t(2791),x=t(3101),u=t(5162),h=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},f=function(n){return n.filters.filter},b=t(4768),j=t(168),Z=t(7691),v=Z.ZP.ul(r||(r=(0,j.Z)(["\n  padding: 10px;\n"]))),w=Z.ZP.li(i||(i=(0,j.Z)(["\n  margin-bottom: 10px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border: solid 1px #787878;\n  border-radius: 5px;\n"]))),y=Z.ZP.div(a||(a=(0,j.Z)(["\n  margin-right: 15px;\n  border: 1px solid #787878;\n  border-radius: 4px;\n  width: 27px;\n  height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"]))),P=Z.ZP.p(o||(o=(0,j.Z)(["\n  font-size: 24px;\n\n  span {\n    text-decoration: underline;\n  }\n"]))),C=Z.ZP.button(s||(s=(0,j.Z)(["\n  padding: 5px;\n  color: black;\n  margin-right: 0;\n  margin-left: auto;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: red;\n    cursor: pointer;\n  }\n"]))),k=t(184);function z(){var n=(0,c.v9)(h),e=(0,c.v9)(f).toLowerCase(),t=(0,c.I0)(),r=function(n){t((0,u.GK)(n.currentTarget.id))},i=e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;return(0,k.jsx)(v,{children:i.map((function(n){return(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:(0,k.jsx)(b.FJ3,{})}),(0,k.jsxs)(P,{children:[n.name,": ",(0,k.jsx)("span",{children:n.number})]}),(0,k.jsx)(C,{type:"button",id:n.id,onClick:r,children:(0,k.jsx)(b.bjh,{})})]},n.id)}))})}var A=Z.ZP.label(d||(d=(0,j.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 10px;\n  font-size: 25px;\n  color: white;\n  font-weight: 600;\n\n  input {\n    padding: 8px;\n    border-radius: 5px;\n    border: 1px solid grey;\n  }\n"]))),I=Z.ZP.p(p||(p=(0,j.Z)(["\n  margin-top: 10px;\n  margin-bottom: 8px;\n  font-size: 25px;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n"]))),L=t(1993);function F(){var n=(0,c.I0)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(I,{children:"Contacts"}),(0,k.jsxs)(A,{children:["Find contact by the name",(0,k.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,L.l)(e.target.value))}})]})]})}var N,_,T,O,S,q=t(9085),G=(Z.ZP.section(N||(N=(0,j.Z)(["\n  max-width: 740px;\n"]))),Z.ZP.form(_||(_=(0,j.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  input {\n    padding: 8px;\n    border-radius: 5px;\n    border: 1px solid grey;\n  }\n"])))),J=Z.ZP.ul(T||(T=(0,j.Z)(["\n  padding: 0;\n  display: flex;\n"]))),K=Z.ZP.li(O||(O=(0,j.Z)(["\n  margin-right: 10px;\n  list-style: none;\n  p {\n    margin-bottom: 8px;\n    font-size: 25px;\n    color: #fff;\n    font-weight: 500;\n  }\n"]))),B=Z.ZP.button(S||(S=(0,j.Z)(["\n  border-radius: 5px;\n  height: 40px;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: teal;\n    cursor: pointer;\n  }\n\n  svg {\n    margin-right: 10px;\n    width: 25px;\n    height: 25px;\n  }\n"]))),D=function(){var n=(0,c.I0)(),e=(0,c.v9)(h);return(0,k.jsxs)(G,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,a=r.number.value;e.some((function(n){return n.name.toLowerCase().trim()===i.toLowerCase().trim()}))?q.Am.warn("".concat(i," is already in contacts"),{position:q.Am.POSITION.TOP_RIGHT}):(n((0,u.uK)({name:i,number:a})),r.reset())},children:[(0,k.jsxs)(J,{children:[(0,k.jsxs)(K,{children:[(0,k.jsx)("p",{children:"Name"}),(0,k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(K,{children:[(0,k.jsx)("p",{children:"Number"}),(0,k.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,k.jsxs)(B,{type:"submit",children:[(0,k.jsx)(b.moY,{}),"Add contact"]})]})},E=function(){var n=(0,c.I0)(),e=(0,c.v9)(g),t=(0,c.v9)(m);return(0,l.useEffect)((function(){n((0,u.yF)())}),[n]),(0,k.jsxs)("div",{children:[(0,k.jsx)(D,{}),(0,k.jsx)(F,{}),e&&!t&&(0,k.jsx)(x.g4,{height:"80",width:"80",radius:"9",color:"teal",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),(0,k.jsx)(z,{})]})}}}]);
//# sourceMappingURL=102.f3a42ce0.chunk.js.map