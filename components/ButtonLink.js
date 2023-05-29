import Link from 'next/link';
import css from "styled-jsx/css";
import { ButtonStyle } from './Button';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: #554256;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
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
    css`
      background-color: #5542f6;
      border: 1px solid #5542f6;
      color: #fff;
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

export default function ButtonLink(props) {
    return (
        <StyledLink {...props} />
    )
}