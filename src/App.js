import React, { useState } from 'react';
import AppRouter from './Router';
// reset, preset 설정
import GlobalStyle from './styles/GlobalStyle';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      <GlobalStyle />
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
