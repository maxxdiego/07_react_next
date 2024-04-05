import Head from "next/head";
import { useState } from "react";

export default function Home() {

  // Declarar uma nova variável dados com state e atribuir o objeto
  const [data, setData] = useState({
    nameUser: '',
    emailUser: ''
  })

  // Receber os dados dos campos do formulário
  const valueInput = e => setData({...data, [e.target.name] : e.target.value})

  // Executar a funão quando o usuário clicar no botão do formulário
  const addUser = e => {

    // Bloquear o recarregamento da página
    e.preventDefault()

    // Manipular os dados recebidos, por exemplo, enviar os dados para API
    // Concatenar e imprimir utilizando Template Strings
    console.log(`Nome: ${data.nameUser}`)
    console.log(`Email: ${data.emailUser}`)
    alert("Dados enviados para o console!")
  }

  return (
    <>
      <Head>
        <title>Forms React</title>
        <meta name="description" content="Forms React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <h1>Cadastrar</h1>

        <form onSubmit={addUser}>
          <label>Nome:</label>
          <input type="text" name="nameUser" placeholder="Nome do cliente" onChange={valueInput} /><br /><br />

          <label>E-mail:</label>
          <input type="email" name="emailUser" placeholder="E-mail do cliente" onChange={valueInput} /><br /><br />

          <button type="submit">Cadastrar</button>
        </form>

      </main>
    </>
  );
}
