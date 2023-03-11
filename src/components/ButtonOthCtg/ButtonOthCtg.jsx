import { Link } from "react-router-dom";
import { BtnOthCtg, ButtonOthCtgWrap } from "./ButtonOthCtg.styled";


export const ButtonOthCtg = () => {
  return ( 
    <ButtonOthCtgWrap>
    <BtnOthCtg to="/categories">
    Other categories
    </BtnOthCtg>
    
 </ButtonOthCtgWrap>
  );
};