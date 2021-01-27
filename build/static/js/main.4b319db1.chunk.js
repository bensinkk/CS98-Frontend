(this["webpackJsonphousing-predict"]=this["webpackJsonphousing-predict"]||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),o=n.n(r),i=n(9),s=n.n(i),c=(n(61),n(27)),l=n.n(c),u=n(36),h=n(29),d=n(28),m=n(39),b=n(40),f=n(45),j=n(44),g=(n(63),n(96)),p=n(104),O=n(99);var v=function(e){return Object(a.jsx)(g.a,{container:!0,justify:"center",alignItems:"center",children:Object(a.jsx)(p.a,{bgcolor:"#C0C0C0",color:"white",height:"94%",width:"50%",mt:3,style:{fontSize:"20px"},children:Object(a.jsx)(O.a,{component:"h2",variant:"h5",children:e.price})})})},x=n(101),C=n(102),y=n(103),w=n(105),q=n(4),_=n(100),S=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),H=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).changeHandler=function(e){a.setState((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))},a.handleSearch=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://cs98-backend.herokuapp.com/test",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({bedrooms:a.state.bedrooms,bathrooms:a.state.bathrooms,sqft_living:a.state.sqft_living,sqft_lot:a.state.sqft_lot,floors:a.state.floors,waterfront:a.state.waterfront,yr_built:a.state.yr_built,view:a.state.view})}).then(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=6;break}return r=n&&n.message||t.statusText,e.abrupt("return",Promise.reject(r));case 6:o=new Intl.NumberFormat("ja-JP",{style:"currency",currency:"USD"}).format(n[0]),console.log(o),a.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{price:o})}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.toString(),console.error("There was an error!",e)}));case 1:case"end":return e.stop()}}),e)}))),a.state={bedrooms:"",bathrooms:"",sqft_living:"",sqft_lot:"",floors:"",waterfront:"",yr_built:"",view:"",price:"enter information and click submit"},a}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(C.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(O.a,{component:"h1",variant:"h5",children:"King County House Price Prediction"}),Object(a.jsxs)(g.a,{spacing:3,container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(a.jsx)(g.a,{item:!0,xs:6,children:Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"bedrooms",label:"Number of Bedrooms",name:"bedrooms",autoComplete:"3",autoFocus:!0,onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"bathrooms",label:"Number of Bathrooms",id:"bathrooms",autoComplete:"1",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"sqft_living",label:"House SQFT (house size)",id:"sqft_living",autoComplete:"1100",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"floors",label:"Number of floors",id:"floors",autoComplete:"1100",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"yr_built",label:"Year built",id:"yr_built",autoComplete:"1100",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"sqft_lot",label:"Lot SQFT (land size)",id:"sqft_lot",autoComplete:"5650",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"floor",label:"number of floors",id:"floor",autoComplete:"5650",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"waterfront",label:"Is your house waterfront? (type 0 for yes or 1 for no)",id:"waterfront",autoComplete:"n",onChange:this.changeHandler}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"view",label:"do you have a view of the city? rate it from 0-4.",id:"view",autoComplete:"n",onChange:this.changeHandler}),Object(a.jsx)(w.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.handleSearch,children:"Search"})]})}),Object(a.jsxs)(g.a,{xs:6,item:!0,children:[Object(a.jsx)(O.a,{component:"h2",variant:"h5",children:"The cost of your house is:"}),Object(a.jsx)(v,{price:this.state.price})]})]})]})]})}}]),n}(o.a.Component),T=Object(q.a)(S,{withTheme:!0})(H);var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(T,{})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),W()}},[[69,1,2]]]);
//# sourceMappingURL=main.4b319db1.chunk.js.map