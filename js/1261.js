(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[1261],{1261:(t,i,e)=>{function a(t){t=t||{},this.maxFlake=t.maxFlake||200,this.flakeSize=t.flakeSize||10,this.fallSpeed=t.fallSpeed||1}function s(){var t=document.createElement("canvas");t.id="snowfall",t.width=window.innerWidth,t.height=document.body.clientHeight,t.setAttribute("style","position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;"),document.getElementsByTagName("body")[0].appendChild(t),this.canvas=t,this.ctx=t.getContext("2d"),window.onresize=function(){t.width=window.innerWidth}}function n(t,i,e,a){this.x=Math.floor(Math.random()*t),this.y=Math.floor(Math.random()*i),this.size=Math.random()*e+2,this.maxSize=e,this.speed=1*Math.random()+a,this.fallSpeed=a,this.velY=this.speed,this.velX=0,this.stepSize=Math.random()/30,this.step=0}function h(){for(var t=this.maxFlake,i=this.flakes=[],e=this.canvas,a=0;a<t;a++)i.push(new n(e.width,e.height,this.flakeSize,this.fallSpeed))}function o(){var t=this.maxFlake,i=this.flakes;ctx=this.ctx,canvas=this.canvas,that=this,ctx.clearRect(0,0,canvas.width,canvas.height);for(var e=0;e<t;e++)i[e].update(),i[e].render(ctx);this.loop=requestAnimationFrame((function(){o.apply(that)}))}e.r(i),requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame,a.prototype.start=function(){s.apply(this),h.apply(this),o.apply(this)},n.prototype.update=function(){this.x,this.y;this.velX*=.98,this.velY<=this.speed&&(this.velY=this.speed),this.velX+=Math.cos(this.step+=.05)*this.stepSize,this.y+=this.velY,this.x+=this.velX,(this.x>=canvas.width||this.x<=0||this.y>=canvas.height||this.y<=0)&&this.reset(canvas.width,canvas.height)},n.prototype.reset=function(t,i){this.x=Math.floor(Math.random()*t),this.y=0,this.size=Math.random()*this.maxSize+2,this.speed=1*Math.random()+this.fallSpeed,this.velY=this.speed,this.velX=0},n.prototype.render=function(t){var i=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size);i.addColorStop(0,"rgba(255, 255, 255, 0.9)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.save(),t.fillStyle=i,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill(),t.restore()};new a({maxFlake:"half"==mashiro_option.effect.amount?250:500}).start()}}]);
//# sourceMappingURL=1261.js.map