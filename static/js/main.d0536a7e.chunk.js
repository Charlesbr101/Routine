(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},112:function(e,t,a){e.exports=a(178)},117:function(e,t,a){},118:function(e,t,a){},124:function(e,t,a){},175:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),c=a.n(i);a(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(49),s=a(22),l=a(5),u=a(6),h=a(9),m=a(7),d=a(3),b=a(8),p=(a(118),a(53)),f=a.n(p);a(119),a(121);console.log("Incializando aplicativo..."),f.a.initializeApp({apiKey:"AIzaSyA9m9P-5JkTne-HXgEFe3K0cw29BW04X3g",authDomain:"fir-2998c.firebaseapp.com",databaseURL:"https://fir-2998c.firebaseio.com",projectId:"fir-2998c",storageBucket:"",messagingSenderId:"1082407435121",appId:"1:1082407435121:web:04bbd6272a88108c"});var v=f.a.firestore(),j=f.a.auth();function g(e,t){j.onAuthStateChanged(function(a){a?t():(alert("Usu\xe1rio deslogado"),e.history.push("/"))})}var O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={Login:"",Senha:"",ConfirmSenha:""},a.handleChangeLogin=a.handleChangeLogin.bind(Object(d.a)(a)),a.handleChangeSenha=a.handleChangeSenha.bind(Object(d.a)(a)),a.handleChangeConfirmSenha=a.handleChangeConfirmSenha.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChangeLogin",value:function(e){this.setState({Login:e.target.value})}},{key:"handleChangeSenha",value:function(e){this.setState({Senha:e.target.value})}},{key:"handleChangeConfirmSenha",value:function(e){this.setState({ConfirmSenha:e.target.value})}},{key:"handleSubmit",value:function(e){var t,a,n,o=this;this.state.Senha==this.state.ConfirmSenha?(t=this.state.Login,a=this.state.Senha,n=function(){o.props.history.push("/menu")},j.createUserWithEmailAndPassword(t,a).then(function(){console.log("Usu\xe1rio criado com sucesso."),n()}).catch(function(e){console.log("Erro ao criar usu\xe1rio: "+e)}),e.preventDefault()):(alert("As senhas n\xe3o correspondem: "+this.state.Login+"   "+this.state.Senha+" != "+this.state.ConfirmSenha),e.preventDefault())}},{key:"render",value:function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"Login-section"},o.a.createElement("h1",{className:"h1d"},"Routine App"),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"formulario"},o.a.createElement("label",null,o.a.createElement("input",{className:"Login",placeholder:"Login",type:"text",value:this.state.Login,onChange:this.handleChangeLogin})),o.a.createElement("label",null,o.a.createElement("input",{className:"Senha",placeholder:"Senha",type:"password",value:this.state.Senha,onChange:this.handleChangeSenha})),o.a.createElement("label",null,o.a.createElement("input",{className:"ConfirmSenha",placeholder:"Confirme sua Senha",type:"password",value:this.state.ConfirmSenha,onChange:this.handleChangeConfirmSenha})),o.a.createElement("input",{className:"submitbutton",type:"submit",value:"Cadastrar"}))))}}]),t}(o.a.Component),E=(a(124),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={Login:"",Senha:""},a.handleChangeLogin=a.handleChangeLogin.bind(Object(d.a)(a)),a.handleChangeSenha=a.handleChangeSenha.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"handleChangeLogin",value:function(e){this.setState({Login:e.target.value})}},{key:"handleChangeSenha",value:function(e){this.setState({Senha:e.target.value})}},{key:"handleSubmit",value:function(e){var t,a,n,o=this;t=this.state.Login,a=this.state.Senha,n=function(){o.props.history.push("/menu")},j.signInWithEmailAndPassword(t,a).then(function(){console.log("Usu\xe1rio logado com sucesso."),n()}).catch(function(e){alert("Erro ao logar usu\xe1rio: "+e)}),e.preventDefault()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App-header"},o.a.createElement("h1",null,"Routine App"),o.a.createElement("div",{className:"Login-section"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"formulario"},o.a.createElement("label",null,o.a.createElement("input",{className:"Login",placeholder:"Login",type:"text",value:this.state.Login,onChange:this.handleChangeLogin})),o.a.createElement("label",null,o.a.createElement("input",{className:"Senha",placeholder:"Senha",type:"password",value:this.state.Senha,onChange:this.handleChangeSenha})),o.a.createElement("input",{className:"submitbutton",type:"submit",value:"Login"}),o.a.createElement("div",{className:"registerlink",onClick:function(){e.props.history.push("/registro")}},"N\xe3o possuo uma conta"))))}}]),t}(o.a.Component)),S=(a(18),a(19)),C=(a(43),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.nome,a=e.icon,n=e.path;return o.a.createElement(r.b,{to:n},o.a.createElement("div",{className:"Item"},o.a.createElement("div",{className:"DivObj"},t),o.a.createElement(S.a,{className:"Delete",type:a})))}}]),t}(o.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.itens,a=e.tam,n=[],i=0;i<a;i++)n.push(o.a.createElement(C,{nome:t[i].nome,icon:t[i].icon,path:t[i].path}));return o.a.createElement("div",{className:"Tabela"},o.a.createElement("div",{className:"Tittle"},"Routine"),o.a.createElement("div",{className:"Itens"},n))}}]),t}(o.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=[{nome:"Seus Objetos",icon:"key",path:"/objetos/visualizar"},{nome:"Pessoas",icon:"user",path:"/"},{nome:"Rem\xe9dios",icon:"medicine-box",path:"/remedios/visualizar"},{nome:"Rotina",icon:"clock-circle",path:"/rotina/visualizar"},{nome:"menu",icon:"icon2",path:"/menu"},{nome:"menu",icon:"icon2",path:"/menu"}];return o.a.createElement("div",{className:"Background"},o.a.createElement(y,{itens:e,tam:e.length}))}}]),t}(n.Component),N=a(99),R=a.n(N),L=a(179),w=a(55),x=(a(175),L.a.Search,o.a.Component,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).deleteItem=a.deleteItem.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"deleteItem",value:function(){1==window.confirm("Deseja Realmente excluir este item?")&&this.props.onDelete(this.props.data.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Item"},o.a.createElement("div",{className:"DivObj"},this.props.data.nome),o.a.createElement("div",{className:"DivObj2"},this.props.data.local),o.a.createElement(S.a,{className:"Delete",type:"delete",onClick:this.deleteItem}))}}]),t}(o.a.Component)),D=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.itens,a=e.tam,n=[],i=0;i<a;i++)n.push(o.a.createElement(x,{onDelete:this.props.onDelete,data:t[i]}));return o.a.createElement("div",{className:"Tabela"},o.a.createElement("div",{className:"Tittle"},this.props.title),o.a.createElement("div",{className:"Itens"},n))}}]),t}(o.a.Component),I=v.collection("remedios");var A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={remedio:[]},a.adicionarRemedio=a.adicionarRemedio.bind(Object(d.a)(a)),a.deletarRemedio=a.deletarRemedio.bind(Object(d.a)(a)),g(Object(d.a)(a),function(){var e,t;e=function(){a.setState({obj:[]})},t=function(e,t){a.adicionarRemedio({nome:e.nome,local:e.local,id:t})},console.log("Listando remedios..."),e(),I.where("owner","==",j.currentUser.uid).get().then(function(e){e.forEach(function(e){var a=e.data();t(a,e.id)})})}),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"deletarRemedio",value:function(e){var t=this;!function(e,t){console.log("Removendo rem\xe9dio("+e+") ..."),I.doc(e).delete().then(function(){console.log("Removido."),t()})}(e,function(){var a=t.state.remedio.find(function(t){return t.id==e});t.state.remedio.splice(a,1),t.setState({remedio:t.state.remedio})})}},{key:"adicionarRemedio",value:function(e){this.setState({remedio:this.state.remedio.concat([e])})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Background"},o.a.createElement(D,{title:"Meus Objetos",onDelete:this.deletarRemedio,itens:this.state.remedio,tam:this.state.remedio.length}))}}]),t}(n.Component),z=a(102),B=a.n(z),U=a(103),T=a.n(U),W=a(104),P=a.n(W),J=v.collection("objetos");var M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={obj:[]},a.adicionarObjeto=a.adicionarObjeto.bind(Object(d.a)(a)),a.deletarObjeto=a.deletarObjeto.bind(Object(d.a)(a)),g(Object(d.a)(a),function(){var e,t;e=function(){a.setState({obj:[]})},t=function(e,t){a.adicionarObjeto({nome:e.nome,local:e.local,id:t})},console.log("Listando objetos..."),e(),J.where("owner","==",j.currentUser.uid).get().then(function(e){e.forEach(function(e){var a=e.data();t(a,e.id)})})}),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"deletarObjeto",value:function(e){var t=this;!function(e,t){console.log("Removendo objeto("+e+") ..."),J.doc(e).delete().then(function(){console.log("Removido."),t()})}(e,function(){var a=t.state.obj.find(function(t){return t.id==e});t.state.obj.splice(a,1),t.setState({obj:t.state.obj})})}},{key:"adicionarObjeto",value:function(e){this.setState({obj:this.state.obj.concat([e])})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Background"},o.a.createElement(D,{title:"Meus Objetos",onDelete:this.deletarObjeto,itens:this.state.obj,tam:this.state.obj.length}))}}]),t}(n.Component),K=a(105),X=a.n(K),F=a(106),H=a.n(F),$=a(107),q=a.n($),G=v.collection("rotinas");var Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={rotina:[]},a.adicionarRotina=a.adicionarRotina.bind(Object(d.a)(a)),a.deletarRotina=a.deletarRotina.bind(Object(d.a)(a)),g(Object(d.a)(a),function(){var e,t;e=function(){a.setState({obj:[]})},t=function(e,t){a.adicionarRotina({nome:e.nome,local:e.local,id:t})},console.log("Listando remedios..."),e(),G.where("owner","==",j.currentUser.uid).get().then(function(e){e.forEach(function(e){var a=e.data();console.log(a.nome+" - "+a.desc),t(a,e.id)})})}),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"deletarRotina",value:function(e){var t=this;!function(e,t){console.log("Removendo rem\xe9dio("+e+") ..."),G.doc(e).delete().then(function(){console.log("Removido."),t()})}(e,function(){var a=t.state.rotina.find(function(t){return t.id==e});t.state.remedio.splice(a,1),t.setState({rotina:t.state.rotina})})}},{key:"adicionarRotina",value:function(e){this.setState({rotina:this.state.rotina.concat([e])})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Background"},o.a.createElement(D,{title:"Meus Objetos",onDelete:this.deletarRotina,itens:this.state.rotina,tam:this.state.rotina.length}))}}]),t}(n.Component),V=a(108),Y=a.n(V),Z=a(109),_=a.n(Z),ee=a(110),te=a.n(ee);c.a.render(o.a.createElement(r.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:E}),o.a.createElement(s.a,{path:"/entrar",exact:!0,component:E}),o.a.createElement(s.a,{path:"/registro",exact:!0,component:O}),o.a.createElement(s.a,{path:"/menu",exact:!0,component:k}),o.a.createElement(s.a,{path:"/remedios/novo",exact:!0,component:R.a}),o.a.createElement(s.a,{path:"/remedios/visualizar",exact:!0,component:A}),o.a.createElement(s.a,{path:"/remedios/editar/:id",exact:!0,component:B.a}),o.a.createElement(s.a,{path:"/remedios/excluir/:id",exact:!0,component:T.a}),o.a.createElement(s.a,{path:"/objetos/novo",exact:!0,component:P.a}),o.a.createElement(s.a,{path:"/objetos/visualizar",exact:!0,component:M}),o.a.createElement(s.a,{path:"/objetos/editar/:id",exact:!0,component:X.a}),o.a.createElement(s.a,{path:"/objetos/excluir/:id",exact:!0,component:H.a}),o.a.createElement(s.a,{path:"/rotina/novo",exact:!0,component:q.a}),o.a.createElement(s.a,{path:"/rotina/visualizar",exact:!0,component:Q}),o.a.createElement(s.a,{path:"/rotina/editar/:id",exact:!0,component:Y.a}),o.a.createElement(s.a,{path:"/rotina/excluir/:id",exact:!0,component:_.a}),o.a.createElement(s.a,{path:"/telefones/visualizar",exact:!0,component:te.a}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},99:function(e,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.d0536a7e.chunk.js.map