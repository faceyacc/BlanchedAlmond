import '@/styles/globals.css'
// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme, globalCss } from '@nextui-org/react';
import { AppProps } from 'next/app';


const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

const globalStyles = globalCss({
  body: { backgroundColor: '#171717' }
});


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;

