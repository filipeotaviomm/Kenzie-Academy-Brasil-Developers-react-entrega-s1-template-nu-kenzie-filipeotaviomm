import styles from "./style.module.scss";

export const SelectForm = ({ children, label, id, value, setValue }) => {
  return (
    <div className={styles.selectBox}>
      <label htmlFor={id}>{label}</label>
      <select
        value={value}
        name={id}
        id={id}
        onChange={(e) => setValue(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};
