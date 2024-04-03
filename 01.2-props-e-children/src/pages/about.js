import Menu from "@/componentes/Menu";
import Footer from "@/componentes/Footer";
import Author from "@/componentes/Author";

function About() {
    return (
      <main>
        <Menu />
        <h2>Página Sobre</h2>
        <Author
        name = {"Diego"}
        courses={{price: 300,
          workload: "20 horas"}}>
          React
        </Author> 
        <Footer />
      </main>
    );
  }
  
  export default About;