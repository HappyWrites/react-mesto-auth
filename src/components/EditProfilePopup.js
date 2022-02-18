import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleEditName(e) {
    setName(e.target.value);
  }

  function handleEditDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} title='Редактировать профиль' name='edit-profile' buttonName="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40"
        type="text" placeholder="Жак-Ив Кусто" name="name" value={name || ''} onChange={handleEditName} />
      <span className="name-input-error popup__input-error"></span>
      <input id="about-input" className="popup__input popup__input_type_about-me" required minLength="2" maxLength="200"
        type="text" placeholder="Исследователь океана" name="about" value={description || ''} onChange={handleEditDescription} />
      <span className="about-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;