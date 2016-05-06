/**
 * @license 
 * Highcharts funnel module
 *
 * (c) 2010-2014 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

!function(t){var e=t.getOptions(),n=e.plotOptions,r=t.seriesTypes,i=t.merge,o=function(){},a=t.each;n.funnel=i(n.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}}),r.funnel=t.extendClass(r.pie,{type:"funnel",animate:o,singularTooltips:!0,translate:function(){var t,e,n,r,i,s,l,p,h,c,d,u=function(t,e){return/%$/.test(t)?e*parseInt(t,10)/100:parseInt(t,10)},f=0,g=this,y=g.chart,b=g.options,k=b.reversed,v=y.plotWidth,C=y.plotHeight,m=0,w=b.center,L=u(w[0],v),W=u(w[0],C),H=u(b.width,v),T=u(b.height,C),Y=u(b.neckWidth,v),A=u(b.neckHeight,C),O=T-A,X=g.data,P="left"===b.dataLabels.position?1:0;g.getWidthAt=e=function(t){return t>T-A||T===A?Y:Y+(H-Y)*((T-A-t)/(T-A))},g.getX=function(t,n){return L+(n?-1:1)*(e(k?C-t:t)/2+b.dataLabels.distance)},g.center=[L,W,T],g.centerX=L,a(X,function(t){f+=t.y}),a(X,function(a){d=null,r=f?a.y/f:0,s=W-T/2+m*T,h=s+r*T,t=e(s),i=L-t/2,l=i+t,t=e(h),p=L-t/2,c=p+t,s>O?(i=p=L-Y/2,l=c=L+Y/2):h>O&&(d=h,t=e(O),p=L-t/2,c=p+t,h=O),k&&(s=T-s,h=T-h,d=d?T-d:null),n=["M",i,s,"L",l,s,c,h],d&&n.push(c,d,p,d),n.push(p,h,"Z"),a.shapeType="path",a.shapeArgs={d:n},a.percentage=100*r,a.plotX=L,a.plotY=(s+(d||h))/2,a.tooltipPos=[L,a.plotY],a.slice=o,a.half=P,m+=r})},drawPoints:function(){var t=this,e=t.options,n=t.chart,r=n.renderer;a(t.data,function(n){var i=n.graphic,o=n.shapeArgs;i?i.animate(o):n.graphic=r.path(o).attr({fill:n.color,stroke:e.borderColor,"stroke-width":e.borderWidth}).add(t.group)})},sortByAngle:function(t){t.sort(function(t,e){return t.plotY-e.plotY})},drawDataLabels:function(){var t,e,n,i,o,a=this.data,s=this.options.dataLabels.distance,l=a.length;for(this.center[2]-=2*s;l--;)n=a[l],t=n.half,e=t?1:-1,o=n.plotY,i=this.getX(o,t),n.labelPos=[0,o,i+(s-5)*e,o,i+s*e,o,t?"right":"left",0];r.pie.prototype.drawDataLabels.call(this)}}),e.plotOptions.pyramid=t.merge(e.plotOptions.funnel,{neckWidth:"0%",neckHeight:"0%",reversed:!0}),t.seriesTypes.pyramid=t.extendClass(t.seriesTypes.funnel,{type:"pyramid"})}(Highcharts);