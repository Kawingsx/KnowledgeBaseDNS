"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[462],{4137:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,v=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return t?n.createElement(v,s(s({ref:r},l),{},{components:t})):n.createElement(v,s({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4455:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(4137)),s=["components"],i={title:"Overview",sidebar_position:1},d=void 0,c={unversionedId:"public-dns/overview",id:"public-dns/overview",isDocsHomePage:!1,title:"Overview",description:"What is AdGuard DNS?",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/public-dns/overview.md",sourceDirName:"public-dns",slug:"/public-dns/overview",permalink:"/KnowledgeBaseDNS/zh-TW/public-dns/overview",editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/overview.md",version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"Known DNS Providers",permalink:"/KnowledgeBaseDNS/zh-TW/general/dns-providers"},next:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/zh-TW/public-dns/solving-problems/how-to-flush-dns-cache"}},l=[{value:"What is AdGuard DNS?",id:"what-is-adguard-dns",children:[]},{value:"Public AdGuard DNS servers",id:"public-adguard-dns-servers",children:[]},{value:"AdGuard DNS protocols",id:"adguard-dns-protocols",children:[{value:"DNSCrypt",id:"dnscrypt",children:[]},{value:"DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)",id:"dns-over-https-doh-and-dns-over-tls-dot",children:[]},{value:"DNS-over-QUIC (DoQ)",id:"dns-over-quic-doq",children:[]}]}],u={toc:l};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-adguard-dns"},"What is AdGuard DNS?"),(0,a.kt)("p",null,"AdGuard DNS is a free, privacy-oriented DNS resolver that provides secure connection and also can block tracking, ads, phishing and adult content (optionally). AdGuard DNS does not require installing any applications. It is easy to use and can be effortlessly set up on any device (smartphones, desktops, routers, game consoles, etc.)."),(0,a.kt)("h2",{id:"public-adguard-dns-servers"},"Public AdGuard DNS servers"),(0,a.kt)("p",null,'AdGuard DNS has three different public servers. "Default" server is for blocking ads, trackers, malware and phishing websites. "Family protection" does the same, but also blocks websites with adult content and enforces "Safe search" option in browsers that provide it. "Non-filtering" provides a secure and reliable connection but doesn\'t block anything. You can find detailed instructions on setting up AdGuard DNS on any device on ',(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/en/public-dns.html"},"our website"),". Each server supports different secure protocols: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), and DNS-over-QUIC (DoQ)."),(0,a.kt)("h2",{id:"adguard-dns-protocols"},"AdGuard DNS protocols"),(0,a.kt)("p",null,"Besides plain DNS (both IPv4 and IPv6) AdGuard DNS supports various encrypted protocols, so you can choose the one that suits you best."),(0,a.kt)("h3",{id:"dnscrypt"},"DNSCrypt"),(0,a.kt)("p",null,"AdGuard DNS allows you to use a specific encrypted protocol \u2014 DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration. But compared to the DoH, DoT and DoQ protocols, DNSCrypt is considered obsolete and if possible we recommend using these protocols."),(0,a.kt)("h3",{id:"dns-over-https-doh-and-dns-over-tls-dot"},"DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)"),(0,a.kt)("p",null,"DoH and DoT are modern secure DNS protocols that gain more and more popularity and will become the industry standards for the foreseeable future. Both are more reliable than DNSCrypt and both are supported by AdGuard DNS."),(0,a.kt)("h3",{id:"dns-over-quic-doq"},"DNS-over-QUIC (DoQ)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC is a new DNS encryption protocol")," and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots \u2014 working over UDP. It brings all the good things that QUIC has to offer \u2014 out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH."))}p.isMDXComponent=!0}}]);