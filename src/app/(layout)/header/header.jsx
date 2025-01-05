'use client'
import Link from "next/link"
import Image from 'next/image';
import { useState  } from "react";

import styles from "./BurgerNav.module.css";


export default function Header  ( ) {
    const [menuOpen, setMenuOpen] = useState(false); // Initialize state
    
    return (
        <header>
            <nav className={styles.navbar}>
                <h1> 
                    <Image
                    src="/assets/images/CantorLogo.png"
                    width={50}
                    height={50}
                    alt="Cantor College Logo" /> 
                </h1>

                <div className={styles.burger} onClick={ () => setMenuOpen( prev => !prev )}>
                    <div className={`${styles.line} ${menuOpen ? styles.rotate1 : ""}`} />
                    <div className={`${styles.line} ${menuOpen ? styles.fade : ""}`} />
                    <div className={`${styles.line} ${menuOpen ? styles.rotate2 : ""}`} />
                </div>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="#services">Business</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                </ul>
            </nav>
        </header>
    )
}