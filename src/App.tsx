import React from 'react';
// Components
import Home from './pages/Home';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
