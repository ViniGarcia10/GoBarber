import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/images/logo.svg';

export default function SingIn() {
  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/"> Já tenho Login </Link>
      </form>
    </>
  );
}
