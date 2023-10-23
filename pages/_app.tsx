import '@/styles/globals.css'
// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme, globalCss } from '@nextui-org/react';
import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { AppStateProvider } from './api/state/AppStateContext';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';


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

const BlanchedAlmondHeader = styled.h1`
  
`



function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <DndProvider backend={Backend}>
        <AppStateProvider>
          <h1>[Blanched Almond]</h1>
          <Component {...pageProps} />
        </AppStateProvider>
      </DndProvider>
    </NextUIProvider>
  );
}

export default MyApp;

