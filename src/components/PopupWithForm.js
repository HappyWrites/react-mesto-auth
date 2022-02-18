function PopupWithForm(props) {

  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`} >
      <form className={`form popup__container popup__container_type_${props.name}`} name={`${props.name}`} onSubmit={props.onSubmit}>
        <button onClick={props.onClose} className={`popup__close popup__close_type_${props.name}`} type="button"></button>
        <h3 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h3>
        {props.children}
        <button className={`popup__save popup__save_type__${props.name} type="submit" `}>{props.buttonName}</button>
      </form>
    </section>
  )
}

export default PopupWithForm;


