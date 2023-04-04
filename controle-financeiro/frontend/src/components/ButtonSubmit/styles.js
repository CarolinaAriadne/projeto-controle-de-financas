import styled from "styled-components";

export default function ButtonSubmit({ content, type, disabled }) {
  return (
    <StyledButton type={type} disabled={disabled}>
      {content}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c, #03217b 79%);
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
