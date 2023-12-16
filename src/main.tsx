import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'
import './index.css'
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Router />
    </MantineProvider>
  </React.StrictMode>,
)
