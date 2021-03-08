(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(31),a(7)),c=a(1),s=a(11),m=a.n(s),u=a(13),d=a(3),h=a(4),v=a(12),p=a(6),f=a(5),b=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("h1",{className:"position-absolute top-50 start-50 translate-middle text-light"},"Loading...")}}]),a}(n.Component),g=a(17),y=a(14),E=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(y.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){void 0===this.state.genre&&this.setState({genre:"action"})}},{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(g.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"form-control",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),i.a.createElement("label",{htmlFor:"movie_title"},"Title"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"form-control",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),i.a.createElement("label",{htmlFor:"movie_subtitle"},"Subtitle"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"form-control",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),i.a.createElement("label",{htmlFor:"movie_image"},"Image path"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("textarea",{placeholder:"storyline",id:"movie_storyline",className:"form-control",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),i.a.createElement("label",{htmlFor:"movie_storyline"},"Storyline"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("select",{id:"movie_genre",value:t,className:"form-select",onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"Action"),i.a.createElement("option",{value:"comedy"},"Comedy"),i.a.createElement("option",{value:"thriller"},"Thriller"),i.a.createElement("option",{value:"fantasy"},"Fantasy")),i.a.createElement("label",{htmlFor:"movie_genre"},"Genre"))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"form-floating mb-3 width-45"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",className:"form-control",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),i.a.createElement("label",{htmlFor:"movie_rating"},"Rating"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit,className:"btn btn-success p-3"},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"text-ligh mt-4"},i.a.createElement("form",{className:"d-flex flex-column align-items-center"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),i.a.createElement("div",{className:"width-45 d-flex justify-content-between"},this.renderGenreSelection(),this.renderRatingInput()),i.a.createElement("div",{className:"width-45 d-flex justify-content-evenly"},i.a.createElement(l.b,{className:"btn btn-primary width-83px p-3",to:"/"},"BACK"),this.renderSubmitButton())))}}]),a}(i.a.Component),j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie;return i.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},i.a.createElement("img",{className:"movie-card-image height-max-167",src:e.imagePath,alt:"Banner of ".concat(e.title)}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("p",{className:"movie-card-title"},e.title),i.a.createElement("p",{className:"movie-card-storyline"},e.storyline),i.a.createElement(l.b,{to:"/movies/".concat(e.id),params:e.id},"SEE DETAILS")))}}]),a}(i.a.Component),k=a(25),O=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"/images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"/images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"/images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"/images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"/images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(O));var w=function(){return JSON.parse(localStorage.getItem("movies"))},S=function(e){return localStorage.setItem("movies",JSON.stringify(e))},N=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},x=function(e){var t=w().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){N(t)(e)}))},I=function(e){var t=w();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),S(t),new Promise((function(e){N({status:"OK"})(e)}))},_=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={status:"loading",shouldRedirect:!1,movie:[]},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.fetchMovie(e.id)}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var a=w().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));S(a),N("OK")(t)}))}(e),this.setState({shouldRedirect:!0})}},{key:"fetchMovie",value:function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:a=e.sent,this.setState({movie:a,status:"done"});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(b,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(E,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movie:void 0},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.fetchMovie(e.id)}},{key:"fetchMovie",value:function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:a=e.sent,this.setState({movie:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.movie;return void 0===t?i.a.createElement(b,null):i.a.createElement("div",{className:"text-light","data-testid":"movie-details"},i.a.createElement("div",{className:"d-flex justify-content-around mt-4"},i.a.createElement("img",{className:"border border-warning border-5 rounded width-45 height-max-367",alt:"Movie Cover",src:t.imagePath}),i.a.createElement("div",{className:"text-center width-45 border border-warning align-self-center"},i.a.createElement("p",null,"Title: ".concat(t.title)),i.a.createElement("p",null,"Subtitle: ".concat(t.subtitle)),i.a.createElement("p",{className:""},"Storyline: ".concat(t.storyline)),i.a.createElement("p",null,"Genre: ".concat(t.genre)),i.a.createElement("p",{className:""},"Rating: ".concat(t.rating)))),i.a.createElement("div",{className:"d-flex justify-content-evenly m-5"},i.a.createElement(l.b,{className:"btn btn-primary width-83px",to:"/"},"BACK"),i.a.createElement(l.b,{className:"btn btn-secondary width-83px",to:"/movies/".concat(t.id,"/edit")},"EDIT"),i.a.createElement(l.b,{className:"btn btn-danger width-83px",to:"/",onClick:function(){return e.deleteMovie(t.id)}},"DELETE")))}}]),a}(n.Component),M=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.state={shouldRedirect:!1},n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=w(),n=a[a.length-1].id+1,i=Object(y.a)(Object(y.a)({},t),{},{id:n});a=[].concat(Object(k.a)(a),[i]),S(a),N("OK")(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(E,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movies:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=w();N(t)(e)}));case 2:t=e.sent,this.setState({movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.b,{className:"btn btn-warning mt-4 right",to:"/movies/new"},"ADD CARD"),i.a.createElement("div",{className:"movie-list","data-testid":"movie-list"},0===e.length?i.a.createElement(b,null):e.map((function(e){return i.a.createElement(j,{key:e.title,movie:e})}))))}}]),a}(n.Component),F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(38),a(39);var R=function(){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"movie-card-header"},i.a.createElement("p",{className:"bg-warning pe-4 ps-4 rounded fw-bold fs-1"},"Movie Cards")),i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movies/:id/edit",component:_}),i.a.createElement(c.b,{path:"/movies/new",component:M}),i.a.createElement(c.b,{path:"/movies/:id",component:C}),i.a.createElement(c.b,{path:"/",exact:!0,component:P}),i.a.createElement(c.b,{component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f73f7fb3.chunk.js.map