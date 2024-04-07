import Head from "next/head"
import styles from '@/styles/Contact.module.css'
import Menu from "@/components/Menu"
import ContactContent from "@/components/ContactContent"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Neotech</title>
        <meta name="description" content="Landing page com React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Contato</h2>
                <div className={styles.contactContent}>
                <ContactContent />
                <ContactForm />
              </div>
          </div>
        </section>
      </main>
    </>
  );
}
