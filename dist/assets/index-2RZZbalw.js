import{Y as l,r as s,$ as n}from"./index-j2bBgTE7.js";import{S as c}from"./index-BreiBzo_.js";const a=l("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`,x=()=>{const[e,r]=s.useState(!1),o=s.useCallback(()=>{const t=window.scrollY;!e&&t>350?r(!0):t<=350&&r(!1)},[e]);s.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[o]);const i=()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};return n.jsx(a,{onClick:i,show:e,children:n.jsx(c,{src:"scroll-top.svg",width:"20px",height:"20px"})})};export{x as default};
