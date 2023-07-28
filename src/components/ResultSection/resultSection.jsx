import styles from "./style.module.scss";

export const ResultSection = ({ title, transactionList }) => {
  const filterTransactionList = transactionList.reduce(
    (previousValue, currentValue) =>
      currentValue.typeTransaction == "Entrada"
        ? previousValue + Number(currentValue.moneyValue)
        : previousValue - Number(currentValue.moneyValue),
    0
  );

  return (
    <div>
      {transactionList.length == 0 ? (
        <div></div>
      ) : (
        <div className={styles.containerGroup}>
          <div className={styles.totalValue}>
            <h2 className="title">{title}</h2>
            <span className="title pink">{`R$${filterTransactionList}`}</span>
          </div>
          <p className="paragraph md">O valor se refere ao saldo</p>
        </div>
      )}
    </div>
  );
};
