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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dallas' element={<Dallas />} />
          <Route path='/Lubbock' element={<Lubbock />} />
          <Route path='/Lubbock/Guadalupe-Villas' element={<Guadalupe />} />
          <Route path='/Lubbock/Adventure-Park' element={<AdventurePark />} />
          <Route path='/Lubbock/UMCP' element={<Umcp />} />
          <Route path='/Lubbock/Firestone' element={<FireStone />} />
          <Route path='/Lubbock/N2EC' element={<N2ec />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
