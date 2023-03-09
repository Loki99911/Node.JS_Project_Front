import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
// import 'modern-normalize/modern-normalize.css';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { store, persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
