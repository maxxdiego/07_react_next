import styles from '@/components/ContactContent/contactContent.module.css'
import { CiUser, CiLocationOn } from 'react-icons/ci'
import { BsEnvelope } from 'react-icons/bs'

const ContactContent = () => {
    return(
        <div className={`${styles.column} ${styles.left}`}>
            <p>
                Estaremos sempre prontos para atender as necessidades de sua empresa! Não perca tempo e envie uma mensagem para a gente!
            </p>
        <div className={styles.icons}>
            <div className={styles.row}>
                <i><CiUser /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Empresa
                    </div>
                    <div className={styles.subTitle}>
                        Neotech
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><CiLocationOn /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Endereço:
                    </div>
                    <div className={styles.subTitle}>
                        Avenida Winston Churchill
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><BsEnvelope /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        E-mail:
                    </div>
                    <div className={styles.subTitle}>
                        neotech@neotech.com
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactContent