(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(113)),a={id:"token-distribution",title:"Token distribution"},c={unversionedId:"tokenomics/token-distribution",id:"tokenomics/token-distribution",isDocsHomePage:!1,title:"Token distribution",description:"Initial Distribution",source:"@site/docs/tokenomics/Token-distribution.md",slug:"/tokenomics/token-distribution",permalink:"/docs/tokenomics/token-distribution",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/tokenomics/Token-distribution.md",version:"current",sidebar:"someSidebar",previous:{title:"Token Economics",permalink:"/docs/tokenomics/token-economics"},next:{title:"Treasury",permalink:"/docs/tokenomics/treasury"}},s=[{value:"Initial Distribution",id:"initial-distribution",children:[]},{value:"Token Minting (post-genesis)",id:"token-minting-post-genesis",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"initial-distribution"},"Initial Distribution"),Object(o.b)("p",null,"At the launch of the Subsocial blockchain we expect the tokens to be distributed in the following\nmanner."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"10% - Private token sales (with 15-25% of this 10% should be unlocked at TGE, 2 years\nvesting)."),Object(o.b)("li",{parentName:"ul"},"25% - Team + advisors (no unlock at TGE, but there is vesting over 2 years)."),Object(o.b)("li",{parentName:"ul"},"65% - Ecosystem development:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"25% Kusama PLO"),Object(o.b)("li",{parentName:"ul"},"15% development grants"),Object(o.b)("li",{parentName:"ul"},"10% marketing"),Object(o.b)("li",{parentName:"ul"},"5% content creators"),Object(o.b)("li",{parentName:"ul"},"5% collators"),Object(o.b)("li",{parentName:"ul"},"5% airdrops to existing communities: Polkadot, Kusama, Steem, Hive.")))),Object(o.b)("p",null,"TGE = Token Generation Event. This is the event when tokens are initially created when the\nmain Subsocial network launches."),Object(o.b)("h2",{id:"token-minting-post-genesis"},"Token Minting (post-genesis)"),Object(o.b)("p",null,"Once the network is live new blocks will be produced with an amount of new tokens that will be\ngiven as a reward to important participants of the network. This is a form of token inflation."),Object(o.b)("p",null,"In the first year, we are considering having no token inflation because the rewards for the key\nparticipants will be included in the genesis block. These participants include the collators and\nPLO participants."),Object(o.b)("p",null,"We are planning to start with 10% inflation (of the total supply) from the second year onwards.\nThe parameters may be adjusted to reflect market conditions. We need to ensure that inflation\ndoesn\u2019t deter new people from joining the ecosystem, but is sufficient to reward certain\nimportant participants from performing necessary functions (collators)."),Object(o.b)("p",null,"The total amount of inflation could be distributed in the following amounts over the year (these\nnumbers can be changed via governance):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"25% for collators (and nominators?)"),Object(o.b)("li",{parentName:"ul"},"25% for treasury"),Object(o.b)("li",{parentName:"ul"},"25% for content creators"),Object(o.b)("li",{parentName:"ul"},"25% for reward pool of future PLOs")))}u.isMDXComponent=!0}}]);