import React from 'react';
import { useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { KVAnimation } from './components/KVAnimation';
import styles from "./styles/App.module.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.hash === '#/';

  const isMobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isMobile && isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <div className={!isHome ? styles["app-layout"] : ""}>
        <div className={!isHome ? styles.sidebar : styles.sidebarinhome} onClick={() => setIsOpen(!isOpen)}>
          <Sidebar Opennow={isOpen} />
        </div>
        {isHome ? (
          <div className={styles.kvAnimation}>
            <KVAnimation /></div>
        ) : (
          <main className={styles["app-content"]}>
            <Outlet />
          </main>
        )
        }
      </div >
    </>
  );
}

export default App;
