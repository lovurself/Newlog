import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Menu from './pages/Menu/Menu';
import Folders from './pages/Folders';
import Login from './pages/Login';
import Main from './pages/Main';
import Writing from './pages/Writing';
import Mypage from './pages/Mypage/Mypage';

// reset, preset 설정
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        {/* <Routes>
          <Route path='/' element={<Login />} />
        </Routes> */}
        <Menu>
          <Routes>
            <Route path='/Main' element={<Main />} />
            <Route path='/Writing' element={<Writing />} />
            <Route path='/Mypage' element={<Mypage />} />
            <Route path='/Folders' element={<Folders />} />
          </Routes>
        </Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;
