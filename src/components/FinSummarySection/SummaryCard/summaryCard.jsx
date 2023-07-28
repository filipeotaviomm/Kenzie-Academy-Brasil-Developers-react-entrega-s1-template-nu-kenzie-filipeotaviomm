import styles from "./style.module.scss";

export const SummaryCard = ({
  description,
  moneyValue,
  typeTransaction,
  removeTransaction,
  id,
}) => {
  return (
    <div className={styles.containerCard}>
      <li
        className={` ${styles.card} ${
          typeTransaction === "Entrada" ? styles.green : styles.red
        }`}
      >
        <div className={styles.groupAll}>
          <div className={styles.group1}>
            <h3 className="title">{description}</h3>
            <p className="paragraph md">{typeTransaction}</p>
          </div>
          <div className={styles.group2}>
            <span className="paragraph md">{`R$${moneyValue}`}</span>
            <button
              className={`paragraph md ${styles.excludeButton}`}
              onClick={() => removeTransaction(id)}
            >
              Excluir
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};
