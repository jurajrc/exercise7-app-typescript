import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import TemplateDestination from './components/TemplateDestination';
import TemplateCrew from './components/TemplateCrew';
import TemplateTechnology from './components/TemplateTechnology';
// Data
import data from './data.json'
// Style

function App() {

  const [allData] = useState(data)

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/destination/" element={<Destination />} >
            <Route path="/destination/moon" element={<TemplateDestination itemDestination={allData.destinations[0]} />} />
            <Route path="/destination/mars" element={<TemplateDestination itemDestination={allData.destinations[1]} />} />
            <Route path="/destination/europa" element={<TemplateDestination itemDestination={allData.destinations[2]} />} />
            <Route path="/destination/titan" element={<TemplateDestination itemDestination={allData.destinations[3]} />} />
          </Route>

          <Route path="/crew/" element={<Crew />} >
            <Route path="/crew/commander" element={<TemplateCrew itemCrew={allData.crew[0]} />} />
            <Route path="/crew/specialist" element={<TemplateCrew itemCrew={allData.crew[1]} />} />
            <Route path="/crew/pilot" element={<TemplateCrew itemCrew={allData.crew[2]} />} />
            <Route path="/crew/engineer" element={<TemplateCrew itemCrew={allData.crew[3]} />} />
          </Route>

          <Route path="/technology" element={<Technology />} >
            <Route path="/technology/vehicle" element={<TemplateTechnology itemTech={allData.technology[0]} />} />
            <Route path="/technology/spaceport" element={<TemplateTechnology itemTech={allData.technology[1]} />} />
            <Route path="/technology/capsule" element={<TemplateTechnology itemTech={allData.technology[2]} />} />
          </Route>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
