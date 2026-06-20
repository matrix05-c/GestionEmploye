import './App.css'
import { Route, Routes } from 'react-router-dom'

import Accueil from './View/Accueil'
import Bilan from './View/Bilan'
import Liste from './View/Liste'

import MainLayout from './Layouts/MainLayout'
import AjoutClient from './View/AjoutClient'
import UpdateClient from './View/UpdateClient'

function App() {
  return (
    <>
      <div className="stars-background"></div>

      <div className="app-content">
        <Routes>
          <Route path='/' element={<Accueil />} />


          <Route element={<MainLayout />} >
            <Route path='liste' element={<Liste />} />

            {/* <Route path='liste' element={<Liste />} /> */}
            <Route path='bilan' element={<Bilan />} />
            <Route path='AddClient' element={<AjoutClient />} />
            <Route path='UpdateClient/:id' element={<UpdateClient />} />

          </Route>

        </Routes>
      </div>

    </>
  )
}

export default App;