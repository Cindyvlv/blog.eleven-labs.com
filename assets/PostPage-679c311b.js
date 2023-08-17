import{j as e,U as a,d as g,q as l,l as h,r as j,V as d}from"./index.es-05e58f38.js";import{a as P,C as m}from"./index-38ebe59f.js";import{D as y}from"./Divider-cc6c8f1e.js";import{N as k}from"./NewsletterBlock-39d0677b.js";import"./NotFoundBlock-3d430469.js";import"./ProgressBar-7e41e907.js";import"./SeparatorCircle-d4ab0e34.js";import"./BackLink-77bf64de.js";import{R as q}from"./index-76fb7be0.js";import{S as f}from"./ShareLinks-ef455099.js";const c=({title:s,authors:n,emptyAvatarImageUrl:i})=>e.jsxs(a,{className:"post-footer",color:"dark-grey",mt:"m",children:[e.jsx(g,{mb:"xxs",size:"xs",fontWeight:"bold",textTransform:"uppercase",children:s}),e.jsx(l,{flexDirection:{xs:"column",md:"row"},gapY:{md:"xxl"},gap:"s",children:n.map((t,r)=>e.jsxs(l,{mb:"s",className:"post-footer__author",children:[e.jsx("img",{src:t.avatarImageUrl??i,alt:t.name,className:t.avatarImageUrl?"post-footer__avatar-img":"post-footer__empty-avatar-img"}),e.jsxs(a,{ml:"xxs",children:[e.jsx(h,{...t.link,weight:"medium","data-internal-link":"author",children:t.name}),e.jsx(g,{as:"div",size:"xs",dangerouslySetInnerHTML:{__html:t.content}})]})]},r))})]});try{c.displayName="PostFooter",c.__docgenInfo={description:"",displayName:"PostFooter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:'{ name: string; content: string; link: AsProps<"a">; avatarImageUrl?: string | undefined; }[]'}},emptyAvatarImageUrl:{defaultValue:null,description:"",name:"emptyAvatarImageUrl",required:!0,type:{name:"string"}}}}}catch{}const p=({title:s,date:n,readingTime:i,authors:t})=>e.jsxs(a,{mt:{xs:"s",md:"xl"},textSize:"xs",children:[e.jsx(j,{as:"h1",size:"xl",children:s}),e.jsxs(l,{flexDirection:{xs:"column",md:"row"},mt:{md:"xxs-3"},children:[e.jsxs(l,{mt:{xs:"xxs",md:"0"},color:"dark-grey",alignItems:"center",children:[e.jsxs(l,{alignItems:"center",children:[e.jsx(d,{name:"calendar",size:"24px"}),e.jsx(a,{as:"span",ml:{xs:"xxs-3"},children:n})]}),e.jsxs(l,{alignItems:"center",ml:{xs:"s"},children:[e.jsx(d,{name:"access-time",size:"24px"}),e.jsx(a,{as:"span",ml:{xs:"xxs-3"},children:i})]})]}),e.jsxs(l,{alignItems:"center",mt:{xs:"xxs-2",md:"0"},ml:{md:"xxs-3"},color:"dark-grey",children:[e.jsx(d,{name:"person",size:"24px"}),t.map((r,o)=>e.jsxs(q.Fragment,{children:[e.jsx(h,{...r.link,ml:"xxs-3","data-internal-link":"author",children:r.name}),t.length-1!==o&&e.jsx(a,{as:"span",ml:"xxs-3",children:"&"})]},r.username))]})]})]});try{p.displayName="PostHeader",p.__docgenInfo={description:"",displayName:"PostHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!0,type:{name:"string"}},authors:{defaultValue:null,description:"",name:"authors",required:!0,type:{name:'{ username: string; name: string; link: AsProps<"a">; }[]'}}}}}catch{}const u=({relatedPostListTitle:s,posts:n,...i})=>e.jsxs(a,{...i,p:"m",className:"related-post-list",children:[e.jsx(j,{as:"p",mb:"m",size:"m",children:s}),n.map((t,r)=>e.jsx(P,{isRelated:!0,...t,mt:"s"},t.slug))]});try{u.displayName="RelatedPostList",u.__docgenInfo={description:"",displayName:"RelatedPostList",props:{relatedPostListTitle:{defaultValue:null,description:"",name:"relatedPostListTitle",required:!0,type:{name:"string"}},posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:'({ slug: string; } & PostPreviewOptions & Omit<PropsOf<"div">, "ref" | "color"> & { as?: As<any> | undefined; } & SystemProps)[]'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const _=({backLink:s,header:n,content:i,footer:t,relatedPostList:r,newsletterBlock:o})=>{const x=typeof window<"u"&&window.location.href;return e.jsxs(m,{variant:"global",children:[e.jsxs(m,{variant:"content",children:[s,e.jsx(p,{...n}),e.jsx(y,{mt:"xs",bg:"light-grey"}),e.jsx(f,{urlToShare:x}),e.jsx(a,{as:"section",textSize:"s",dangerouslySetInnerHTML:{__html:i}}),e.jsx(f,{urlToShare:x}),e.jsx(y,{mt:"xs",bg:"light-grey"}),e.jsx(c,{...t})]}),e.jsxs(m,{children:[e.jsx(k,{mb:{xs:"l"},...o}),r.posts.length>0&&e.jsx(u,{mb:{xs:"xl",md:"xxl"},...r})]})]})};try{_.displayName="PostPage",_.__docgenInfo={description:"",displayName:"PostPage",props:{backLink:{defaultValue:null,description:"",name:"backLink",required:!0,type:{name:"ReactNode"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"PostHeaderProps"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!0,type:{name:"PostFooterProps"}},newsletterBlock:{defaultValue:null,description:"",name:"newsletterBlock",required:!0,type:{name:"NewsletterBlockProps"}},relatedPostList:{defaultValue:null,description:"",name:"relatedPostList",required:!0,type:{name:"RelatedPostListProps"}}}}}catch{}export{_ as P};
//# sourceMappingURL=PostPage-679c311b.js.map
