import { Container } from 'components/Container/Container';
import { SearchNoFound } from 'components/Search/SearchNoFound/SearchNoFound';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { subscribeEmailConfirmation } from 'service/API/Auth&UserAPI';
import { StyledLink } from './Subscribe.styled';

const Subscribe = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get('token');
  const [text, setText] = useState('');

  useEffect(() => {
    // if (token && token !== undefined)
    console.log('Effe');
    subscribeEmailConfirmation(token)
      .then(el => {
        console.log('then', el);
        setText('You have subscribed to the newsletter.');
      })
      .catch(error => {
        console.log('catch', error);
        setText('You haven`t subscribed. Try again later.');
      });
    // eslint-disable-next-line
  }, []);
  // console.log(token);

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
