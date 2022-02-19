import { Link } from "react-router-dom";
import React, { useState } from "react";


function Register(props) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    props.handleRegistration(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  

  return (
    <section className="mode">
      <form className="form mode__form" onSubmit={handleFormSubmit}>
        <h3 className="mode__title">Регистрация</h3>
        <input id="email" className="mode__input" placeholder="Email" type="email" name="email" value={formData.email || ''} onChange={handleChange} />
        <input id="password" className="mode__input" placeholder="Пароль" type="password" name="password" value={formData.password || ''} onChange={handleChange} />
        <button className="mode__button" type="submit" onSubmit={handleFormSubmit} >Зарегистрироваться</button>
      </form>
      <div className="mode__sign-in">
        <p className="mode__subtitle">Уже зарегистрированы?<Link to="/sign-in" className="mode__link">Войти</Link></p>
      </div>
    </section>
  )
}

export default Register;