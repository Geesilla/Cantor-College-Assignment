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
                <div className={ styles.logo }> 
                    <Image
                    src="/assets/images/CantorLogo.png"
                    width={80}
                    height={80}
                    alt="Cantor College Logo" /> 
                </div>

                <div className={styles.burger} onClick={ () => setMenuOpen( prev => !prev )}>
                    <div>
                        <div className={`${styles.line} ${menuOpen ? styles.rotate1 : ""}`} />
                        <div className={`${styles.line} ${menuOpen ? styles.fade : ""}`} />
                        <div className={`${styles.line} ${menuOpen ? styles.rotate2 : ""}`} />
                    </div>

                </div>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/business">Business</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/students">Students</Link></li>
                    <li><Link href="/Staff">Staff</Link></li>
                    <li><Link href="/facilities">Facilities</Link></li>
                </ul>
            </nav>
        </header>
    )
}