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
  const [userSubscribed, setUserSubscribed] = useState(false);

  useEffect(() => {
    console.log('effect before');
    if (userSubscribed) return;
    console.log('effect after');
    subscribeEmailConfirmation(token)
      .then(el => {
        if (el.user.subscribed)
          setText('You have subscribed to the newsletter.');
        setUserSubscribed(true);
        console.log('then', el);
      })
      .catch(error => setText('You haven`t subscribed. Try again later.'));
  }, [token, text]);

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
