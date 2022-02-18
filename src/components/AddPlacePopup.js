import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({ name, link });
  }

  function handleChangeNameCard(e) {
    setName(e.target.value);
  }

  function handleChangeLinkCard(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen])

  return (
    <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} title='Новое место' name='add' buttonName="Создать">
      <input value={name} onChange={handleChangeNameCard} id="place-input" className="popup__input popup__input_type_name popup__input_type_place" required
        minLength="2" maxLength="30" type="text" placeholder="Название" name="name" />
      <span className="place-input-error popup__input-error"></span>
      <input value={link} onChange={handleChangeLinkCard} id="link-input" className="popup__input popup__input_type_about-me popup__input_type_link" required
        type="url" placeholder="Ссылка на картинку" name="link" />
      <span className="link-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;