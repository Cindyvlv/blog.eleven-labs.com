import{U as o,q as u,N as R,d as f,j as O,r as j,V as h,l as P,O as z}from"./index.es-c887dfb7.js";import{a as C}from"./chunk-AY7I2SME-c7b6cf8a.js";import{R as e,r as l}from"./index-76fb7be0.js";import W,{AutocompleteFieldWithResult as D,AutocompleteFieldWithNoResult as B}from"./AutocompleteField.stories-7c702ec6.js";import{A as J}from"./PostPreviewList-4a9382ec.js";import"./Divider-a6467a3d.js";import"./NewsletterBlock-378ec71e.js";import"./NotFoundBlock-34358c82.js";import"./ProgressBar-0473022f.js";import"./SeparatorCircle-0589fd99.js";import"./BackLink-ae30a03f.js";import{g as k}from"./assetHelper-5501944c.js";const x=({introBlock:a,elevenLabsSiteLink:{label:i,...m},contact:r,socialLinks:s,languageLinks:d})=>e.createElement(o,{as:"footer",bg:"navy",color:"white",textAlign:{xs:"center",md:"left"},textSize:"s",className:"footer"},e.createElement(u,{flexDirection:{xs:"column",md:"row"},justifyContent:"around",alignItems:"center",pt:{md:"xl"},pb:{md:"xl"},mb:"xl"},e.createElement(o,{mb:"xl"},e.createElement(u,{justifyContent:{xs:"center",md:"start"},alignItems:"center",pt:{xs:"l",md:"0"},mb:"xxs"},e.createElement(R,{name:"website",size:"2.5em"})),e.createElement(f,null,a.title),e.createElement(f,{fontWeight:"bold",mb:"s"},a.description),e.createElement(O,{...m},i)),e.createElement(o,null,e.createElement(j,{as:"p",size:"l",mb:"s"},r.title),e.createElement(u,{flexDirection:{xs:"column",md:"row"},gap:{md:"xl"}},r.list.map((n,t)=>e.createElement(o,{key:t,mb:r.list.length===t+1?"xs":"m"},e.createElement(f,{fontWeight:"bold",mb:"xxs-2"},n.title),n.description))),e.createElement(u,{gapY:"s"},s.map(({as:n="a",iconName:t,...c},p)=>e.createElement(n,{key:p,target:"_blank",...c},e.createElement(h,{name:t,size:"2.5em",color:"white",mx:"xxs-2",className:"footer__social-icon"})))))),e.createElement(u,{py:"s",justifyContent:"center",alignItems:"center",className:"footer__language-links-container"},e.createElement(o,{mr:"xxs"},e.createElement(h,{name:"language"})),d.map(({label:n,isActive:t,...c},p)=>e.createElement(e.Fragment,{key:p},t?e.createElement(f,{fontWeight:"bold"},n):e.createElement(P,{...c},n),d.length-1!==p&&e.createElement(o,{mx:"s"})))));try{x.displayName="Footer",x.__docgenInfo={description:"",displayName:"Footer",props:{introBlock:{defaultValue:null,description:"",name:"introBlock",required:!0,type:{name:"{ title: ReactNode; description: ReactNode; }"}},elevenLabsSiteLink:{defaultValue:null,description:"",name:"elevenLabsSiteLink",required:!0,type:{name:'{ label: ReactNode; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; }'}},contact:{defaultValue:null,description:"",name:"contact",required:!0,type:{name:"{ title: ReactNode; list: { title: ReactNode; description: ReactNode; }[]; }"}},socialLinks:{defaultValue:null,description:"",name:"socialLinks",required:!0,type:{name:'({ as?: As<any> | undefined; iconName: "twitter" | "linkedin" | "facebook" | "rss" | "welcometothejungle"; } & Pick<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "href">)[]'}},languageLinks:{defaultValue:null,description:"",name:"languageLinks",required:!0,type:{name:'({ label: ReactNode; isActive?: boolean | undefined; } & Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; })[]'}}}}}catch{}const b=({homeLink:a,autocomplete:i,autocompleteIsDisplayed:m=!1,onToggleSearch:r})=>{const s=z("aboveTablet");return e.createElement(o,{as:"header",bg:"azure",className:"header"},e.createElement(u,{justifyContent:"between",alignItems:"center",py:"s",px:{xs:"m",md:"l"}},!s&&m?e.createElement(o,{as:"button",className:"header__icon-button",color:"white",onClick:r},e.createElement(h,{name:"arrow-back",color:"white",size:"28px"})):e.createElement(o,{...a,color:"white"},e.createElement(R,{name:"blog",className:"header__logo"})),s||m?e.createElement(J,{...i}):e.createElement(o,{as:"button",className:"header__icon-button",onClick:r,"aria-label":"Open search"},e.createElement(h,{name:"search",color:"white",size:"28px"}))))};try{b.displayName="Header",b.__docgenInfo={description:"",displayName:"Header",props:{homeLink:{defaultValue:null,description:"",name:"homeLink",required:!0,type:{name:'AsProps<"a">'}},autocomplete:{defaultValue:null,description:"",name:"autocomplete",required:!0,type:{name:"AutocompleteFieldProps"}},autocompleteIsDisplayed:{defaultValue:{value:"false"},description:"",name:"autocompleteIsDisplayed",required:!1,type:{name:"boolean"}},onToggleSearch:{defaultValue:null,description:"",name:"onToggleSearch",required:!1,type:{name:"(() => void)"}}}}}catch{}const L="application/ld+json",T=a=>a==null?void 0:a.map(({text:i,...m},r)=>l.createElement("script",{key:r,...m,dangerouslySetInnerHTML:i?{__html:i}:void 0})),v=({lang:a,title:i,content:m,metas:r,links:s,styles:d,scripts:n})=>l.createElement("html",{lang:a},l.createElement("head",null,l.createElement("meta",{charSet:"UTF-8"}),l.createElement("meta",{name:"robots",content:"index, follow, noarchive"}),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),l.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r==null?void 0:r.map((t,c)=>l.createElement("meta",{key:c,...t})),l.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:k("/favicon.ico")}),l.createElement("link",{rel:"manifest",href:k("/web-app-manifest.json")}),s==null?void 0:s.map((t,c)=>l.createElement("link",{key:c,...t})),d==null?void 0:d.map(({text:t,...c},p)=>l.createElement("style",{key:p,...c,dangerouslySetInnerHTML:t?{__html:t}:void 0})),T(n==null?void 0:n.filter(t=>t.critical&&![L].includes(t.type))),l.createElement("title",null,i),T(n==null?void 0:n.filter(t=>L===t.type))),l.createElement("body",null,l.createElement("div",{id:"root",dangerouslySetInnerHTML:{__html:m}}),T(n==null?void 0:n.filter(t=>!t.critical&&![L].includes(t.type)))));try{v.displayName="HtmlTemplate",v.__docgenInfo={description:"",displayName:"HtmlTemplate",props:{lang:{defaultValue:null,description:"",name:"lang",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},metas:{defaultValue:null,description:"",name:"metas",required:!1,type:{name:"MetaHTMLAttributes<HTMLMetaElement>[]"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"LinkHTMLAttributes<HTMLLinkElement>[]"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"(StyleHTMLAttributes<HTMLStyleElement> & { text: string; })[]"}},scripts:{defaultValue:null,description:"",name:"scripts",required:!1,type:{name:"(ScriptHTMLAttributes<HTMLScriptElement> & { critical?: boolean; text?: string; })[] | undefined"}}}}}catch{}const _=({header:a,footer:i,children:m,cookieConsent:r})=>e.createElement(u,{flexDirection:"column",minHeight:"screen"},a,e.createElement(o,{as:"main",flex:"1"},m),e.createElement(x,{...i}),r);try{_.displayName="LayoutTemplate",_.__docgenInfo={description:"",displayName:"LayoutTemplate",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"FooterProps"}},cookieConsent:{defaultValue:null,description:"",name:"cookieConsent",required:!1,type:{name:"ReactNode"}}}}}catch{}const U={title:"Templates/LayoutTemplate",component:_,args:{header:e.createElement(b,{homeLink:{href:"#"},autocomplete:W.args,onToggleSearch:C("toggleSearch")}),footer:{introBlock:{title:"Découvrez Eleven Labs",description:"Notre site pour mieux nous connaître"},elevenLabsSiteLink:{label:"J'y vais"},contact:{title:"Contact",list:[{title:"Eleven Labs - Paris",description:e.createElement(e.Fragment,null,"15 avenue de la grande armée",e.createElement("br",null),"75116"," ",e.createElement(f,{as:"span",textTransform:"uppercase"},"Paris"))},{title:"Eleven Labs - Nantes",description:e.createElement(e.Fragment,null,"24 mail des chantiers",e.createElement("br",null),"844200"," ",e.createElement(f,{as:"span",textTransform:"uppercase"},"Nantes"))},{title:"business@eleven-labs.com",description:"0182831175"}]},socialLinks:[{iconName:"rss"},{iconName:"facebook"},{iconName:"twitter"},{iconName:"linkedin"},{iconName:"welcometothejungle"}],languageLinks:[{isActive:!0,label:"Français"},{label:"English"}]},children:e.createElement(o,{textAlign:"center",p:"l",flex:"1",style:{minHeight:"250px"}},"Content")},parameters:{layout:"full",viewport:{defaultViewport:"extraSmallScreen"}}},N=a=>e.createElement(_,{...a}),E=N.bind({}),y=N.bind({});y.args={header:e.createElement(b,{homeLink:{href:"#"},autocompleteIsDisplayed:!0,autocomplete:D.args})};const g=N.bind({});g.args={header:e.createElement(b,{homeLink:{href:"#"},autocompleteIsDisplayed:!0,autocomplete:B.args})};var A,w,S;E.parameters={...E.parameters,docs:{...(A=E.parameters)==null?void 0:A.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(S=(w=E.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var H,V,q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var F,M,I;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:"args => <LayoutTemplate {...args} />",...(I=(M=g.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const $=["Overview","LayoutTemplateWithAutocompleteIsOpen","LayoutTemplateWithAutocompleteAndResultNotFound"],oe=Object.freeze(Object.defineProperty({__proto__:null,LayoutTemplateWithAutocompleteAndResultNotFound:g,LayoutTemplateWithAutocompleteIsOpen:y,Overview:E,__namedExportsOrder:$,default:U},Symbol.toStringTag,{value:"Module"}));export{_ as L,U as a,oe as b};
//# sourceMappingURL=LayoutTemplate.stories-67f89af9.js.map
