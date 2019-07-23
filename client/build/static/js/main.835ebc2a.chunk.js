(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),s=(a(31),a(7)),i=a(8),l=a(10),u=a(9),m=a(11),h=(a(32),a(5)),d=a.n(h),p=a(13),f=a(3),v=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleSaveBook=a.handleSaveBook.bind(Object(f.a)(Object(f.a)(a))),a.handleDeleteBook=a.handleDeleteBook.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSaveBook",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.props)});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleDeleteBook",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hihi"),e.next=3,fetch("/api/books/".concat(this.props.id),{method:"DELETE"});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log("Server's response to delete request"),console.table(a);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("child props",this.props.id),r.a.createElement("div",{className:"col s12 l6 m8 offset-m2"},r.a.createElement("h2",{className:"header"},this.props.title," ",r.a.createElement("span",{className:"author-span"},"by ",this.props.authors)),r.a.createElement("div",{className:"card horizontal"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.props.image})),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,this.props.description.substring(0,200)+"...",r.a.createElement("br",null),r.a.createElement("a",{href:this.props.link},"Read More..."))),r.a.createElement("div",{className:"card-action"},!0===this.props.delete?r.a.createElement("a",{className:"waves-effect waves-light btn right",onClick:this.handleDeleteBook},"Delete"):r.a.createElement("a",{className:"waves-effect waves-light btn right",onClick:this.handleSaveBook},"save"),r.a.createElement("a",{className:"waves-effect waves-light btn right",href:this.props.link},"Buy")))))}}]),t}(n.Component));v.defaultProps={title:"No Title",authors:"Unknown Author",description:"",image:"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",link:"#"};var b=v,k=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchQuery:"",booksArray:[]},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.requestBooksAPI(),this.setState({searchQuery:""})}},{key:"handleChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"requestBooksAPI",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,n,r,o,c,s,i,l,u,m,h;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.searchQuery));case 2:return t=e.sent,e.next=5,t.json();case 5:for(a=e.sent,n=[],r=0;r<a.items.length;r++)o=a.items[r].volumeInfo,c=o.title,s=o.authors,i=o.description,l=o.imageLinks,u=o.infoLink,m=void 0,m=void 0===l?"":l.thumbnail,h={title:c,authors:s,description:i,image:m,link:u},n.push(h);this.setState({booksArray:[].concat(n)}),console.log(this.state.booksArray);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Search container"},r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s8"},r.a.createElement("i",{className:"material-icons prefix"},"search"),r.a.createElement("input",{id:"searchQuery",type:"text",value:this.state.searchQuery,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"searchQuery"},"Search")),r.a.createElement("div",{className:"col s4"},r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",r.a.createElement("i",{className:"material-icons right"},"send")))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.booksArray.map(function(e){return r.a.createElement(b,{title:e.title,authors:e.authors,description:e.description,link:e.link,image:e.image})}))))}}]),t}(n.Component)),g=(a(37),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={savedBooks:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({savedBooks:a});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.savedBooks.map(function(e){return r.a.createElement(b,{title:e.title,authors:e.authors,description:e.description,link:e.link,image:e.image,delete:!0,id:e._id})})))}}]),t}(n.Component)),E=a(14),w=a(12),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{id:"NavBar"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement("a",{href:"/",className:"brand-logo black-text center"},r.a.createElement("i",{className:"material-icons"},"book")," BookSearch"),r.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger black-text"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(E.b,{className:"black-text",to:"/"},"Search")),r.a.createElement("li",null,r.a.createElement(E.b,{className:"black-text",to:"/mybooks"},"My Books"))))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement(E.b,{className:"black-text",to:"/"},"Search")),r.a.createElement("li",null,r.a.createElement(E.b,{className:"black-text",to:"/mybooks"},"My Books"))),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:k}),r.a.createElement(w.a,{exact:!0,path:"/mybooks",component:g})))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(E.a,null,r.a.createElement(y,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.835ebc2a.chunk.js.map