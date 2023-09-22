import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Events from './pages/Events';
import ProgramPage from './pages/ProgramPage';
import SponsorEvent from './pages/SponsorEvent';
import OpenPartners from './pages/OpenPartners';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        <Route path="events/:id" element={<Events />} />
        <Route path="program" element={<ProgramPage />} />
        <Route path="sponsor" element={<SponsorEvent />} />
        <Route path="join" element={<OpenPartners />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
