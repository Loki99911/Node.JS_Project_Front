import {
  BoxForMain,
  BoxForSVG,
  LinkToRegister,
  TextMain,
  TitleMain,
  BoxForLink,
} from './Main_style';
import logo from 'images/svg-before sprite/logo_desc.svg';

const Main = () => {
  return (
    <>
      <BoxForMain>
        <BoxForSVG>
          <img src={logo} alt="logo" />
        </BoxForSVG>
        <TitleMain>Welcome to the app!</TitleMain>
        <TextMain>
          Is not only a recipe app, it is, in fact, your cookbook. You can add
          your own recipes to save them for the future.
        </TextMain>
        <BoxForLink>
          <LinkToRegister to="/register">Registration</LinkToRegister>
          <LinkToRegister to="/signin">Sign in</LinkToRegister>
        </BoxForLink>
      </BoxForMain>
    </>
  );
};

export default Main;
