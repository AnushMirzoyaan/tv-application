'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { icons } from '../../utils/icons';
import styles from './index.module.css';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <nav
      ref={sidebarRef}
      className={`${styles.container} ${isOpen ? styles.open : ''}`}
    >
      <div className={styles.sidebarMenu}>
        <div className={styles.navLinks}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className={styles.sidebarMenuItem}
              onClick={toggleMenu}
            >
              <div className={styles.navIconContainer}>
                <Image src={icon.src} width={25} height={25} alt={icon.name} />
              </div>
              <span className={isOpen ? styles.label : styles.hiddenLabel}>
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarMenu;
