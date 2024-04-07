import styles from '@/components/HomePremium/HomePremium.module.css'
import Link from 'next/link'

const HomePremium = () => {
    return(
        <section className={`${styles.content} ${styles.premium}`}>
                <div className={styles.maxWidth}>
                    <h2 className={styles.title}>Serviço Premium</h2>
                    <div className={styles.premiumContent}>
                        <div className={`${styles.column} ${styles.left}`}>
                            <img src="/images/homePremium/premium.jpg" alt="Serviço premium" />
                        </div>
                        <div className={`${styles.column} ${styles.right}`}>
                            <div className={styles.text}>
                                Desenvolvido para você atingir seus melhores índices de produtividade, criativiade e bem-estar.
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorum at, vitae culpa non similique nulla iure fuga. Error ut a voluptate porro veritatis assumenda modi alias illo neque suscipit.
                                Voluptatum maxime animi ipsa laboriosam aperiam illo assumenda recusandae tenetur expedita hic, sunt aliquam, eum ipsum sed reprehenderit iure numquam cumque rem, sapiente officia dicta repudiandae quae. Qui, voluptate id.
                            </p>
                            <Link href="/contact">Contato</Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default HomePremium