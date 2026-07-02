import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'

import Accueil from './View/Accueil'
import Bilan from './View/Bilan'
import Liste from './View/Liste'

import MainLayout from './Layouts/MainLayout'
import AjoutClient from './View/AjoutClient'
import UpdateClient from './View/UpdateClient'
import NavBarClient from './Components/NavBarClient'
import Appercue from './View/Client/Appercu'
import Historique from './View/Client/Historique'
import Profil from './View/Client/Profil'

function App() {
  return (
    <>
      {/* <div className="stars-background"></div> */}

      <div className="app-content">
        <Routes>
          <Route path='/' element={<Accueil />} />


          {/* <Route element={<MainLayout />} > */}
          <Route path='liste' element={<Liste />} />

          {/* <Route path='liste' element={<Liste />} /> */}
          <Route path='bilan' element={<Bilan />} />
          <Route path='AddClient' element={<AjoutClient />} />
          <Route path='UpdateClient/:id' element={<UpdateClient />} />
          {/* </Route> */}

          <Route path='EspaceClient' element={<NavBarClient></NavBarClient>}>
            <Route path='AppercuClient' element={<Appercue />}></Route>
            <Route path='Historique' element={<Historique />}></Route>
            <Route path='Profil' element={<Profil />}></Route>
          </Route>
        </Routes>
      </div>



    </>
  )
}

export default App;