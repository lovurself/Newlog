import React, { useState } from 'react';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';

function Menu({ children }) {
    const [navOpen, navOpenSet] = useState(true);
    const handleToggleChange = () => {
        navOpenSet(!navOpen);
    }

    return (
        <>
            <TopMenu toggle={navOpen} />
            <SideMenu toggle={navOpen} toggleHandle={handleToggleChange} />
            <main>
                {children}
            </main>
        </>
    );
}

export default Menu