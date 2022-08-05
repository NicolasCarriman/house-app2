import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import './index.css';
import App from './App.tsx';
import {store} from './app/reduxStore'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './addons/theme';
import StoreProvider from './app/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <StoreProvider>
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </StoreProvider>
  </Provider>
);


