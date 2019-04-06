(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){e.exports=a(351)},207:function(e,t,a){},290:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(18),c=a.n(s),o=(a(207),a(71)),i=a.n(o),l=a(114),u=a(115),m=a(116),h=a(117),d=a(121),p=a(118),g=a(122),b=a(119),v=a.n(b),E=a(27),f=a.n(E),w=a(15),y=Object(w.withStyles)({root:{width:"96%",margin:"2rem 2%",backgroundColor:"#fff"},title:{marginTop:0}})(function(e){return r.a.createElement(f.a,{className:e.classes.root,container:!0,spacing:32},r.a.createElement(f.a,{item:!0,md:4},r.a.createElement("img",{src:e.imageUrl,alt:"Poster"})),r.a.createElement(f.a,{item:!0,md:8},r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Open: ",e.isClosed?"No":"Yes"),r.a.createElement("p",null,"Price: ",e.price),r.a.createElement("p",null,"No. of Reviews: ",e.reviewCount),r.a.createElement("p",null,"Rating: ",e.rating),r.a.createElement("p",null,"Address: ",e.address,", ",e.city,", ",e.zipCode),r.a.createElement("p",null,"Phone: ",e.phone),r.a.createElement("p",null,"Yelp link: ",e.url)))}),C=a(16),k=a(39),N=a.n(k),S=(a(290),"mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx"),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",categories:"",location:"",sortBy:"best_match",totalResults:0,businesses:[],success:!1,error:null},a.handleChange=function(e,t){a.setState(Object(u.a)({},e.currentTarget.name,e.target.value))},a.handleSubmit=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,s,c,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.term,s=n.location,c=n.categories,o=n.sortBy,l="https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?term=",r,"&location=").concat(s,"&categories=").concat(c,"&sort_by=").concat(o,"&locale=en_CA"),console.log(l),!s||!r){e.next=8;break}return e.next=7,v.a.get(l,{headers:{Authorization:"Bearer ".concat(S)}}).then(function(e){return e.data}).then(function(e){a.setState({totalResults:e.total,businesses:e.businesses,success:!1,error:null})}).catch(function(e){a.setState({error:e.description})});case 7:0!==a.state.totalResults?a.setState({success:!0}):a.setState({error:"Cound not find any business."});case 8:r||a.setState({location:"",success:!1,error:"Missing a search term!"}),s||a.setState({term:"",success:!1,error:"Missing a location search term!"});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(N.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"site-title"},"React Restaurant App - by Maggie"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(C.g,{className:e.classes.textField,label:"Search Term",margin:"normal",name:"term",value:t.term,type:"search",variant:"outlined",InputLabelProps:{required:!0,color:"white",shrink:!0},onChange:this.handleChange}),r.a.createElement(C.g,{className:e.classes.textField,label:"Categories",margin:"normal",name:"categories",value:t.categories,type:"search",variant:"outlined",InputLabelProps:{required:!0,color:"white",shrink:!0},onChange:this.handleChange}),r.a.createElement(C.g,{className:e.classes.textField,label:"City/Location",margin:"normal",name:"location",value:t.location,type:"search",variant:"outlined",InputLabelProps:{required:!0,color:"white",shrink:!0},onChange:this.handleChange}),r.a.createElement(C.b,{className:e.classes.formControl},r.a.createElement(C.d,{shrink:!0,htmlFor:"select-sortBy"},"Sort By"),r.a.createElement(C.f,{value:t.sortBy,onChange:this.handleChange,name:"sortBy",input:r.a.createElement(C.c,{name:"sort-by",id:"select-sortBy"}),className:e.classes.selectEmpty,fullWidth:!0},r.a.createElement(C.e,{value:"best_match"},"Best Match"),r.a.createElement(C.e,{value:"rating"},"Rating"),r.a.createElement(C.e,{value:"review_count"},"Review Count"),r.a.createElement(C.e,{value:"distance"},"Distance"))),r.a.createElement(C.a,{className:e.classes.button,color:"primary",type:"submit",variant:"contained"},"Search")),r.a.createElement("div",{className:"business-section"},!this.state.success&&r.a.createElement("p",{style:{textAlign:"center"}},this.state.error),this.state.success&&this.state.businesses.slice(0,10).map(function(e,t){return r.a.createElement(y,{key:t,name:e.name,isClosed:e.is_closed,price:e.price,reviewCount:e.review_count,rating:e.rating,address:e.location.address1,city:e.location.city,zipCode:e.location.zip_code,imageUrl:e.image_url,phone:e.display_phone,url:e.url})})))))}}]),t}(n.Component),B=Object(w.withStyles)(function(e){return{textField:{margin:e.spacing.unit,width:"100%"},formControl:{margin:e.spacing.unit,width:"100%"},button:{margin:e.spacing.unit,width:"100%",backgroundColor:["#26c6da"].join(","),"&:hover":{backgroundColor:"#26c6da"}}}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,1,2]]]);
//# sourceMappingURL=main.e3f803cc.chunk.js.map