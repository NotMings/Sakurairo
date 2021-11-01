/*! For license information please see lg-plugin-7.js.LICENSE.txt */
(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[893],{4671:function(t,e,i){i.r(e);var r=function(){return(r=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o="lgAfterAppendSlide",s="lgBeforeSlide",a="lgRotateLeft",l="lgRotateRight",n="lgFlipHorizontal",h="lgFlipVertical",p={rotate:!0,rotateSpeed:400,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0},c=function(){function t(t,e){return this.core=t,this.$LG=e,this.settings=r(r({},p),this.core.settings),this}return t.prototype.buildTemplates=function(){var t="";this.settings.flipVertical&&(t+='<button type="button" id="lg-flip-ver" aria-label="flip vertical" class="lg-flip-ver lg-icon"></button>'),this.settings.flipHorizontal&&(t+='<button type="button" id="lg-flip-hor" aria-label="Flip horizontal" class="lg-flip-hor lg-icon"></button>'),this.settings.rotateLeft&&(t+='<button type="button" id="lg-rotate-left" aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>'),this.settings.rotateRight&&(t+='<button type="button" id="lg-rotate-right" aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>'),this.core.$toolbar.append(t)},t.prototype.init=function(){var t=this;this.settings.rotate&&(this.buildTemplates(),this.rotateValuesList={},this.core.LGel.on(o+".rotate",(function(e){var i=e.detail.index;t.core.getSlideItem(i).find(".lg-img-wrap").first().wrap("lg-img-rotate"),t.core.getSlideItem(t.core.index).find(".lg-img-rotate").css("transition-duration",t.settings.rotateSpeed+"ms")})),this.core.outer.find("#lg-rotate-left").first().on("click.lg",this.rotateLeft.bind(this)),this.core.outer.find("#lg-rotate-right").first().on("click.lg",this.rotateRight.bind(this)),this.core.outer.find("#lg-flip-hor").first().on("click.lg",this.flipHorizontal.bind(this)),this.core.outer.find("#lg-flip-ver").first().on("click.lg",this.flipVertical.bind(this)),this.core.LGel.on(s+".rotate",(function(e){t.rotateValuesList[e.detail.index]||(t.rotateValuesList[e.detail.index]={rotate:0,flipHorizontal:1,flipVertical:1})})))},t.prototype.applyStyles=function(){this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().css("transform","rotate("+this.rotateValuesList[this.core.index].rotate+"deg) scale3d("+this.rotateValuesList[this.core.index].flipHorizontal+", "+this.rotateValuesList[this.core.index].flipVertical+", 1)")},t.prototype.rotateLeft=function(){this.rotateValuesList[this.core.index].rotate-=90,this.applyStyles(),this.triggerEvents(a,{rotate:this.rotateValuesList[this.core.index].rotate})},t.prototype.rotateRight=function(){this.rotateValuesList[this.core.index].rotate+=90,this.applyStyles(),this.triggerEvents(l,{rotate:this.rotateValuesList[this.core.index].rotate})},t.prototype.getCurrentRotation=function(t){if(!t)return 0;var e=this.$LG(t).style(),i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"none";if("none"!==i){var r=i.split("(")[1].split(")")[0].split(",");if(r){var o=Math.round(Math.atan2(r[1],r[0])*(180/Math.PI));return o<0?o+360:o}}return 0},t.prototype.flipHorizontal=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),e=this.getCurrentRotation(t),i="flipHorizontal";90!==e&&270!==e||(i="flipVertical"),this.rotateValuesList[this.core.index][i]*=-1,this.applyStyles(),this.triggerEvents(n,{flipHorizontal:this.rotateValuesList[this.core.index][i]})},t.prototype.flipVertical=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),e=this.getCurrentRotation(t),i="flipVertical";90!==e&&270!==e||(i="flipHorizontal"),this.rotateValuesList[this.core.index][i]*=-1,this.applyStyles(),this.triggerEvents(h,{flipVertical:this.rotateValuesList[this.core.index][i]})},t.prototype.triggerEvents=function(t,e){var i=this;setTimeout((function(){i.core.LGel.trigger(t,e)}),this.settings.rotateSpeed+10)},t.prototype.isImageOrientationChanged=function(){var t=this.rotateValuesList[this.core.index],e=Math.abs(t.rotate)%360!=0,i=t.flipHorizontal<0,r=t.flipVertical<0;return e||i||r},t.prototype.closeGallery=function(){this.isImageOrientationChanged()&&this.core.getSlideItem(this.core.index).css("opacity",0),this.rotateValuesList={}},t.prototype.destroy=function(){this.core.LGel.off(".lg.rotate"),this.core.LGel.off(".rotate")},t}();e.default=c}}]);
//# sourceMappingURL=lg-plugin-7.js.map