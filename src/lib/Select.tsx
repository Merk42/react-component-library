import React, { ChangeEvent } from 'react';
import styles from './Forms.module.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label, name }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.fieldContainer}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <select className={styles.input} id={name} name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;