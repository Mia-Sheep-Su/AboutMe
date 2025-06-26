import React from 'react';
import { useState, useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { KVAnimation } from './components/KVAnimation';
import styles from "./styles/App.module.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.hash === '#/';

  const isMobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Sidebar 開關狀態 isOpen:", isOpen);
  }, [isOpen]);


  return (
    <>
      {isMobile && isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <div className={!isHome ? styles["app-layout"] : ""}>
        <div className={!isHome ? styles.sidebarWrapper : styles.sidebarHomeWrapper}>
          <Sidebar Opennow={isOpen}
            onToggleMenu={() => setIsOpen((prev) => !prev)}
            onCloseMenu={() => setIsOpen(false)} />
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
