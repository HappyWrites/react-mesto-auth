import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <button onClick={props.onEditAvatar} className="profile__avatar-button" type="button">
            <img className="profile__image" src={currentUser.avatar} alt="аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__edit-name">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} className="profile__edit" type="button"></button>
            </div>
            <p className="profile__about-me">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add" type="button"></button>
      </section>

      <section className="cards">
        <ul className="cards__items">
          {props.cards.map((item) => (<Card key={item._id} {...item} card={item} onCardClick={props.onCardClick} onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete} />))}
        </ul>
      </section>
    </main>
  )
}

export default Main;

