import styles from "@/components/EditContent/EditContent.module.css";

const EditContent = () => {
  return (
    <>
      {/* CARD EDIÇÃO */}
      <div className={styles.editModal} id={styles.editModal}>
        <div className={styles.editContent}>
          <span className={styles.modalClose}>&times;</span>
          {/* TITLE */}
          <div className="title">
            <h2>Editar jogo</h2>
          </div>
          <form id="editForm">
            <input
              type="text"
              name="idEdit"
              id={styles.idEdit}
              placeholder="ID"
              className="inputPrimary"
              readOnly
            />
            <input
              type="text"
              name="titleEdit"
              id={styles.titleEdit}
              placeholder="Insira o novo título"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="platformEdit"
              id={styles.platformEdit}
              placeholder="Insira a nova plataforma do jogo"
              className="inputPrimary"
              required
            />
            <input
              type="number"
              name="yearEdit"
              id={styles.yearEdit}
              placeholder="Insira o novo ano"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="priceEdit"
              id={styles.priceEdit}
              placeholder="Insira o novo preço"
              className="inputPrimary"
              required
            />
            <input
              type="submit"
              value="Alterar"
              id={styles.updateBtn}
              className="btnPrimary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContent;
