import { Link } from "react-router-dom";
import { Header} from "./HeaderComp.styled";
import logo from '../../images/svg-before sprite/logo_desc.svg';
import { HeaderNav } from "components/HeaderNav/HeaderNav";
import { HeaderUser } from "components/HeaderUser/HeaderUser";

export const HeaderComp = () => {
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <HeaderNav />
      <HeaderUser/>
   
    </Header>
  );
};
