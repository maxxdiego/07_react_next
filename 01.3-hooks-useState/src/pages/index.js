import { useState } from "react";

function Home() {

  const [name, setName] = useState("Diego");

  return (
    <main>
      <h2>Bem-vindo a homepage!</h2>
      <p>{name}</p>
      <button onClick={() => {setName("João")}}>Alterar</button>
    </main>
  );
}

export default Home;