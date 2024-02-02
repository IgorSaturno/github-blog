import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import 'moment/dist/locale/pt-br'
import moment from 'moment'

moment.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
