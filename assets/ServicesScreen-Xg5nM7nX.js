import{j as e}from"./react-De-jGD7v.js";import{c as s,H as d,R as h,ak as p,b as x,d as m,E as k,a7 as y,aq as b,ar as f,aj as g,as as j}from"./index-DRszZK42.js";import{u}from"./i18n-CdFJyIge.js";import{u as v}from"./router-DZEUcxvH.js";import{B as M}from"./building-2-CTk9C9ZM.js";import"./motion-RvtAyoA6.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=s("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]),R={ArrowLeftRight:w,Users:x,CreditCard:p,PencilLine:c,RotateCcw:h,HeartHandshake:d,Stethoscope:E,Accessibility:N,FileX:S,MessageCircleWarning:C};function V(){const{t:a,i18n:n}=u(),r=n.language,l=v();return e.jsxs("div",{className:"flex h-full flex-col bg-mist bg-page",children:[e.jsx(m,{}),e.jsxs("div",{className:"no-scrollbar flex-1 overflow-y-auto px-5 pb-10",children:[e.jsx(k,{label:a("services.eyebrow"),icon:M,className:"mt-2"}),e.jsx("h1",{className:"mt-3 text-2xl font-bold text-ink",children:a("services.title")}),e.jsx("p",{className:"mt-2 text-base text-ink-2",children:a("services.subtitle")}),e.jsx(y,{className:"mt-5 space-y-5",children:b.map(i=>e.jsxs("section",{children:[e.jsx("h2",{className:"mb-2 text-sm font-semibold text-ink-2",children:i.title[r]}),e.jsx("div",{className:"space-y-2.5",children:f.filter(t=>t.group===i.id).map(t=>{const o=R[t.icon]??c;return e.jsxs("button",{type:"button",onClick:()=>{j(),l(`/services/${t.id}`)},className:"chrome pressable flex min-h-[64px] w-full items-center gap-3.5 rounded-[22px] bg-white bg-card px-3.5 py-2.5 text-start shadow-soft",children:[e.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] icon-tile",children:e.jsx(o,{size:19,strokeWidth:1.9,className:"text-on-secondary-container"})}),e.jsx("span",{className:"min-w-0 flex-1",children:e.jsx("span",{className:"block text-base font-semibold text-ink",children:t.title[r]})}),e.jsx(g,{size:18,strokeWidth:2,className:"shrink-0 text-ink-3 rtl:rotate-180"})]},t.id)})})]},i.id))})]})]})}export{R as SERVICE_ICONS,V as ServicesScreen};
