import { BoxForMain, BoxForSVG, LinkToRegister, TextMain, TitleMain, BoxForLink } from './style';

const Main = () => {
  return (
    <>
      <BoxForMain>
        <BoxForSVG></BoxForSVG>
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
