import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  & > label,
  & > select {
    display:block;
    width:100%;
  }
  & > label {
    font-weight:bold;
  }
  & > select {
    border:1px solid black
  }
`;

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
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;