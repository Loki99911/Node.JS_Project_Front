import { createPortal } from 'react-dom';
import { Accent, Backdrop, Box, ButtonClose, Message, Wrapper } from './styled';
import tenRecipes from '../../images/motivatedModal/10_recepies.jpg';
import hundredDays from '../../images/motivatedModal/100_days.jpg';
import firstFavoriteRecipe from '../../images/motivatedModal/first_favorite_recipe.jpg';
import firstShoppingList from '../../images/motivatedModal/first_shopping_list.jpg';
import icons from '../../images/sprite.svg';
import { useEffect, useState } from 'react';

const modalRoot = document.querySelector('#motivated-modal');

let modalType = null;

export const MotivatedModal = ({ type, isOpen }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, []);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  switch (type) {
    case 'ten-recipes':
      modalType = {
        img: tenRecipes,
        message: (
          <Message>
            <Accent>Wow!</Accent> You have added 10 recipes to your favorites!
          </Message>
        ),
      };
      break;
    case '100-days':
      modalType = {
        img: hundredDays,
        message: (
          <Message>
            <Accent>Wow!</Accent> You have been using the application for{' '}
            <Accent>100 </Accent>
            days!
          </Message>
        ),
      };
      break;
    case 'first favorite':
      modalType = {
        img: firstFavoriteRecipe,
        message: (
          <Message>
            <Accent>Wow!</Accent> You have added the first recipe to your
            favorites!
          </Message>
        ),
      };
      break;
    case 'first shopping':
      modalType = {
        img: firstShoppingList,
        message: (
          <Message>
            <Accent>Wow!</Accent> You have created your first shopping list!
          </Message>
        ),
      };
      break;
    default:
      modalType = {
        img: null,
        message: 'ERROR',
      };
  }

  if (!isOpenModal) {
    return null;
  }

  return (
    <>
      {createPortal(
        <Backdrop>
          <Box img={modalType.img}>
            <Wrapper img={modalType.img}>
              <div>{modalType.message}</div>
              <ButtonClose type="click" onClick={handleClose}>
                <svg width={15} height={15} fill={'white'}>
                  <use href={icons + '#icon-cross'}></use>
                </svg>
              </ButtonClose>
            </Wrapper>
          </Box>
        </Backdrop>,
        modalRoot
      )}
    </>
  );
};
