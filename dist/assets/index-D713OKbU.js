import{Y as n,a0 as p,Z as f,$ as e,a1 as a,a2 as g}from"./index-j2bBgTE7.js";import{F as w}from"./react-awesome-reveal.esm-Cif9rhWZ.js";import{S as l}from"./index-BreiBzo_.js";const u=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,y=n("p")`
  margin: 1.5rem 0 2rem 0;
`,v=n(p)`
  flex-direction: ${({direction:r})=>r==="left"?"row":"row-reverse"};
`,b=n("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,C=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,S=n("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,B=n("p")`
  font-size: 13px;
`,I=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,M=({icon:r,title:x,content:h,section:c,button:d,t:s,id:m,direction:o})=>{const j=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})};return e.jsx(u,{children:e.jsx(w,{direction:o,triggerOnce:!0,children:e.jsxs(v,{justify:"space-between",align:"middle",id:m,direction:o,children:[e.jsx(a,{lg:11,md:11,sm:12,xs:24,children:e.jsx(l,{src:r,width:"100%",height:"100%"})}),e.jsx(a,{lg:11,md:11,sm:11,xs:24,children:e.jsxs(b,{children:[e.jsx("h6",{children:s(x)}),e.jsx(y,{children:s(h)}),o==="right"?e.jsx(I,{children:typeof d=="object"&&d.map((t,i)=>e.jsx(g,{color:t.color,onClick:()=>j(t.target?t.target:"about"),children:s(t.title)},i))}):e.jsx(C,{children:e.jsx(p,{justify:"space-between",children:typeof c=="object"&&c.map((t,i)=>e.jsxs(a,{span:11,children:[e.jsx(l,{src:t.icon,width:"60px",height:"60px"}),e.jsx(S,{children:s(t.title)}),e.jsx(B,{children:s(t.content)})]},i))})})]})})]})})})},k=f()(M);export{k as default};
