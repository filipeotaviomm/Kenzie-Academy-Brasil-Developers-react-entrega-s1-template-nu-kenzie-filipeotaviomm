import styles from "./style.module.scss";

export const InputForm = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  required,
}) => {
  return (
    <>
      <div className={styles.inputBox}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </div>
    </>
  );
};
