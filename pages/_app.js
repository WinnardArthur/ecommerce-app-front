import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lora&family=Poppins&family=Roboto:ital,wght@0,100;0,400;0,500;1,700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
     </>
  )
}
