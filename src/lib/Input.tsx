import { ChangeEvent, FC } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  & > label,
  & > input {
    display:block;
    width:100%;
  }
  & > label {
    font-weight:bold;
  }
  & > input {
    border:1px solid black
  }
`;

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  error?: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </Container>
  )
}

export default Input