import { useState } from 'react'
import Link from 'next/link'
import styles from '@/components/Menu/Menu.module.css'
import { FaBars } from 'react-icons/fa'

const Menu = () => {

    const [isActive, setIsActive] = useState(false)

    const activeMenu = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }

    return(
        <nav className={styles.navbar}>
                <div className={styles.maxWidth}>
                    <div className={styles.logo}>
                        <Link href="/">Neotech</Link>
                    </div>

                    {/* isActive && styles.active */}

                    <ul className={`${styles.menu} ${isActive ? styles.active : ""}`} id={styles.menuSite}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="about">Sobre</Link></li>
                        <li><Link href="contact">Contato</Link></li>
                    </ul>
                    <div className={styles.menuBtn} id={styles.menubtn}>
                        {/* <i className="fa-solid fa-bars" id="menuIcon"></i> */}
                        <i id={styles.menuIcon} onClick={activeMenu}><FaBars /></i>
                    </div>
                </div>
        </nav>
    )
}

export default Menu