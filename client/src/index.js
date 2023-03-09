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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
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
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
