import logo from '../images/logo-svg.svg';
import { useLocation, Link } from 'react-router-dom';


function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <a href="#" target="_blank">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
      {
        (location.pathname === '/sign-up') ? <Link to="/sign-in" className="header__link">Войти</Link> :
          (location.pathname === '/sign-in') ? <Link to="/sign-up" className="header__link">Регистрация</Link> :
            <div className='header__user'>
              <p className='header__email'>{props.email}</p>
              <button className="header__button-out" onClick={props.logOut}>Выйти</button>
            </div>
      }
    </header>
  )
}

export default Header;