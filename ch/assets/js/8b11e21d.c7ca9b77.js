(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,b=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?a.a.createElement(b,r(r({ref:t},s),{},{components:n})):a.a.createElement(b,r({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),i=(n(0),n(115)),l={id:"token-claim",title:"Token Claim FAQ"},r={unversionedId:"faq/token-claim",id:"faq/token-claim",isDocsHomePage:!1,title:"Token Claim FAQ",description:"What accounts are eligible for the token claim?",source:"@site/docs/faq/TokenClaim.md",slug:"/faq/token-claim",permalink:"/ch/docs/faq/token-claim",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/faq/TokenClaim.md",version:"current",sidebar:"someSidebar",previous:{title:"\u6982\u8ff0",permalink:"/ch/docs/faq/overview"},next:{title:"Glossary",permalink:"/ch/docs/glossary/overview"}},c=[{value:"What accounts are eligible for the token claim?",id:"what-accounts-are-eligible-for-the-token-claim",children:[]},{value:"Why are there multiple token claim rounds?",id:"why-are-there-multiple-token-claim-rounds",children:[]},{value:"Can I claim tokens from Polkawallet/Fearless Wallet/Trust Wallet?",id:"can-i-claim-tokens-from-polkawalletfearless-wallettrust-wallet",children:[]},{value:"Can I claim tokens from my Ledger?",id:"can-i-claim-tokens-from-my-ledger",children:[]},{value:"Can I claim from my phone?",id:"can-i-claim-from-my-phone",children:[]},{value:"I have already made a claim. Can I claim again?",id:"i-have-already-made-a-claim-can-i-claim-again",children:[]},{value:"I contributed to a winning crowdloan, why am I not eligible?",id:"i-contributed-to-a-winning-crowdloan-why-am-i-not-eligible",children:[]},{value:"I cannot get my Polkadot.js extension to connect to the website. What is wrong?",id:"i-cannot-get-my-polkadotjs-extension-to-connect-to-the-website-what-is-wrong",children:[]},{value:"Do I need DOT, KSM, or SUB to claim tokens?",id:"do-i-need-dot-ksm-or-sub-to-claim-tokens",children:[]},{value:"What are SUB tokens? What can I do with them?",id:"what-are-sub-tokens-what-can-i-do-with-them",children:[]},{value:"What will happen to my tokens when the mainnet launches?",id:"what-will-happen-to-my-tokens-when-the-mainnet-launches",children:[]},{value:"What times will the remaining token claim rounds open?",id:"what-times-will-the-remaining-token-claim-rounds-open",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-accounts-are-eligible-for-the-token-claim"},"What accounts are eligible for the token claim?"),Object(i.b)("p",null,"Eligibility is based on two snapshots of DOT and KSM holders from April 15th and May 21st, 2021.\nTo be eligible, an account must have held at least 1 DOT during both snapshots, or at least 0.1 KSM during both snapshots. "),Object(i.b)("p",null,"We also took a snapshot on September 24th of all accounts that had participated in any of the winning crowdloans up to that date\n(Karura, Moonbeam, Khala, Shiden, Bifrost, KILT, Basilisk, and Calamari).\nAll accounts in this snapshot are also eligible, however, crowdloan contributions must have been made through Polkadot.js.\nWallet balances on exchanges and crowdloan contributions through exchanges, or third party websites such as Zenlink or Bifrost\u2019s SALP, do not provide eligibility."),Object(i.b)("h2",{id:"why-are-there-multiple-token-claim-rounds"},"Why are there multiple token claim rounds?"),Object(i.b)("p",null,"The Subsocial community is spread all around the world. To account for different time zones and working hours,\nwe have split the token claim up into multiple rounds that will take place at different times."),Object(i.b)("h2",{id:"can-i-claim-tokens-from-polkawalletfearless-wallettrust-wallet"},"Can I claim tokens from Polkawallet/Fearless Wallet/Trust Wallet?"),Object(i.b)("p",null,"No. Currently, no mobile wallets support Subsocial. This is out of our control.\nHowever, you can import your account into Polkadot.js on a desktop browser using your seed phrase,\nand then you will be able to claim."),Object(i.b)("p",null,"For Fearless Wallet, go to Settings > Accounts > Info > Export to find your seed phrase."),Object(i.b)("p",null,"For Polkawallet, go to Profile > Manage Account > Export Account > Mnemonic to find your seed phrase."),Object(i.b)("p",null,"For Trust Wallet, go to Settings > Wallets > Click the 3 dots on the wallet you want to claim on > Show Recovery Phrase to find your seed phrase."),Object(i.b)("h2",{id:"can-i-claim-tokens-from-my-ledger"},"Can I claim tokens from my Ledger?"),Object(i.b)("p",null,"No. Currently, Ledger does not support Subsocial. This is out of our control.\nHowever, if you have the seed phrase for your Ledger account, you can import your account into Polkadot.js on a desktop browser using your seed phrase,\nand then you will be able to claim."),Object(i.b)("h2",{id:"can-i-claim-from-my-phone"},"Can I claim from my phone?"),Object(i.b)("p",null,"No. There are currently no mobile wallets that support Subsocial."),Object(i.b)("h2",{id:"i-have-already-made-a-claim-can-i-claim-again"},"I have already made a claim. Can I claim again?"),Object(i.b)("p",null,"Each eligible account can only claim once. For example, if an eligible account claimed during round 1, they cannot claim again during rounds 2, 3, or 4.\nIf you have multiple eligible accounts, you will be able to claim one time on each eligible account."),Object(i.b)("h2",{id:"i-contributed-to-a-winning-crowdloan-why-am-i-not-eligible"},"I contributed to a winning crowdloan, why am I not eligible?"),Object(i.b)("p",null,"Only contributions made prior to September 24th, and made through Polkadot.js are eligible.\nAny crowdloan contributions made through an exchange will not provide eligibility.\nAny crowdloans made through another website, such as Zenlink, or Bifrost\u2019s SALP, will not count."),Object(i.b)("h2",{id:"i-cannot-get-my-polkadotjs-extension-to-connect-to-the-website-what-is-wrong"},"I cannot get my Polkadot.js extension to connect to the website. What is wrong?"),Object(i.b)("p",null,"If you are having issues connecting, try the below steps."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Make sure your Polkadot.js account is set to "Allow use on any chain" '),Object(i.b)("li",{parentName:"ul"},"Make sure you have allowed app.subsocial.network to access your Polkadot.js"),Object(i.b)("li",{parentName:"ul"},"Update your metadata"),Object(i.b)("li",{parentName:"ul"},"Turn your AdBlock off"),Object(i.b)("li",{parentName:"ul"},"Reload the page")),Object(i.b)("h2",{id:"do-i-need-dot-ksm-or-sub-to-claim-tokens"},"Do I need DOT, KSM, or SUB to claim tokens?"),Object(i.b)("p",null,"No. Token claim transactions are free for all eligible accounts."),Object(i.b)("h2",{id:"what-are-sub-tokens-what-can-i-do-with-them"},"What are SUB tokens? What can I do with them?"),Object(i.b)("p",null,"SUB tokens are the native token of the Subsocial blockchain, and are used to interact with the network.\nThe Subsocial mainnet has not launched yet, but our betanet is live with a functioning product.\nYou can use your SUB tokens to create a space, make posts, and interact with others on Subsocial,\nby following them, or commenting and voting on their posts. In the future you will be able to send other users tips with SUB tokens,\nand much more. Subsocial thrives on user interaction, which is why the token claim exists."),Object(i.b)("p",null,"You can create your very own ",Object(i.b)("a",{parentName:"p",href:"https://app.subsocial.network/spaces/new"},"Space")," on Subsocial,\nand set up your ",Object(i.b)("a",{parentName:"p",href:"https://app.subsocial.network/accounts/edit"},"profile"),"."),Object(i.b)("h2",{id:"what-will-happen-to-my-tokens-when-the-mainnet-launches"},"What will happen to my tokens when the mainnet launches?"),Object(i.b)("p",null,"Most token balances will be transferred from the betanet to the mainnet,\nand most users will have the same token balance as they did on the betanet."),Object(i.b)("h2",{id:"what-times-will-the-remaining-token-claim-rounds-open"},"What times will the remaining token claim rounds open?"),Object(i.b)("p",null,"Round 2 will begin at 5AM UTC+0 on Thursday, October 7th, 2021. Rounds 3 and 4 will be announced at a later date."))}u.isMDXComponent=!0}}]);