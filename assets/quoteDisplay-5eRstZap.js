import{c}from"./index-K8dN_3SE.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=c("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=c("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);function s(n,a){if(!n.incomeOptions){const o=n.cover??0;return{amount:o,compareTo:o,caption:m=>m("quote.coverCaption",{years:n.years})}}const{lumpSum:t,income10:i,income15:r}=n.incomeOptions,e=n.input.productId==="maash-bokra"?n.input.maturityAge:0;return a==="income_10"?{amount:i,compareTo:i*120,caption:o=>o("quote.incomeCaption",{years:10,age:e})}:a==="income_15"?{amount:r,compareTo:r*180,caption:o=>o("quote.incomeCaption",{years:15,age:e})}:{amount:t,compareTo:t,caption:o=>o("quote.lumpCaption",{age:e})}}export{p as C,u as L,s as r};
