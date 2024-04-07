import styles from '@/components/ContactForm/ContactForm.module.css'

const ContactForm = () => {
    return(
        <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
                Mensagem de contato:
            </div>
            <form>
                <div className={styles.fields}>
                    <div className={`${styles.field} ${styles.name}`}>
                        <input type="text" placeholder="Digite o nome" required />
                    </div>
                    <div className={`${styles.field} ${styles.email}`}>
                        <input type="text" placeholder="Digite o email" required />
                    </div>
                </div>

                <div className={styles.field}>
                    <input type="text" placeholder="Digite o assunto" required />
                </div>

                <div className={`${styles.field} ${styles.textarea}`}>
                    <textarea cols="30" rows="10" placeholder="Digite o conteúdo"></textarea>
                </div>

                <div className={styles.buttonArea}>
                    <button type="submit">Enviar</button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm