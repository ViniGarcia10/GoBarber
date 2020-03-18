import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/images/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Senha com no mínimo 6 caracteres!')
    .required('Insira seu nome Completo!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é Obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/"> Já tenho Login </Link>
      </Form>
    </>
  );
}
