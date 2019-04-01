(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(53),n=a.n(s),c=(a(68),a(31)),o=a.n(c),p=a(54),m=a(6),l=a(7),u=a(9),h=a(8),d=a(10),y=(a(36),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("".concat(this.props.temperature1,"  ").concat(this.props.temperature2," ").concat(this.props.temperature3," ").concat(this.props.temperature4," ").concat(this.props.temperature5)),i.a.createElement("div",{className:"weather__info"},this.props.city&&this.props.country&&i.a.createElement("p",{className:"weather__key"}," Location:",i.a.createElement("span",{className:"weather__value"}," ",this.props.city,", ",this.props.country)),this.props.temperature1&&i.a.createElement("p",{className:"weather__key"}," Day1 temperature:",i.a.createElement("span",{className:"weather__value"}," ",this.props.temperature1," ")),this.props.temperature2&&i.a.createElement("p",{className:"weather__key"}," Day2 temperature:",i.a.createElement("span",{className:"weather__value"}," ",this.props.temperature2," ")),this.props.temperature3&&i.a.createElement("p",{className:"weather__key"}," Day3 temperature:",i.a.createElement("span",{className:"weather__value"}," ",this.props.temperature3," ")),this.props.temperature4&&i.a.createElement("p",{className:"weather__key"}," Day4 temperature:",i.a.createElement("span",{className:"weather__value"}," ",this.props.temperature4," ")),this.props.temperature5&&i.a.createElement("p",{className:"weather__key"}," Day5 temperature:",i.a.createElement("span",{className:"weather__value"}," ",this.props.temperature5," ")),this.props.humidity&&i.a.createElement("p",{className:"weather__key"}," Humidity:",i.a.createElement("span",{className:"weather__value"}," ",this.props.humidity," ")),this.props.error&&i.a.createElement("p",{className:"weather__error"},this.props.error))}}]),t}(r.Component)),v=a(32),b=a(62),g=a(61),_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",value:"",style1:{display:"inline-block"},style2:{textColor:"White",fontSize:"20px"},button_style:{fontSize:"20px",display:"inline-block"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleInputChange",value:function(e){this.setState({search:e.target.value,value:e.target.value})}},{key:"handleSelectSuggest",value:function(e){console.log(e),this.setState({search:"",value:e.formatted_address})}},{key:"render",value:function(){var e=this,t=this.state,a=t.search,r=t.value;return i.a.createElement("div",null,i.a.createElement(b.a,{params:{key:"AIzaSyDoQCJtOSj-V3nS-rDRERg_ItsforUV_D0",libraries:"places,geocode"},render:function(t){return t&&i.a.createElement("div",{style:e.state.style1},i.a.createElement(g.a,{autocompletionRequest:{input:a},googleMaps:t,onSelectSuggest:e.handleSelectSuggest.bind(e)},i.a.createElement("input",{type:"text",style:e.state.style2,value:r,placeholder:"Search a location",onChange:e.handleInputChange.bind(e)})))}}),i.a.createElement("button",{style:this.state.button_style,type:"submit",onClick:function(){return e.props.getWeather(e.state.value)}},"Get Weather"))}}]),t}(r.Component),f="4b5126dfda5fcb96fcbafc4f132f73bc",w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={temperature1:void 0,temperature2:void 0,temperature3:void 0,temperature4:void 0,temperature5:void 0,city:void 0,humidity:void 0,error:void 0,chartData_temp:{},chartData_humid:{}},a.getWeather=function(){var e=Object(p.a)(o.a.mark(function e(t){var r,i,s,n,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=").concat(f,"&units=metric"));case 3:return i=e.sent,e.next=6,i.json();case 6:return s=e.sent,e.next=9,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(r,"&appid=").concat(f,"&units=metric"));case 9:return n=e.sent,e.next=12,n.json();case 12:c=e.sent,console.log(c),r?a.setState({temperature1:c.list[0].main.temp,temperature2:c.list[8].main.temp,temperature3:c.list[16].main.temp,temperature4:c.list[24].main.temp,temperature5:c.list[32].main.temp,city:s.name,country:s.sys.country,humidity:c.list[0].main.humidity,error:"",chartData_temp:{labels:["Day1","Day2","Day3","Day4","Day5"],datasets:[{label:"Temperature",data:[c.list[0].main.temp,c.list[8].main.temp,c.list[16].main.temp,c.list[24].main.temp,c.list[32].main.temp],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)"]}]},chartData_humid:{labels:["Day1","Day2","Day3","Day4","Day5"],datasets:[{label:"Humidity",data:[c.list[0].main.humidity,c.list[8].main.humidity,c.list[16].main.humidity,c.list[24].main.humidity,c.list[32].main.humidity],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)"]}]}}):a.setState({temperature1:void 0,temperature2:void 0,temperature3:void 0,temperature4:void 0,temperature5:void 0,city:void 0,country:void 0,humidity:void 0,error:"Please enter correct values."});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App-header"},i.a.createElement("h1",{className:"weather"},"Weather App"),i.a.createElement(_,{getWeather:this.getWeather}),i.a.createElement(y,{temperature1:this.state.temperature1,temperature2:this.state.temperature2,temperature3:this.state.temperature3,temperature4:this.state.temperature4,temperature5:this.state.temperature5,humidity:this.state.humidity,city:this.state.city,country:this.state.country,error:this.state.error}),this.state.chartData_temp&&this.state.temperature1&&i.a.createElement(v.a,{data:this.state.chartData_temp,width:50,height:20,options:{maintainAspectRatio:!0,title:{display:!0,text:"Temperature Variation in ".concat(this.state.city)},legend:{display:!0,position:"right"}}}),i.a.createElement("br",null),i.a.createElement("br",null),this.state.chartData_humid&&this.state.humidity&&i.a.createElement(v.a,{data:this.state.chartData_humid,width:50,height:20,options:{maintainAspectRatio:!0,title:{display:!0,text:"Humidity Variation in ".concat(this.state.city)},legend:{display:!0,position:"right"}}}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){},63:function(e,t,a){e.exports=a(169)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.4a48c601.chunk.js.map