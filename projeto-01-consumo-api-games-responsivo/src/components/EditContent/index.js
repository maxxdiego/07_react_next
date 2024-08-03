import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "@/utils/auth";
import styles from "@/components/EditContent/EditContent.module.css";

const EditContent = ({ game, onUpdate, onClose }) => {
  const [formValues, setFormValues] = useState({
    id: "",
    title: "",
    platform: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    if (game) {
      setFormValues({
        id: game._id,
        title: game.title,
        platform: game.platform,
        year: game.year,
        price: game.price,
      });
    }
  }, [game]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, title, platform, year, price } = formValues;

    const updatedGame = {
      title,
      platform,
      year,
      price,
    };

    try {
      const response = await axios.put(
        `https://09-api-node.vercel.app/game/${id}`,
        updatedGame,
        axiosConfig
      );
      if (response.status === 200) {
        // alert("Game atualizado!");
        onUpdate(response.data.game); // Passa o jogo atualizado para o componente pai
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* CARD EDIÇÃO */}
      <div className={styles.editModal} id={styles.editModal}>
        <div className={styles.editContent}>
          <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
          {/* TITLE */}
          <div className="title">
            <h2>Editar jogo</h2>
          </div>
          <form id="editForm" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="id"
              value={formValues.id}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Insira o novo título"
              className="inputPrimary"
              value={formValues.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="platform"
              placeholder="Insira a nova plataforma do jogo"
              className="inputPrimary"
              value={formValues.platform}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Insira o novo ano"
              className="inputPrimary"
              value={formValues.year}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Insira o novo preço"
              className="inputPrimary"
              value={formValues.price}
              onChange={handleChange}
              required
            />
            <input type="submit" value="Alterar" className="btnPrimary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContent;
