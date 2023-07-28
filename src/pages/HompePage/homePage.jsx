import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { FinSummarySection } from "../../components/FinSummarySection/finSummarySection";
import { FormSection } from "../../components/FormSection/formSection";
import { ResultSection } from "../../components/ResultSection/resultSection";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.scss";

export const HomePage = () => {
  const [transactionList, setTransactionList] = useState([]);

  const addTransaction = (formInfo) => {
    const newObject = { ...formInfo, id: crypto.randomUUID() };
    setTransactionList([...transactionList, newObject]);
  };

  const removeTransaction = (removedId) => {
    const activeTransactions = transactionList.filter(
      (transaction) => transaction.id !== removedId
    );
    setTransactionList(activeTransactions);
  };

  return (
    <DefaultTemplate>
      <div className={`container ${styles.containerFlex}`}>
        <div>
          <FormSection addTransaction={addTransaction} />
          <ResultSection
            title="Valor total:"
            transactionList={transactionList}
          />
        </div>
        <div className={styles.containerLeft}>
          <FinSummarySection
            transactionList={transactionList}
            removeTransaction={removeTransaction}
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};
