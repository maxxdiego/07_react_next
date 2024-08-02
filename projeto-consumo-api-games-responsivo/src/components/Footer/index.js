import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        {/* FOOTER LEFT */}
        <div className={styles.footerLeft}>
          <ul className={styles.footerItems}>
            <li>Português (Brasil)</li>
            <li>English (US)</li>
            <li>Español</li>
            <li>Français (France)</li>
            <li>Italiano</li>
            <li>Deutsch</li>
            <li>العربية</li>
            <li>हिन्दी</li>
            <li>中文(简体)</li>
            <li>日本語</li>
          </ul>
        </div>
        {/* FOOTER RIGHT */}
        <div className={styles.footerRight}>
          <ul>
            <li>The Games &copy; 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
