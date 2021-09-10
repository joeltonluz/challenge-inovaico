import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';

import HeaderMenu from '../../components/HeaderMenu';
import ListPatients from './../../components/ListPatients/index';

import { DivPatients, TitlePatients, ButtonAddPatients } from './styles';

function Patients() {

  return (
    <>
      <HeaderMenu page="patients"/>     
      <DivPatients>
        <TitlePatients>Patients List</TitlePatients>
        <ButtonAddPatients>
          <Link to ="/patients/create" style={{textDecoration: 'none'}}> <FaPlusSquare color={"red"} size={24}/>&nbsp;&nbsp;Novo Paciente</Link>
        </ButtonAddPatients>
      </DivPatients>
      <ListPatients/>
    </>
  )
}

export default Patients;