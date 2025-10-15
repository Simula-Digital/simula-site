import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Poppins', 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #0001f4;
        overflow-x: hidden;
        color: #ffffff;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        color: #171717;
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
        color: #fff;
            background: none;
            box-shadow: #fff 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins', 'Motiva Sans Bold', serif;
        color: #ffffff;
        font-size: 48px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #fff;
        font-size: 20px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    h2 {
        font-size: 40px;
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #201FD1;

        :hover {
            color: #201FD1;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .sub-color {
        color: #d4d9ff;
    }
`;
