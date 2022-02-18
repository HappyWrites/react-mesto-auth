import success from '../images/check.png';
import fail from '../images/error.png';

function InfoTooltip(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`} >
      <div className="popup__container">
        <button onClick={props.onClose} className="popup__close" type="button"></button>
        <img src={props.isSuccess ? success : fail} className="popup__image" />
        <h3 className="popup__title popup__title_type_mode">{props.isSuccess ? "Вы успешно зарегистрированы!" : "Что-то пошло не так!Попробуйте ещё раз."}</h3>
      </div>
    </section>
  )
}

export default InfoTooltip;