(this.webpackJsonpcrudoperationwzreact=this.webpackJsonpcrudoperationwzreact||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),i=n(1),s=n(2),u=n(4),o=n(3),m=n(5),d=(n(15),n(6)),h=n(7),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state=Object(h.a)({},n.EditStateFunction()),n.handleInputChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddOrEdit(n.state)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"EditStateFunction",value:function(){return-1===this.props.currentIndex?{benAcctNo:"",iFSCode:"",benName:"",amount:""}:this.props.list[this.props.currentIndex]}},{key:"componentDidUpdate",value:function(e){e.currentIndex==this.props.currentIndex&&e.list.length==this.props.list.length||this.setState(Object(h.a)({},this.EditStateFunction()))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:"form"},r.a.createElement("h2",null,"Order Form:"),r.a.createElement("input",{className:"input",name:"benAcctNo",placeholder:"Account Number",value:this.state.benAcctNo,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{className:"input",name:"iFSCode",placeholder:"iFSCode",value:this.state.iFSCode,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{className:"input",name:"benName",placeholder:"Clients Name",value:this.state.benName,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{className:"input",name:"amount",placeholder:"Amount",value:this.state.amount,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"submit"},"Submit")))}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={list:n.returnList(),currentIndex:-1},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddOrEdit(n.state)},n.onAddOrEdit=function(e){var t=n.returnList();-1===n.state.currentIndex?t.push(e):t[n.state.currentIndex]=e,localStorage.setItem("transactions",JSON.stringify(t)),n.setState({list:t,currentIndex:-1})},n.handleEdit=function(e){n.setState({currentIndex:e})},n.handleDelete=function(e){var t=n.returnList();t.splice(e,1),localStorage.setItem("transactions",JSON.stringify(t)),n.setState({list:t,currentIndex:-1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"returnList",value:function(){return null==localStorage.getItem("transactions")&&localStorage.setItem("transactions",JSON.stringify([])),JSON.parse(localStorage.getItem("transactions"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,{onAddOrEdit:this.onAddOrEdit,currentIndex:this.state.currentIndex,list:this.state.list}),r.a.createElement("hr",null),r.a.createElement("table",null,r.a.createElement("tbody",null,this.state.list.map((function(t,n){return r.a.createElement("tr",{key:n,className:"frame"},r.a.createElement("td",{className:"one"},t.benAcctNo),r.a.createElement("td",{className:"two"},t.iFSCode),r.a.createElement("td",{className:"three"},t.benName),r.a.createElement("td",{className:"four"},t.amount),r.a.createElement("td",null,r.a.createElement("button",{className:"edit",onClick:function(){return e.handleEdit(n)}},"Edit"),r.a.createElement("button",{className:"dlt",onClick:function(){return e.handleDelete(n)}},"Delete")))})))))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4471734b.chunk.js.map