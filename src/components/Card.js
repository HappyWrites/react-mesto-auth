import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `cards__like ${isLiked ? 'cards__like_active' : ''}`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <li className="cards__item">
      <img onClick={handleClick}
        src={props.link}
        alt={props.name} className="cards__image" />
      <div className="cards__content">
        <h2 className="cards__title">{props.name}</h2>
        <div className="cards__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="cards__count-like">{props.likes.length}</p>
        </div>
      </div>
      <button className={`${isOwn ? 'cards__trash' : 'cards__trash_hidden'}`} type="button" onClick={handleDeleteClick}></button>
    </li>
  )
}

export default Card;