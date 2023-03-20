import { Container } from 'components/Container/Container';
import { SearchNoFound } from 'components/Search/SearchNoFound/SearchNoFound';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { subscribeEmailConfirmation } from 'service/API/Auth&UserAPI';
import { StyledLink } from './Subscribe.styled';

const Subscribe = () => {
  const { token } = useParams();
  const [text, setText] = useState('');

  useEffect(() => {
    if (token === undefined) return;
    console.log(token);
    subscribeEmailConfirmation(token)
      .then(el => setText('You have subscribed to the newsletter.'))
      .catch(error => setText('You haven`t subscribed. Try again later.'));
  }, [token]);
  return (
    <>
      <Container>
        <SearchNoFound text={text} />
        <StyledLink to="/main">Continue...</StyledLink>
      </Container>
    </>
  );
};
export default Subscribe;
