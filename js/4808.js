(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[4808],{4808:(t,e,i)=>{i(9138),i(1531),i(3678),i(4145);var s=new Image,n=50;class r{constructor(t,e,i,s,n){this.x=t,this.y=e,this.s=i,this.r=s,this.fn=n}draw(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(s,0,0,40*this.s,40*this.s),t.restore()}update(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=a("fnr"),Math.random()>.4?(this.x=a("x"),this.y=0,this.s=a("s"),this.r=a("r")):(this.x=window.innerWidth,this.y=a("y"),this.s=a("s"),this.r=a("r")))}}function a(t){var e,i;switch(t){case"x":e=Math.random()*window.innerWidth;break;case"y":e=Math.random()*window.innerHeight;break;case"s":e=Math.random();break;case"r":e=6*Math.random();break;case"fnx":i=1*Math.random()-.5,e=function(t,e){return t+.5*i-1.7};break;case"fny":i=1.5+.7*Math.random(),e=function(t,e){return e+i};break;case"fnr":i=.03*Math.random(),e=function(t){return t+i}}return e}function h(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t,e=document.createElement("canvas");!0,e.height=window.innerHeight,e.width=window.innerWidth,e.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),e.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(e),t=e.getContext("2d");for(var i=new o,s=0;s<n;s++){var h,d,c,u,w,m,f,l;d=a("x"),c=a("y"),w=a("r"),u=a("s"),m=a("fnx"),f=a("fny"),l=a("fnr"),(h=new r(d,c,u,w,{x:m,y:f,r:l})).draw(t),i.push(h)}requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height),i.update(),i.draw(t),requestAnimationFrame(arguments.callee)}))}class o{constructor(){this.list=[]}push(t){this.list.push(t)}update(){for(var t=0,e=this.list.length;t<e;t++)this.list[t].update()}draw(t){for(var e=0,i=this.list.length;e<i;e++)this.list[e].draw(t)}get(t){return this.list[t]}size(){return this.list.length}}window.onresize=function(){document.getElementById("canvas_snow")};const d=_iro.effect.amount;let c;switch(d){case"half":c=25;break;case"less":c=15;break;case"quarter":c=35;break;case"native":c=50;break;default:c=parseInt(d),isNaN(c)&&(console.error("wrong arg"),c=50)}!function(t){switch(typeof t){case"number":n=Math.floor(t);break;case"string":n=parseInt(t);break;default:throw new TypeError("need a int as args, but get "+typeof t+" instead")}s.src=new URL(i(2032),i.b),s.onload=function(){h()}}(c)},2032:(t,e,i)=>{t.exports=i.p+"8fc9f7d07450d48a12b0.png"}}]);
//# sourceMappingURL=4808.js.map