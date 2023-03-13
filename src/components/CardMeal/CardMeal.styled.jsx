import styled from "styled-components";
import { theme } from "utils/theme";



export const CardTitle = styled.p`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.colors.secondaryDark};
  padding: 16px;
  background-color: ${theme.colors.mainLight};
  position: absolute;
  top: 245px;
  left: 18px;

  border-radius: 8px;
  width: calc(100% - 36px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardImg = styled.img`
  height: 323px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;