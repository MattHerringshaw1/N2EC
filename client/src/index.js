import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Lubbock from './components/Lubbock';
import Dallas from './components/Dallas';
import BaseLayout from './components/BaseLayout';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guadalupe from './components/jobsites/lubbock/Guadalupe';
import AdventurePark from './components/jobsites/lubbock/AdventurePark';
import Umcp from './components/jobsites/lubbock/Umcp';
import FireStone from './components/jobsites/lubbock/FireStone';
import N2ec from './components/jobsites/lubbock/N2ec';
import TwinPeaks from './components/jobsites/lubbock/TwinPeaks';
import Orchard from './components/jobsites/lubbock/Orchard';
import Table82 from './components/jobsites/lubbock/Table82';
import PeoplesBank from './components/jobsites/lubbock/PeoplesBank';
import GreatClips from './components/jobsites/lubbock/GreatClips';
import LasBrisas from './components/jobsites/lubbock/LasBrisas';
import Dominos from './components/jobsites/lubbock/Dominos';
import ElMitote from './components/jobsites/lubbock/ElMitote';
import Milan from './components/jobsites/lubbock/Milan';
import Tesla from './components/jobsites/lubbock/Tesla';
import OurTeam from './components/OurTeam';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Careers' element={<Careers />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/OurTeam' element={<OurTeam />} />
          <Route path='/Dallas' element={<Dallas />} />
          <Route path='/Lubbock' element={<Lubbock />} />
          <Route path='/Lubbock/GuadalupeVillas' element={<Guadalupe />} />
          <Route path='/Lubbock/AdventurePark' element={<AdventurePark />} />
          <Route path='/Lubbock/UMC-Family&ChildrensClinic' element={<Umcp />} />
          <Route path='/Lubbock/Firestone' element={<FireStone />} />
          <Route path='/Lubbock/N2EC' element={<N2ec />} />
          <Route path='/Lubbock/TwinPeaks' element={<TwinPeaks />} />
          <Route path='/Lubbock/ChildrensOrchardAcademy' element={<Orchard />} />
          <Route path='/Lubbock/Table82' element={<Table82 />} />
          <Route path='/Lubbock/PeoplesBank' element={<PeoplesBank />} />
          <Route path='/Lubbock/GreatClips' element={<GreatClips />} />
          <Route path='/Lubbock/LasBrisas' element={<LasBrisas />} />
          <Route path='/Lubbock/DominosPizza' element={<Dominos />} />
          <Route path='/Lubbock/ElMitote' element={<ElMitote />} />
          <Route path='/Lubbock/Milan' element={<Milan />} />
          <Route path='/Lubbock/Tesla' element={<Tesla />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
