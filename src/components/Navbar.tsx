"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_wrapper}>
                {/*Логотип */}
                <Link href='/' className={styles.navbarLogo}>
                    Sushipak
                </Link>

                {/* Меню */}
                <div className={styles.navbar_wrapperMenu}>

                    <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
                        <li>
                            <Link href='/menu'>MENU</Link>
                        </li>
                        <li>
                            <Link href='/promocja'>PROMOCJA</Link>
                        </li>
                        <li>
                            <Link href='/informacja'>INFORMACJA</Link>
                        </li>
                        <li>
                            <Link href='/kontakt'>KONTAK1</Link>
                        </li>
                    </ul>
        
                    {/* Соцсети */}
                    <div className={styles.navbar_socialLinks}>
                    <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
                    <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
                    </div>

                    {/* БУРГЕР-МЕНЮ */}

                    <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                        <div/>
                        <div/>
                        <div/>
                    </div>

                </div>
            </div>
        </nav>
    )
}