import styled, { css } from 'styled-components';

const ButtonStyles = {
    primary: css`
      background-color: var(--primary);
      color: white;
    `,
    secondary: css`
      background-color: var(--secondary);
      color: black;
    `,
    primaryOutlined: css`
      background-color: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    `,
    secondaryOutlined: css`
      background-color: transparent;
      color: var(--secondary);
      border: 2px solid var(--secondary);
    `,
    primaryTransparent: css`
      background-color: transparent;
      color: var(--primary);
    `,
    secondaryTransparennt: css`
    background-color: transparent;
    color: var(--primary);
    `,
    success: css`
      background-color: #28a745;
      color: #fff;
    `,
    danger: css`
      background-color: #dc3545;
      color: #fff;
    `,
    info: css`
      background-color: #aed6f1;
      color: #fff;
    `,
};

const ButtonStyled = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 10px 2px;
  ${({ variant }) => ButtonStyles[variant]}

  &:hover {
    transform: scale(1.1)
  }
`;

const Button = ({ text, variant, onClick}) => {
  return <ButtonStyled variant={variant} onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
