(this.webpackJsonpkajkam=this.webpackJsonpkajkam||[]).push([[0],{61:function(e,t,n){e.exports=n(77)},72:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=n(11),l=n(24),d=n(25),s=n(27),u=n(26),p=n(9),b=n(3),f=n(23),v=n(94),m=n(92),D=n(96),h=n(93),E=n(28),g=n(4),O=n(55);function x(){var e=Object(b.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return x=function(){return e},e}function j(){var e=Object(b.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return j=function(){return e},e}function I(){var e=Object(b.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return I=function(){return e},e}function y(){var e=Object(b.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return y=function(){return e},e}function T(){var e=Object(b.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return T=function(){return e},e}var A=g.a.div(T()),w=Object(g.a)(D.a)(y()),_=Object(g.a)(O.a)(I()),C=g.a.div(j()),R=Object(g.a)(m.a)(x()),S=r.a.memo((function(e){var t=e.list,n=e.text,a=void 0===n?"":n,o=e.onChange,c=e.closeForm,i=e.children,l=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement(A,null,r.a.createElement(w,null,r.a.createElement(_,{placeholder:l,autoFocus:!0,onBlur:c,value:a,onChange:function(e){return o(e)}})),r.a.createElement(C,null,i,r.a.createElement(R,{onMouseDown:c},"close")))})),k=n(32),L=n.n(k),B=function(e){return{type:F.SET_CURRENT_BOARD,payload:{boardID:e}}},N=function(e){return function(t,n){t({type:F.ADD_LIST,payload:{listTitle:e,boardID:n().currentBoard.boardID,listID:L()()}})}},P=function(e,t,n,a,r,o){return function(c,i){c({type:F.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:o,boardID:i().currentBoard.boardID}})}},H=function(e,t){return{type:F.ADD_CARD,payload:{text:t,listID:e,cardID:L()()}}},F={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",ADD_BOARD:"ADD_BOARD",SET_CURRENT_BOARD:"SET_CURRENT_BOARD"},z=n(95);function M(){var e=Object(b.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return M=function(){return e},e}var G=Object(g.a)(z.a)(M()),K=function(e){var t=e.text,n=e.onClick;return r.a.createElement(G,{variant:"contained",onMouseDown:n},t)};function U(){var e=Object(b.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return U=function(){return e},e}function J(){var e=Object(b.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(b.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return W=function(){return e},e}var X=g.a.div(W()),Y=Object(g.a)(m.a)(J(),X),$=Object(g.a)(m.a)(U(),X),q=r.a.memo((function(e){var t=e.text,n=e.id,o=e.listID,c=e.index,i=e.dispatch,l=Object(a.useState)(!1),d=Object(f.a)(l,2),s=d[0],u=d[1],p=Object(a.useState)(t),b=Object(f.a)(p,2),m=b[0],g=b[1],O=function(e){i(function(e,t){return{type:F.DELETE_CARD,payload:{cardID:e,listID:t}}}(n,o))};return s?r.a.createElement(S,{text:m,setText:g,closeForm:function(e){u(!1),g(t)},onChange:function(e){g(e.target.value)}},r.a.createElement(K,{text:"Save",onClick:function(e){e.preventDefault(),i(function(e,t,n){return{type:F.EDIT_CARD,payload:{cardID:e,listID:t,newText:n}}}(n,o,m)),u(!1)}})):r.a.createElement(E.b,{draggableId:String(n),index:c},(function(e){return r.a.createElement(X,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{onDoubleClick:function(){return u(!0)}}),r.a.createElement(D.a,null,r.a.createElement(Y,{fontSize:"small",onMouseDown:function(){return u(!0)}},"edit"),r.a.createElement($,{fontSize:"small",onMouseDown:O},"delete"),r.a.createElement(h.a,null,r.a.createElement(v.a,null,t))))}))})),Q=Object(i.b)()(q);function V(){var e=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    width: 300px;\n    margin-left: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return V=function(){return e},e}var Z=function(e){var t=e.list,n=e.onClick,a=t?"Add another list":"Add another card",o=t?1:.5,c=t?"white":"inherit",i=t?"rgba(0,0,0,.15)":"inherit",l=g.a.div(V(),o,c,i);return r.a.createElement(l,{onClick:n},r.a.createElement(m.a,null,"add"),r.a.createElement("span",{style:{flexShrink:0}}," ",a))},ee=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formOpen:!1,text:""},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(t){e.setState({formOpen:!1,text:""})},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleAddList=function(){var t=e.props.dispatch,n=e.state.text;n&&(e.setState({text:""}),t(N(n)))},e.handleAddCard=function(){var t=e.props,n=t.dispatch,a=t.listID,r=e.state.text;r&&(e.setState({text:""}),n(H(a,r)))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.text,n=e.formOpen,a=this.props.list;return n?r.a.createElement(S,{text:t,onChange:this.handleInputChange,closeForm:this.closeForm},r.a.createElement(K,{text:a?"Add List":"Add Card",onClick:a?this.handleAddList:this.handleAddCard})):r.a.createElement(Z,{list:a,onClick:this.openForm})}}]),n}(a.Component),te=Object(i.b)()(ee);function ne(){var e=Object(b.a)(["\n  display: none;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ne=function(){return e},e}function ae(){var e=Object(b.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return re=function(){return e},e}function oe(){var e=Object(b.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return oe=function(){return e},e}function ce(){var e=Object(b.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  height: 100%;\n  padding: 8px;\n  margin-right: 8px;\n"]);return ce=function(){return e},e}var ie=g.a.div(ce()),le=g.a.input(oe()),de=g.a.div(re()),se=g.a.h4(ae(),de),ue=Object(g.a)(m.a)(ne(),de),pe=r.a.memo((function(e){var t=e.title,n=e.cards,o=e.listID,c=e.index,i=e.dispatch,l=Object(a.useState)(!1),d=Object(f.a)(l,2),s=d[0],u=d[1],p=Object(a.useState)(t),b=Object(f.a)(p,2),v=b[0],m=b[1],D=function(e){e.target.select()},h=function(e){e.preventDefault(),m(e.target.value)},g=function(e){u(!1),i(function(e,t){return{type:F.EDIT_LIST_TITLE,payload:{listID:e,newListTitle:t}}}(o,v))},O=function(){console.log("KKList: delete list: ",o),i(function(e){return console.log("List Actions: delete list: ",e),function(t,n){return t({type:F.DELETE_LIST,payload:{listID:e,boardID:n().currentBoard.boardID}})}}(o))};return r.a.createElement(E.b,{draggableId:String(o),index:c},(function(e){return r.a.createElement(ie,Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps),r.a.createElement(E.c,{droppableId:String(o),type:"card"},(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,s?r.a.createElement(le,{type:"text",value:v,onChange:h,autoFocus:!0,onFocus:D,onBlur:g}):r.a.createElement(de,{onClick:function(){return u(!0)}},r.a.createElement(se,null,v),r.a.createElement(ue,{onClick:O},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map((function(e,t){return r.a.createElement(Q,{key:e.cardID,index:t,text:e.text,id:e.cardID,listID:o})})),e.placeholder,r.a.createElement(te,{listID:o})))})))}))})),be=Object(i.b)()(pe);function fe(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return fe=function(){return e},e}var ve=g.a.div(fe()),me=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onDragEnd=function(t){var n=t.destination,a=t.source,r=t.draggableId,o=t.type;n&&e.props.dispatch(P(a.droppableId,n.droppableId,a.index,n.index,r,o))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.boardID;console.log("Board: CDM",e),this.props.dispatch(B(e))}},{key:"render",value:function(){console.log("Board params.boardid: ",this.props.match.params.boardID);var e=this.props,t=e.lists,n=e.cards,a=e.match,o=e.boards[a.params.boardID];if(!o)return r.a.createElement("h1",{style:{textAlign:"center"}},"Board not found!");var c=o.lists;return r.a.createElement(E.a,{onDragEnd:this.onDragEnd},r.a.createElement("h1",{style:{textAlign:"center"}},o.boardTitle),r.a.createElement(E.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(e){return r.a.createElement(ve,Object.assign({},e.droppableProps,{ref:e.innerRef}),c.map((function(e,a){var o=t[e];if(o){var c=o.cards.map((function(e){return n[e]}));return r.a.createElement(be,{key:o.listID,listID:o.listID,title:o.listTitle,cards:c,index:a})}})),e.placeholder,r.a.createElement(te,{list:!0}))})))}}]),n}(a.Component),De=Object(i.b)((function(e){return{boards:e.boards,currentBoard:e.currentBoard,lists:e.lists,cards:e.cards}}))(me),he=n(29);function Ee(){var e=Object(b.a)(["\n  width: 400px;\n  height: 80px;\n  font-size: 22px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n"]);return Ee=function(){return e},e}function ge(){var e=Object(b.a)(["\n  font-size: 48px;\n  color: white;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(b.a)(["\n  color: white;\n  text-decoration: none;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(b.a)(["\n  height: 280px;\n  width: 280px;\n  background: grey;\n  padding: 10px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px grey;\n"]);return xe=function(){return e},e}function je(){var e=Object(b.a)(["\n  flex: 1;\n  height: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return je=function(){return e},e}function Ie(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return Ie=function(){return e},e}var ye=g.a.div(Ie()),Te=g.a.div(je()),Ae=g.a.div(xe()),we=g.a.h4(Oe()),_e=g.a.h3(ge()),Ce=g.a.input(Ee()),Re=Object(i.b)((function(e){return{boards:e.boards}}))((function(e){var t=e.boards,n=e.dispatch,o=e.match;console.log("Home: ",o.params),n(B(null));var c=Object(a.useState)(""),i=Object(f.a)(c,2),l=i[0],d=i[1],s=function(e){d(e.target.value)},u=function(e){var t;e.preventDefault(),n((t=l,{type:F.ADD_BOARD,payload:{boardTitle:t,boardID:L()()}}))};return r.a.createElement(ye,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Boards"),r.a.createElement(Te,null,(console.log("Home: Obj:",t),console.log("Home: ara:",Object.entries(t)),Object.entries(t).map((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];return r.a.createElement(he.b,{key:n,to:"/".concat(n),style:{textDecoration:"none"}},r.a.createElement(Ae,null,r.a.createElement(we,null,a.boardTitle)))})))),r.a.createElement("form",{onSubmit:u,style:{textAlign:"center"}},r.a.createElement(_e,null,"Create new Board"),r.a.createElement(Ce,{onChange:s,value:l,placeholder:"Enter title and Hit enter",type:"text"})))})),Se=(n(72),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.currentBoard;console.log("Navbar: render1:",e);var t=null;if(e){var n=e.boardID;console.log("Navbar: render2:",n),n&&""!==n&&(t=this.props.boards[n].boardTitle)}return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",style:{position:"fixed",zIndex:"1",width:"100%"}},r.a.createElement("div",{class:"navbar-nav d-flex w-50 order-0"},t&&r.a.createElement("a",{className:"nav-item nav-link active"},t,r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("div",{class:"navbar-collapse collapse justify-content-center order-2",id:"collapsingNavbar"},r.a.createElement("a",{className:"navbar-brand gh1",style:{boxShadow:"0px 0px 5px #fff",borderRadius:"10px",padding:"5px"},href:"/"},"K A J K A M")),r.a.createElement("span",{class:"navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"}))}}]),n}(a.Component)),ke=Object(i.b)((function(e){return{boards:e.boards,currentBoard:e.currentBoard}}))(Se),Le=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"100vh",minWidth:"100%",overflowY:"auto",overflowX:"auto",background:"linear-gradient(45deg, #dfd819, #0da5f1)"}},r.a.createElement(ke,null),r.a.createElement("div",{style:{marginTop:"60px"}},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/:boardID",component:De}),r.a.createElement(p.a,{path:"/",component:Re}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(13),Ne=n(56),Pe=n(37),He=n(12),Fe=n(5),ze={"board-00":{id:"board-00",lists:["list-00"],boardTitle:"dev board"}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ADD_BOARD:var n=t.payload,a=n.boardTitle,r=n.boardID,o={boardID:r,boardTitle:a,lists:[]};return Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},r,o));case F.ADD_LIST:var c=t.payload,i=c.boardID,l=c.listID,d=e[i];return d.lists.push(l),Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},i,d));case F.DELETE_LIST:var s=t.payload,u=s.boardID,p=s.listID;console.log("Board Reducer: delete list: ",p,u);var b=e[u],f=b.lists.filter((function(e){return e!=p}));return b.lists=f,Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},u,b));case F.DRAG_HAPPENED:var v=t.payload,m=v.boardID,D=v.type,h=v.droppableIndexStart,E=v.droppableIndexEnd;if("list"!==D)return e;var g=e[m],O=g.lists,x=O.splice(h,1);return O.splice.apply(O,[E,0].concat(Object(Pe.a)(x))),g.lists=O,Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},m,g));default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.SET_CURRENT_BOARD:return t.payload;default:return e}},Ke={"list-00":{listID:"list-00",cards:["card-00"],listTitle:"myList",boardID:"board-00"}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ADD_LIST:var n=t.payload,a=n.listTitle,r=n.listID,o=n.boardID,c={listTitle:a,listID:r,cards:[],boardID:o};return Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},r,c));case F.EDIT_LIST_TITLE:var i=t.payload,l=i.listID,d=i.newListTitle,s=e[l];return s.title=d,Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},l,s));case F.DELETE_LIST:var u=t.payload,p=u.listID;u.boardID;console.log("ListReducer: delete list: ",p);var b=e;return delete b[p],b;case F.ADD_CARD:var f=t.payload,v=f.listID,m=f.cardID,D=e[v];return D.cards.push(m),Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},v,D));case F.DELETE_CARD:var h=t.payload,E=h.cardID,g=h.listID,O=e[g],x=O.cards.filter((function(e){return e!==E}));return O.cards=x,Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},g,O));case F.DRAG_HAPPENED:var j=t.payload,I=j.droppableIdStart,y=j.droppableIdEnd,T=j.droppableIndexStart,A=j.droppableIndexEnd,w=(j.draggableId,j.type);if("list"===w)return e;if(I===y){var _,C=e[I],R=C.cards.splice(T,1);return(_=C.cards).splice.apply(_,[A,0].concat(Object(Pe.a)(R))),Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},I,C))}var S,k,L=e[I],B=L.cards.splice(T,1),N=e[y];return(S=N.cards).splice.apply(S,[A,0].concat(Object(Pe.a)(B))),Object(Fe.a)(Object(Fe.a)({},e),{},(k={},Object(He.a)(k,I,L),Object(He.a)(k,y,N),k));default:return e}},Je={"card-00":{text:"Dev Card",id:"card-00",listID:"list-00"}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,o=n.cardID,c={text:a,cardID:o,listID:r};return Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},o,c));case F.EDIT_CARD:var i=t.payload,l=i.cardID,d=i.newText,s=e[l];return s.text=d,Object(Fe.a)(Object(Fe.a)({},e),{},Object(He.a)({},l,s));case F.DELETE_CARD:var u=t.payload.cardID,p=e;return delete p[u],p;default:return e}},Xe=Object(Be.c)({boards:Me,currentBoard:Ge,lists:Ue,cards:We}),Ye=n(44),$e=n(57),qe={key:"root",storage:n.n($e).a},Qe=Object(Ye.a)(qe,Xe),Ve=(n(75),n(58)),Ze=n.n(Ve),et=n(59),tt=(n(76),function(){var e=Object(Be.e)(Qe,Object(Be.a)(Ne.a));return{store:e,persistor:Object(Ye.b)(e)}}()),nt=tt.persistor,at=tt.store;c.a.render(r.a.createElement(i.a,{store:at},r.a.createElement(et.a,{loading:null,persistor:nt},r.a.createElement(he.a,null,r.a.createElement(Le,null)))),document.getElementById("root")),Ze()(document).bind("DOMNodeRemoved",(function(e){console.log("Removed: ",e.target.title.nodeName)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.bf76070f.chunk.js.map