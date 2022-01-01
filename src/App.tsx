import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/destination" element= {<Destination />} />
          <Route path="/crew" element= {<Crew />} />
          <Route path="/technology" element= {<Technology />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
