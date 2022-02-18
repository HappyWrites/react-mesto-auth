function ImagePopup(props) {

  return (
    <section className={`popup popup_type_image ${(!!props.card.name && !!props.card.link) ? 'popup_is-opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <button onClick={props.onClose} className="popup__close popup__close_type_image" type="button"></button>
        <img
          src={props.card.link}
          alt={props.card.name} className="popup__picture" />
        <h3 className="popup__title popup__title_type_image">{props.card.name}</h3>
      </div>
    </section>
  )
}

export default ImagePopup;
