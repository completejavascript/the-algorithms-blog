webpackJsonp([0x5eadfb0a5d2a],{66:function(e,t,n){(function(a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=(l(r),n(9)),u=n(21),i=l(u),d=n(18),c=l(d),s=n(95),m=l(s),f=n(96),p=l(f);t.default=function(e){return a.createElement("div",null,e.title?a.createElement("h1",{style:{marginTop:""+(0,o.rhythm)(.5)}},e.title):null,e.group.map(function(e,t){var n=e.node;return a.createElement(c.default,{key:t},a.createElement("h2",{style:{marginBottom:""+(0,o.rhythm)(.25),marginTop:""+(0,o.rhythm)(.25)}},a.createElement(i.default,{to:n.fields.slug},n.frontmatter.title)),a.createElement(p.default,{date:n.frontmatter.date,timeToRead:n.timeToRead}),a.createElement("p",{style:{display:"flex",marginTop:""+(0,o.rhythm)(.5),paddingTop:""+(0,o.rhythm)(.5),borderTop:"1px solid hsla(0,0%,0%,0.07)"}},n.excerpt),a.createElement(i.default,{to:n.fields.slug},"Đọc thêm"),a.createElement(m.default,{node:n}))}))},e.exports=t.default}).call(t,n(5))},67:function(e,t,n){(function(a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=(l(r),n(21)),u=l(o),i=n(9),d=n(18),c=l(d);n(43);var s=function(e){var t=e.url,n=e.test,l=e.children;return a.createElement("div",null,n?a.createElement("span",null,l):a.createElement(u.default,{to:t},l))};t.default=function(e){for(var t=e.index,n=e.pageCount,l=e.pathPrefix,r="/"+(l?l+"/":""),o=r+(t-1==1?"":(t-1).toString()+"/"),d=r+((t+1).toString()+"/"),m=1===t,f=t===n,p=[],h=1;h<=n;h++)1===h||h===n||h>=t-2&&h<=t+2?p.push(h):0!==p[p.length-1]&&p.push(0);return a.createElement(c.default,null,a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.createElement(s,{test:m,url:o},a.createElement("i",{className:"fa fa-angle-double-left"})," ","Quay lại"),a.createElement("div",null,p.map(function(e,n){return 0==e?a.createElement("span",{key:n},"..."):e==t?a.createElement("span",{key:n,style:{margin:""+(0,i.rhythm)(.25),color:"#dd4b39"}},e):a.createElement(u.default,{key:n,to:r+(1==e?"":e+"/"),style:{margin:""+(0,i.rhythm)(.25)}},e)})),a.createElement(s,{test:f,url:d},"Tiếp theo"," ",a.createElement("i",{className:"fa fa-angle-double-right"}))))},e.exports=t.default}).call(t,n(5))},306:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=n(2),r=(a(l),n(9)),o=n(45),u=a(o),i=n(66),d=a(i),c=n(67),s=a(c),m=n(68),f=function(t){var n=t.data,a=t.pathContext,l=a.group,o=a.index,i=a.pageCount,c=a.pathPrefix;return e.createElement("div",{style:{marginTop:""+(0,r.rhythm)(.5)}},e.createElement(u.default,{title:n.site.siteMetadata.subtitle+" - "+n.site.siteMetadata.title,meta:[{name:"description",content:""+n.site.siteMetadata.description},{name:"keywords",content:""+n.site.siteMetadata.keywords}].concat((0,m.getRobotIndexTag)(o))}),e.createElement(d.default,{title:"Bài viết mới nhất",group:l}),e.createElement(s.default,{index:o,pageCount:i,pathPrefix:c}))};t.default=f;t.query="** extracted graphql fragment **"}).call(t,n(5))},68:function(e,t){"use strict";function n(e){return e>1?[{name:"robots",content:"noindex"},{name:"googlebot",content:"noindex"}]:[]}t.__esModule=!0,t.getRobotIndexTag=n}});
//# sourceMappingURL=component---src-templates-index-js-9108906aaf3a3fddd3d9.js.map