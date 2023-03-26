
import './App.css'

import { BarraFoot } from './common/Footer/BarraFoot'
import { BarraNav } from './common/BarraNav/BarraNav'
import { Body } from './pages/Body/Body'

function App() {

  return (
    <>
        <BarraNav/>
        <Body/>
        <BarraFoot/>
    </>
  )
}
export default App
