import './App.css'
import { Route, Routes } from 'react-router-dom'

import Accueil from './View/Accueil'
import Bilan from './View/Bilan'
import Liste from './View/Liste'

import MainLayout from './Layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index element={<Accueil />} />

        <Route path='liste' element={<Liste />} />
        <Route path='bilan' element={<Bilan />} />
      </Route>
    </Routes>
  )
}

export default App;