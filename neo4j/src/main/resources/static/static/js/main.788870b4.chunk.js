(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,a){},39:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),i=a.n(s),c=a(31),r=a.n(c),o=(a(38),a(4)),d=a(5),l=a(12),j=a(11),h=(a(39),a(19)),b=a(2),u=a(6),O=a(14),m=a.n(O),p="https://train-station-project.herokuapp.com/",f=new(function(){function t(){Object(o.a)(this,t)}return Object(d.a)(t,[{key:"getStations",value:function(){return m.a.get(p+"/station")}},{key:"createStation",value:function(t){return m.a.post(p+"/station",t)}},{key:"getStationById",value:function(t){return m.a.get(p+"/station/"+t)}},{key:"updateStation",value:function(t,e){return m.a.put(p+"/station/"+e,t)}},{key:"deleteStation",value:function(t){return m.a.delete(p+"/station/"+t)}},{key:"getTrainById",value:function(t){return m.a.get(p+"/station/trains/"+t)}}]),t}()),v=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={stations:[]},n.addStation=n.addStation.bind(Object(u.a)(n)),n.editStation=n.editStation.bind(Object(u.a)(n)),n.deleteStation=n.deleteStation.bind(Object(u.a)(n)),n.showTrains=n.showTrains.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"deleteStation",value:function(t){var e=this;f.deleteStation(t).then((function(a){e.setState({stations:e.state.stations.filter((function(e){return e.id!==t}))})}))}},{key:"editStation",value:function(t){this.props.history.push("/add-station/".concat(t))}},{key:"componentDidMount",value:function(){var t=this;f.getStations().then((function(e){t.setState({stations:e.data})}))}},{key:"addStation",value:function(){this.props.history.push("/add-station/_add")}},{key:"showTrains",value:function(){this.props.history.push("/show-train")}},{key:"showTrainsForStation",value:function(t){this.props.history.push("/trains/".concat(t))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-center",children:"Lista stacji"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.addStation,children:"Dodaj stacj\u0119"}),Object(n.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"10px"},onClick:this.showTrains,children:"Poka\u017c poci\u0105gi"})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Miasto"}),Object(n.jsx)("th",{children:"Nazwa stacji"}),Object(n.jsx)("th",{children:"Poci\u0105gi"}),Object(n.jsx)("th",{children:"Akcja"})]})}),Object(n.jsx)("tbody",{children:this.state.stations.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.city}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.trains.map((function(t){return t.number}))}),Object(n.jsxs)("td",{children:[Object(n.jsx)("button",{onClick:function(){return t.editStation(e.id)},className:"btn btn-info",children:"Modyfikuj"}),Object(n.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return t.deleteStation(e.id)},className:"btn btn-danger",children:"Usu\u0144"})]})]},e.id)}))})]})})]})}}]),a}(s.Component),x=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(n.jsx)("div",{className:"navbar-brand",href:"#home",children:"Dworzec kolejowy"})})})})}}]),a}(s.Component),y=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).changeCityHandles=function(t){n.setState({city:t.target.value})},n.changeNameHandles=function(t){n.setState({name:t.target.value})},n.saveStation=function(t){t.preventDefault();var e={city:n.state.city,name:n.state.name};"_add"===n.state.station.id?f.createStation(e).then((function(t){n.props.history.push("/stations")})):f.updateStation(e,n.state.station.id).then((function(t){n.props.history.push("/stations")}))},n.state={station:{id:n.props.match.params.id,city:"",name:"",trains:[{number:"",numberOfCarriages:""}]}},n.changeCityHandles=n.changeCityHandles.bind(Object(u.a)(n)),n.changeNameHandles=n.changeNameHandles.bind(Object(u.a)(n)),n.saveStation=n.saveStation.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;"_add"!==this.state.station.id&&(f.getStationById(this.state.station.id).then((function(e){var a=e.data;t.setState({name:a.name,city:a.city})})),console.log(this.state.station.name+"dfddddd"))}},{key:"cancel",value:function(){this.props.history.push("/stations")}},{key:"getTitle",value:function(){return"_add"===this.state.id?Object(n.jsx)("h3",{className:"text-center",children:"Dodaj stacj\u0119"}):Object(n.jsx)("h3",{className:"text-center",children:"Modyfikuj stacj\u0119"})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[this.getTitle(),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Miejscowo\u015b\u0107"}),Object(n.jsx)("input",{placeholder:"Miejscowo\u015b\u0107",name:"city",className:"form-control",value:this.state.city,onChange:this.changeCityHandles})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Nazwa stacji"}),Object(n.jsx)("input",{placeholder:"Nazwa stacji",name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandles})]}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.saveStation,children:"Zapisz"}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Odrzu\u0107"})]})})]})})})})}}]),a}(s.Component),g=new(function(){function t(){Object(o.a)(this,t)}return Object(d.a)(t,[{key:"getTrain",value:function(){return m.a.get("https://train-station-project.herokuapp.com//train")}}]),t}()),N=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={train:[]},n}return Object(d.a)(a,[{key:"editStation",value:function(t){this.props.history.push("/add-station/".concat(t))}},{key:"componentDidMount",value:function(){var t=this;g.getTrain().then((function(e){t.setState({train:e.data})}))}},{key:"addStation",value:function(){this.props.history.push("/add-station/_add")}},{key:"showTrains",value:function(){this.props.history.push("/show-train")}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-center",children:"Lista poci\u0105g\xf3w"}),Object(n.jsx)("div",{className:"row"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Numer poci\u0105gu"}),Object(n.jsx)("th",{children:"Ilo\u015b\u0107 wagon\xf3w"})]})}),Object(n.jsx)("tbody",{children:this.state.train.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.number},Math.random()),Object(n.jsx)("td",{children:t.numberOfCarriages},Math.random())]},t.id)}))})]})})]})}}]),a}(s.Component),k=a(10),S=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).changeCityHandles=function(t){n.setState(Object(k.a)(Object(k.a)({},n.state),{},{station:Object(k.a)(Object(k.a)({},n.state.station),{},{city:t.target.value})}))},n.changeNameHandles=function(t){n.setState(Object(k.a)(Object(k.a)({},n.state),{},{station:Object(k.a)(Object(k.a)({},n.state.station),{},{name:t.target.value})}))},n.changeNumberHandles=function(t){n.setState(Object(k.a)(Object(k.a)({},n.state),{},{trains:Object(k.a)(Object(k.a)({},n.state.trains),{},{number:t.target.value})}))},n.saveStation=function(t){t.preventDefault();n.state.city,n.state.name,n.state.trains.number;n.state.station.id},n.state={station:{id:"test",city:"",name:"",trains:[{number:"",numberOfCarriages:""}]}},n.changeCityHandles=n.changeCityHandles.bind(Object(u.a)(n)),n.changeNameHandles=n.changeNameHandles.bind(Object(u.a)(n)),n.saveStation=n.saveStation.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.state.station.id}},{key:"cancel",value:function(){this.props.history.push("/stations")}},{key:"getTitle",value:function(){return"_add"===this.state.id?Object(n.jsx)("h3",{className:"text-center",children:"Dodaj stacj\u0119"}):Object(n.jsx)("h3",{className:"text-center",children:"Modyfikuj stacj\u0119"})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[this.getTitle(),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Miejscowo\u015b\u0107"}),Object(n.jsx)("input",{placeholder:"Miejscowo\u015b\u0107",name:"city",className:"form-control",value:this.state.city,onChange:this.changeCityHandles})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Nazwa stacji"}),Object(n.jsx)("input",{placeholder:"Nazwa stacji",name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandles})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Poci\u0105g"}),Object(n.jsx)("input",{placeholder:"Nazwa stacji",name:"number",className:"form-control",onChange:this.changeNumberHandles})]}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.saveStation,children:"Zapisz"}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Odrzu\u0107"})]}),JSON.stringify(this.state)]})]})})})})}}]),a}(s.Component),w=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(b.a,{path:"/stations",component:v}),Object(n.jsx)(b.a,{path:"/add-station/:id",component:y}),Object(n.jsx)(b.a,{path:"/show-train",component:N}),Object(n.jsx)(b.a,{path:"/trains/:id",component:S})]})})]})})}}]),a}(s.Component),C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),C()}},[[63,1,2]]]);
//# sourceMappingURL=main.788870b4.chunk.js.map