import React from 'react';
// Components
import Header from './components/Header';
import Home from './pages/Home';
// Style
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
