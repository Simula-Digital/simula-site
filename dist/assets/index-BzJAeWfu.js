import{Y as i,Z as a,$ as e,a0 as l,a1 as c,a2 as m}from"./index-j2bBgTE7.js";import{S as x}from"./react-awesome-reveal.esm-Cif9rhWZ.js";const h=i("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`,p=i("p")`
  padding: 0.75rem 0 0.75rem;
`,j=i("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,g=({title:s,content:r,button:t,t:n})=>{const d=o=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})};return e.jsx(h,{children:e.jsx(x,{direction:"up",triggerOnce:!0,children:e.jsx(l,{justify:"center",align:"middle",children:e.jsx(j,{children:e.jsxs(c,{lg:24,md:24,sm:24,xs:24,children:[e.jsx("h6",{children:n(s)}),e.jsx(p,{children:n(r)}),t&&e.jsx(m,{name:"submit",onClick:()=>d("mission"),children:n(t)})]})})})})})},y=a()(g);export{y as default};
