import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import { BarraNav } from './common/BarraNav/BarraNav'
// import { PersistGate } from 'redux-persist/integration/react'
// import persistStore from 'redux-persist/es/persistStore'

// const persistor = persistStore(store);
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
        <BarraNav/>
          <App/>
          
        </BrowserRouter>  
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)
