import { useState } from "react";
import styles from "@/components/Menu/Menu.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LogoutButton from "../LogoutButton";
import { axiosConfig } from "@/utils/auth";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<FaBars />);

  const activeMenu = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setMenuIcon(<IoClose />);
    } else {
      setMenuIcon(<FaBars />);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/home">
          <img src="/images/thegames_symbol.png" alt="The Games" />
        </Link>
      </div>
      <div className={styles.menu}>
        {/* isActive && styles.active */}
        <ul className={`${styles.menuItems} ${isActive ? styles.active : ""}`} id={styles.menuItems}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/create">Cadastrar jogos</Link>
          </li>
          <LogoutButton />
        </ul>
      </div>
      <div className={styles.menuBtn} id="menuBtn">
        {/* Ícone do Font Awesome */}
        {/* <i class="fa-solid fa-bars" id="menuIcon"></i> */}
        <i id={styles.menuIcon} onClick={activeMenu}>
          {menuIcon}
        </i>
      </div>
    </nav>
  );
};

export default Menu;
