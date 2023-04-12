import styled from 'styled-components';

export default function ButtonSubmit({ content, type, disabled }) {
  return (
    <StyledButton type={type} disabled={disabled}>
      {content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
  margin-left: 27%;
  margin-top: 8%;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 67%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
