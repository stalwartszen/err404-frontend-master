import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from 'react';
import './App.css'

import Layout from "./pages/Layout";
import Dashboardpat from './Components/Dashboardpat.js';
import { useStateContext } from "./context";
import Publish from './Components/Publish.js';
import Publishpatient from './pages/Patient/Publishpatient';
import Vitalspatient from './pages/Patient/Vitalspatient';
import Loginpat from './pages/Loginpat.js'
import Registerpat from './pages/Registerpat.js'
import Registerdoc from './pages/Registerdoc.js'
import Logindoc from './pages/Logindoc.js'
import Timeline from "./Components/Timeline";
import Reports from "./Components/Reports";
import RecordDoctor from "./pages/Doctor/RecordDoctors";

function App() {

  
  return (
    <Router>

        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patient/login" element={<Loginpat />} />
        <Route path="/patient/register" element={<Registerpat />} />

        <Route path="/patient/home" element={<Dashboardpat />} />
        <Route path="/patient/publish" element={<Publishpatient />} />
        <Route path="/patient/vitals" element={<Vitalspatient />} />
        <Route path="/patient/diagnosis" element={<Timeline />} />
        <Route path="/patient/records" element={<Reports />} />
        
        <Route path="/doctor/register" element={<Registerdoc />} />
        <Route path="/doctor/login" element={<Logindoc />} />
        <Route path="/doctor/accessrecords" element={<Dashboardpat />} />
        <Route path="/doctor/reports" element={<RecordDoctor />} />

            {/* <Route path="" element={<Home key={Math.random()} />} /> */}
            {/* <Route path="about" element={<About key={Math.random()} />} >
              <Route index element={<Contact />} />
              <Route path="contact" element={<About />} />
            </Route>
            <Route path="dashboard" element={<Dashboard key={Math.random()} />} >
              <Route index element={<Modal key={Math.random()} />} />
              <Route path="react-bootstrap" element={<RBootstrap key={Math.random()} />} >
                <Route index element={<RBCard key={Math.random()} />} />
                <Route path="RBCard" element={<RBCard key={Math.random()} />} />
                <Route path="RBModal" element={<RBModal key={Math.random()} />} />

              </Route>
            </Route> */}
          
        </Routes>

      </Router>
  );
}

export default App;
