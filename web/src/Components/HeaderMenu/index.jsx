import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderDiv, HeaderUl, HeaderLi } from './styles';
import logo from './../../styles/logo.jpg';

function HeaderMenu (props) {
  return (
    <>
      <HeaderDiv>
        <img src={logo} alt={'logo'}/>
        <h2>Desafio para Programador !!</h2>
      </HeaderDiv>
      
      <HeaderUl> 
        <HeaderLi>
          <Link style={{textDecoration: 'none', color: 'white', fontWeight: (props.page==='inicio' ? 800 : 400)}} to="/">Início</Link>
        </HeaderLi>

        <HeaderLi>
          <Link style={{textDecoration: 'none', color: 'white', fontWeight: (props.page==='patients' ? 800 : 400)}} to="/patients">Pacientes</Link>
        </HeaderLi>

        <HeaderLi>
          <Link style={{textDecoration: 'none', color: 'white', fontWeight: (props.page==='schedules' ? 800 : 400)}} to="/schedules">Agendamento</Link>
        </HeaderLi>
      </HeaderUl>     
    </>
  )
}

export default HeaderMenu;