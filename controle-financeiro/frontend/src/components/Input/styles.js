import styled from 'styled-components';

export default function InputLogin({
  name,
  type,
  onChange,
  onKeyUp,
  value,
  placeholder,
}) {
  return (
    <StyledInput
      name={name}
      type={type}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      placeholder={placeholder}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(143, 188, 143,  0.37);
  border-radius: 2rem;
  width: 120%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.1rem #02AAB0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
  }
  &: :placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
  }
`;
