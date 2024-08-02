import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "@/utils/auth";
import styles from "@/components/HomeContent/HomeContent.module.css";
import EditContent from "../EditContent";
import Loading from "../Loading";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "https://09-api-node.vercel.app/games",
          axiosConfig
        );
        setGames(response.data.games);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Delete
  const deleteGame = async (gameId) => {
    try {
      await axios.delete(
        `https://09-api-node.vercel.app/game/${gameId}`,
        axiosConfig
      );
      setGames(games.filter((game) => game._id !== gameId));
      alert("Game deletado!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className="title">
            <h2>Lista de jogos</h2>
          </div>
          <Loading loading={loading} />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul key={game._id} className="listGames">
                <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                <h3>{game.title}</h3>
                <li>Plataforma: {game.platform}</li>
                <li>Ano: {game.year}</li>
                <li>
                  Preço:
                  {game.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </li>
                <button
                  className={styles.btnDel}
                  onClick={() => deleteGame(game._id)}
                >
                  Deletar
                </button>
                <button className={styles.btnEdit}>Editar</button>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <EditContent />
    </>
  );
};

export default HomeContent;
