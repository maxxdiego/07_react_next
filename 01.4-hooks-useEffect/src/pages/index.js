import { useEffect, useState } from "react";

function Home() {

  const [productId, setProductId] = useState(3);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
  });

  function searchProduct(){
    // console.log("Buscar produto!")
    setProductId(7);
    setProductName("Curso de React");
    setProductPrice("947");

    setDataProduct({
      name: "Curso de Node.js",
      price: 847
    });

  }

  useEffect(() => {
    searchProduct();
  }, [productId]);

  return (
    <main>
      <h2>Bem-vindo a homepage!</h2>
      <p>ID do produto: {productId}</p>
      <p>Nome do produto: {productName}</p>
      <p>Preço do produto: {productPrice}</p><br /><br />
      <p>Nome do produto: {dataProduct.name}</p>
      <p>Preço do produto: {dataProduct.price}</p>
    </main>
  );
}

export default Home;