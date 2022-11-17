import React from 'react'
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './themes/GlobalStyles';
import Theme from './themes/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
