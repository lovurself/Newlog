import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Menu from './components/Menu/Menu';
import Login from './pages/Login';
import Main from './pages/Main';

// reset, preset 설정
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        {/* <Menu>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Menu> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
