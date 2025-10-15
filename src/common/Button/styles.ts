import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#0001f4"};
  color: ${(p) => (p.color ? "#0001f4" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #0001f4;
    border: 1px solid #0001f4;
    background-color: #fff;
  }
`;
export const StyledMobileButton = styled("button")<{ color?: string }>`
  @media only screen and (max-width: 890px) {
    display: block;

    background: ${(p) => p.color || "#201FD1"};
    color: ${(p) => (p.color ? "#201FD1" : "#fff")};
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid #edf3f5;
    border-radius: 4px;
    padding: 6px 0;
    cursor: pointer;
    max-width: 110px;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:active,
    &:focus {
      color: #0001f4;
      border: 1px solid #0001f4;
      background-color: #fff;
    }
  }
  display: none;
`;
