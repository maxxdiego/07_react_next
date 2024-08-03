import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "@/utils/auth";
import styles from "@/components/HomeContent/HomeContent.module.css";
import EditContent from "../EditContent";
import Loading from "../Loading";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);

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
      // alert("Game deletado!");
    } catch (error) {
      console.error(error);
    }
  };

  // Função para abrir o modal de edição com os dados do jogo
  const openEditModal = (game) => {
    setSelectedGame(game);
  };

  // Função para fechar o modal de edição
  const closeEditModal = () => {
    setSelectedGame(null);
  };

  // Função para atualizar o jogo editado na lista
  const handleUpdate = (updatedGame) => {
    setGames(
      games.map((game) => (game._id === updatedGame._id ? updatedGame : game))
    );
    closeEditModal();
  };

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading loading={loading} />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul key={game._id} className={styles.listGames}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                </div>
                <div className={styles.gameInfo}>
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
                    onClick={() => {
                      const confirmed = window.confirm(
                        "Deseja mesmo excluir o jogo?"
                      );
                      if (confirmed) {
                        deleteGame(game._id);
                      }
                    }}
                  >
                    Deletar
                  </button>
                  <button
                    className={styles.btnEdit}
                    onClick={() => openEditModal(game)}
                  >
                    Editar
                  </button>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {selectedGame && (
        <EditContent
          game={selectedGame}
          onUpdate={handleUpdate}
          onClose={closeEditModal}
        />
      )}
    </>
  );
};

export default HomeContent;
