(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?n.a.createElement(f,c(c({ref:t},p),{},{components:r})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(116)),i={id:"upgradability",title:"Upgradability"},c={unversionedId:"lightpaper/architecture/upgradability",id:"lightpaper/architecture/upgradability",isDocsHomePage:!1,title:"Upgradability",description:"Substrate allows blockchains to be seamlessly upgraded without hardforks. We have already",source:"@site/docs/lightpaper/architecture/Upgradability.md",slug:"/lightpaper/architecture/upgradability",permalink:"/docs/lightpaper/architecture/upgradability",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/lightpaper/architecture/Upgradability.md",version:"current",sidebar:"someSidebar",previous:{title:"Scalability",permalink:"/docs/lightpaper/architecture/scalability"},next:{title:"Customizability",permalink:"/docs/lightpaper/architecture/customizability"}},l=[],p={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Substrate allows blockchains to be seamlessly upgraded without hardforks. We have already\nwitnessed forkless upgrades in Polkadot and Kusama. The same on-chain governance and\nupgrade mechanisms are available to all Substrate-based blockchains."),Object(o.b)("p",null,"This approach to blockchain technology is perfect for Subsocial. We believe that it isn\u2019t possible\nto know everything upfront. The functionality and parameters of the platform will have to be changed\nalong the way as the community finds bugs or as it becomes necessary to make improvements."),Object(o.b)("p",null,"If you have an idea for new chain functionality, then you can suggest the feature\nor create a pull request to Subsocial's ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-node"},"node repo"),"."))}u.isMDXComponent=!0}}]);