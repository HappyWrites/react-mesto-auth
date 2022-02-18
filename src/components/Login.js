import React, { useState } from 'react';

function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return;
    }
    props.handleLogin(formData);
    setFormData({ username: '', password: '' });
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
        <h3 className="mode__title">Вход</h3>
        <input id="email" className="mode__input" placeholder="Email" type="email" name="email" value={formData.email || ''} onChange={handleChange} />
        <input id="password" className="mode__input" placeholder="Пароль" type="password" name="password" value={formData.password || ''} onChange={handleChange} />
        <button className="mode__button" type="submit" onSubmit={handleFormSubmit} >Войти</button>
      </form>
    </section>
  )
}

export default Login;