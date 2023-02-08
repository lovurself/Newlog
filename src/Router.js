import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Menu from './pages/Menu/Menu';
import Folders from './pages/Folders';
import Login from './pages/Login';
import Main from './pages/Main';
import Writing from './pages/Writing';
import Mypage from './pages/Mypage/Mypage';

function AppRouter({ isLoggedIn }) {
    return (
        <BrowserRouter>
          {
            isLoggedIn
            ? 
              <Menu>
                <Routes>
                  <Route path='/Main' element={<Main />} />
                  <Route path='/Writing' element={<Writing />} />
                  <Route path='/Mypage' element={<Mypage />} />
                  <Route path='/Folders' element={<Folders />} />
                </Routes>
              </Menu>
            :
              <Routes>
                <Route path='/' element={<Login />} />
              </Routes>
          }
        </BrowserRouter>
    );
}

export default AppRouter;