import { useState } from "react";
import { InputForm } from "./InputForm/inputForm";
import { SelectForm } from "./SelectForm/selectForm";
import styles from "./style.module.scss";

export const FormSection = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [moneyValue, setMoneyValue] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("Entrada");

  const insertValue = (e) => {
    e.preventDefault();
    addTransaction({ description, moneyValue, typeTransaction });
    setDescription("");
    setMoneyValue("");
    // setTypeTransaction("entrada");
  };

  return (
    <form onSubmit={insertValue}>
      <div className={styles.formContainer}>
        <div>
          <InputForm
            label="Descrição"
            id="description"
            type="text"
            value={description}
            setValue={setDescription}
            placeholder="Digite aqui sua descrição"
            required={true}
          />
          <span className="form sm">Ex: Compra de roupas</span>
        </div>
        <InputForm
          label="Valor (R$)"
          id="value"
          type="number"
          value={moneyValue}
          setValue={setMoneyValue}
          placeholder="1"
          required={true}
        />
        <SelectForm
          label="Tipo de valor"
          id="typeTransaction"
          value={typeTransaction}
          setValue={setTypeTransaction}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </SelectForm>

        <button className="insertButton">Inserir Valor</button>
      </div>
    </form>
  );
};
