import css from "styled-jsx/css";
import styled from 'styled-components';
import { primary } from "@/lib/colors";


const StyledButton = styled.button`
  background-color: #554256;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-family: 'roboto', sans-serif;

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.white &&
    !props.outlined &&
    css`
      background-color: white;
      color: #000;
    `};
  ${(props) =>
    props.white &&
    props.outlined &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `};
  ${(props) =>
    props.primary &&
    !props.outlined &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `}
  ${(props) =>
    props.primary &&
    props.outlined &&
    css`
      background-color: transparent;
      border: 1px solid ${primary};
      color: ${primary};
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
