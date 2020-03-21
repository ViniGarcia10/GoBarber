import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/notifications';

import logoPurple from '~/assets/images/logoPurple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Vinícius Garcia</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Vinícius Garcia Leão"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
