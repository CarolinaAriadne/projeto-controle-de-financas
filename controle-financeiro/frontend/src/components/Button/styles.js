import styled from 'styled-components';

export default function Button({ content, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #02aab0 0%, #00cdac 51%, #02aab0 100%);
  margin-left: 27%;
  margin-bottom: 30px;
  padding: 5%;
  padding-bottom: 16%;
  padding-top: 6%;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 67%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
