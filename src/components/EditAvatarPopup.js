import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen])

  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title='Обновить аватар' name='edit-avatar' buttonName="Сохранить" >
      <input ref={avatarRef} id="avatar-input" className="popup__input popup__input_type_avatar" required minLength="2" maxLength="150"
        type="text" placeholder="Ссылка" name="avatar" required />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;