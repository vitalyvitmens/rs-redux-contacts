"use strict";(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([[843],{7356:(e,t,n)=>{n.d(t,{M:()=>p});var r=n(2791),c=n(7689),a=n(1087),o=n(1148),l=n(1878);var s=n(3153),i=n(1162),d=n(184);const u=e=>{let{contact:t}=e;const n=(0,s.T)(),r=(0,c.s0)(),a=(0,s.C)((e=>e.favorites)).some((e=>e.id===t.id));return(0,d.jsx)("div",{onClick:()=>{a?r(o.s.Favorit):n(function(e){return{type:l.Q,payload:{contact:e}}}(t))},children:(0,d.jsx)("svg",{className:"heart","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"".concat(a?i.w.red:i.w.bisque),height:"35px",width:"35px",viewBox:"0 0 22 22",stroke:i.w.red,children:(0,d.jsx)("path",{d:"m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z"})})})},x=e=>{let{id:t}=e;const n=(0,s.T)();return(0,d.jsx)("div",{onClick:()=>n(function(e){return{type:l.B,payload:{id:e}}}(t)),children:(0,d.jsx)("svg",{className:"heart","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:i.w.red,height:"35px",width:"35px",viewBox:"0 0 140 140",stroke:i.w.red,children:(0,d.jsx)("path",{d:"M73.13,93.77,59.58,107.21,44,92.19c-2.43-2.35-5.25-4.92-8.18-7.59C19.93,70.14.79,52.69,0,31.09l0-1.65A28.51,28.51,0,0,1,9,8.54,31.68,31.68,0,0,1,29.57.31l1.71,0c13.72.18,20,6.2,28.18,14.24C66.21,7.38,71.81,1.52,83.21.21a33.07,33.07,0,0,1,18.62,3.37,34.41,34.41,0,0,1,12.24,10.25,31,31,0,0,1,6,14.86A30.55,30.55,0,0,1,116.82,46c-.41.8-.88,1.65-1.39,2.52l-.45.74A30.65,30.65,0,0,1,73.13,93.77Zm30.73-27.85a3.87,3.87,0,0,1,1.48.29,3.92,3.92,0,0,1,1.26.84,4,4,0,0,1,.84,1.25l0,.07a3.78,3.78,0,0,1,.28,1.35v.15a3.86,3.86,0,0,1-.29,1.41,4.15,4.15,0,0,1-.84,1.26,3.7,3.7,0,0,1-1.25.83l-.07,0a4,4,0,0,1-1.39.28H80.6a3.87,3.87,0,0,1-1.48-.3l-.06,0a3.58,3.58,0,0,1-1.2-.81A3.87,3.87,0,0,1,77,71.3l0-.07a4,4,0,0,1-.28-1.4v0A4,4,0,0,1,77,68.33a3.86,3.86,0,0,1,.84-1.27,4,4,0,0,1,1.25-.83,3.71,3.71,0,0,1,1.47-.3Zm6.19-21.06c.34-.58.67-1.17,1-1.76a24.13,24.13,0,0,0,2.56-13.67,24.39,24.39,0,0,0-4.72-11.73,27.78,27.78,0,0,0-9.92-8.31A26.62,26.62,0,0,0,84,6.68c-9.13,1-14,6.2-19.9,12.47l-4.43,4.64L55.2,19.45c-7.27-7.14-12.74-12.52-24-12.67l-1.4,0a25.21,25.21,0,0,0-16.36,6.5A22.12,22.12,0,0,0,6.49,29.52l0,1.34c.67,18.85,18.72,35.3,33.67,48.93,2.89,2.63,5.67,5.16,8.32,7.72l11,10.61,9-8.91a30.66,30.66,0,0,1,41.55-44.35Zm-.76,7.87a24.14,24.14,0,1,0,7.07,17.07,24.06,24.06,0,0,0-7.07-17.07Z"})})})};var v=n(9140),h=n(1398);n(5801);const p=(0,r.memo)((e=>{let{contact:t,withLink:n}=e;const{photo:r,id:l,name:s,phone:p,birthday:f,address:b}=t,w=(0,c.TH)();return(0,d.jsxs)(v.Z,{style:{textShadow:"1px 1px 1px ".concat(i.w.black),border:"1px solid Colors.bisque",boxShadow:"0 -2px 5px ".concat(i.w.black)},children:[(0,d.jsx)(v.Z.Img,{variant:"top",src:r}),(0,d.jsxs)(v.Z.Body,{style:{borderRadius:"5px",background:i.w.bisque},children:[(0,d.jsxs)(v.Z.Body,{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsx)(v.Z.Title,{style:{color:i.w.blue},children:n?(0,d.jsx)(a.rU,{style:{fontWeight:"700",textShadow:"1px 1px 1px ".concat(i.w.black)},to:"".concat(o.s.Contacts,"/").concat(l),children:(0,d.jsx)("div",{className:"text-truncate",children:s})}):s}),w.pathname===o.s.Favorit?(0,d.jsx)(x,{id:t.id}):(0,d.jsx)(u,{contact:t})]}),(0,d.jsx)(v.Z.Body,{children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(h.Z.Item,{style:{background:i.w.bisque,boxShadow:"0 -2px 5px ".concat(i.w.black)},children:(0,d.jsx)(a.rU,{to:"tel:".concat(p),target:"_blank",children:p})}),(0,d.jsx)(h.Z.Item,{style:{color:i.w.green,fontWeight:"600",background:i.w.bisque,boxShadow:"0 -2px 5px ".concat(i.w.black)},children:f}),(0,d.jsx)(h.Z.Item,{style:{color:i.w.red,textShadow:"-1px 1px 1px ".concat(i.w.black),background:i.w.bisque,boxShadow:"0 -2px 5px ".concat(i.w.black)},children:b})]})})]})]},l)}))},2843:(e,t,n)=>{n.r(t),n.d(t,{FavoritListPage:()=>s});var r=n(3153),c=n(7356),a=n(9743),o=n(2677),l=n(184);const s=()=>{const e=(0,r.C)((e=>e.favorites));return(0,l.jsx)(a.Z,{xxl:4,className:"g-4",children:e.map((e=>(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.M,{contact:e,withLink:!0})},e.id)))})}},3153:(e,t,n)=>{n.d(t,{C:()=>a,T:()=>c});var r=n(9434);const c=r.I0,a=r.v9},1306:(e,t,n)=>{n.d(t,{$F:()=>o,PB:()=>a});const r="data-rr-ui-",c="rrUi";function a(e){return"".concat(r).concat(e)}function o(e){return"".concat(c).concat(e)}},7503:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(3808),c=n(2791);var a=n(3201),o=n(4784),l=n(8633),s=n(165),i=n(1306),d=n(4787),u=n(184);const x=["as","onSelect","activeKey","role","onKeyDown"];const v=()=>{},h=(0,i.PB)("event-key"),p=c.forwardRef(((e,t)=>{let{as:n="div",onSelect:d,activeKey:p,role:f,onKeyDown:b}=e,w=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,x);const y=(0,c.useReducer)((function(e){return!e}),!1)[1],g=(0,c.useRef)(!1),m=(0,c.useContext)(l.Z),j=(0,c.useContext)(s.Z);let Z,k;j&&(f=f||"tablist",p=j.activeKey,Z=j.getControlledId,k=j.getControllerId);const C=(0,c.useRef)(null),I=e=>{const t=C.current;if(!t)return null;const n=(0,r.Z)(t,"[".concat(h,"]:not([aria-disabled=true])")),c=t.querySelector("[aria-selected=true]");if(!c||c!==document.activeElement)return null;const a=n.indexOf(c);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},A=(e,t)=>{null!=e&&(null==d||d(e,t),null==m||m(e,t))};(0,c.useEffect)((()=>{if(C.current&&g.current){const e=C.current.querySelector("[".concat(h,"][aria-selected=true]"));null==e||e.focus()}g.current=!1}));const N=(0,a.Z)(t,C);return(0,u.jsx)(l.Z.Provider,{value:A,children:(0,u.jsx)(o.Z.Provider,{value:{role:f,activeKey:(0,l.h)(p),getControlledId:Z||v,getControllerId:k||v},children:(0,u.jsx)(n,Object.assign({},w,{onKeyDown:e=>{if(null==b||b(e),!j)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=I(-1);break;case"ArrowRight":case"ArrowDown":t=I(1);break;default:return}t&&(e.preventDefault(),A(t.dataset[(0,i.$F)("EventKey")]||null,e),g.current=!0,y())},ref:N,role:f}))})})}));p.displayName="Nav";const f=Object.assign(p,{Item:d.Z})},4784:(e,t,n)=>{n.d(t,{Z:()=>c});const r=n(2791).createContext(null);r.displayName="NavContext";const c=r},4787:(e,t,n)=>{n.d(t,{Z:()=>h,v:()=>x});var r=n(2791),c=n(9007),a=n(4784),o=n(8633),l=n(5341),s=n(1306),i=n(165),d=n(184);const u=["as","active","eventKey"];function x(e){let{key:t,onClick:n,active:l,id:d,role:u,disabled:x}=e;const v=(0,r.useContext)(o.Z),h=(0,r.useContext)(a.Z),p=(0,r.useContext)(i.Z);let f=l;const b={role:u};if(h){u||"tablist"!==h.role||(b.role="tab");const e=h.getControllerId(null!=t?t:null),n=h.getControlledId(null!=t?t:null);b[(0,s.PB)("event-key")]=t,b.id=e||d,f=null==l&&null!=t?h.activeKey===t:l,!f&&(null!=p&&p.unmountOnExit||null!=p&&p.mountOnEnter)||(b["aria-controls"]=n)}return"tab"===b.role&&(b["aria-selected"]=f,f||(b.tabIndex=-1),x&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=(0,c.Z)((e=>{x||(null==n||n(e),null!=t&&v&&!e.isPropagationStopped()&&v(t,e))})),[b,{isActive:f}]}const v=r.forwardRef(((e,t)=>{let{as:n=l.ZP,active:r,eventKey:c}=e,a=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,u);const[i,v]=x(Object.assign({key:(0,o.h)(c,a.href),active:r},a));return i[(0,s.PB)("active")]=v.isActive,(0,d.jsx)(n,Object.assign({},a,i,{ref:t}))}));v.displayName="NavItem";const h=v},8633:(e,t,n)=>{n.d(t,{Z:()=>a,h:()=>c});var r=n(2791);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},a=r.createContext(null)},165:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(2791).createContext(null)},3808:(e,t,n)=>{n.d(t,{Z:()=>c});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function c(e,t){return r(e.querySelectorAll(t))}},1398:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(1694),c=n.n(r),a=n(2791),o=(n(2391),n(8580)),l=n(7503),s=n(162),i=n(9007),d=n(4787),u=n(8633),x=n(184);const v=a.forwardRef(((e,t)=>{let{bsPrefix:n,active:r,disabled:a,eventKey:o,className:l,variant:v,action:h,as:p,...f}=e;n=(0,s.vE)(n,"list-group-item");const[b,w]=(0,d.v)({key:(0,u.h)(o,f.href),active:r,...f}),y=(0,i.Z)((e=>{if(a)return e.preventDefault(),void e.stopPropagation();b.onClick(e)}));a&&void 0===f.tabIndex&&(f.tabIndex=-1,f["aria-disabled"]=!0);const g=p||(h?f.href?"a":"button":"div");return(0,x.jsx)(g,{ref:t,...f,...b,onClick:y,className:c()(l,n,w.isActive&&"active",a&&"disabled",v&&"".concat(n,"-").concat(v),h&&"".concat(n,"-action"))})}));v.displayName="ListGroupItem";const h=v,p=a.forwardRef(((e,t)=>{const{className:n,bsPrefix:r,variant:a,horizontal:i,numbered:d,as:u="div",...v}=(0,o.Ch)(e,{activeKey:"onSelect"}),h=(0,s.vE)(r,"list-group");let p;return i&&(p=!0===i?"horizontal":"horizontal-".concat(i)),(0,x.jsx)(l.Z,{ref:t,...v,as:u,className:c()(n,h,a&&"".concat(h,"-").concat(a),p&&"".concat(h,"-").concat(p),d&&"".concat(h,"-numbered"))})}));p.displayName="ListGroup";const f=Object.assign(p,{Item:h})},2391:e=>{var t=function(){};e.exports=t},5801:()=>{}}]);
//# sourceMappingURL=843.6f2755ba.chunk.js.map