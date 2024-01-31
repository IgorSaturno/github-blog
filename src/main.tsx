import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import moment from 'moment'
import 'moment/dist/locale/pt-BR'

moment.locale('pt-BR')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
