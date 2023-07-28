import { SummaryCard } from "./SummaryCard/summaryCard";
import styles from "./styles.module.scss";

export const FinSummarySection = ({ transactionList, removeTransaction }) => {
  return (
    <div>
      <h2 className={`title ${styles.h2Space}`}>Resumo Financeiro</h2>
      {transactionList.length == 0 ? (
        <p className={`paragraph lg ${styles.pSpace}`}>
          Você ainda não possui nenhum lançamento
        </p>
      ) : (
        <ul>
          {transactionList.map((transaction) => (
            <SummaryCard
              key={transaction.id}
              description={transaction.description}
              moneyValue={transaction.moneyValue}
              typeTransaction={transaction.typeTransaction}
              removeTransaction={removeTransaction}
              id={transaction.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
