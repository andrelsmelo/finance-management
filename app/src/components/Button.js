import styled, { css } from 'styled-components';

const ButtonStyles = {
    whiteFilled: css`
      background-color: var(--primary);
      color: white;
    `,
    blackFilled: css`
      background-color: var(--secondary);
      color: var(--black);
    `,
    outlined: css`
      background-color: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    `,
    outlinedSecondary: css`
      background-color: transparent;
      color: var(--secondary);
      border: 2px solid var(--secondary);
    `,
    plain: css`
      background-color: transparent;
      color: var(--primary);
    `
};

const ButtonStyled = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  ${({ variant }) => ButtonStyles[variant]}
`;

const Button = ({ text, variant }) => {
  return <ButtonStyled variant={variant}>{text}</ButtonStyled>;
};

export default Button;
