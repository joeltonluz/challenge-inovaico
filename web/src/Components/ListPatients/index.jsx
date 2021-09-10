import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import Swal from 'sweetalert2';
import { FcDeleteRow } from 'react-icons/fc';

const ListPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    handleLoadPatients();
  }, []);    

  async function handleLoadPatients() {
    const response = await api.get(`/patients`);

    setPatients(response.data);
  }

  async function handleDeletePatient(id) {
    let continuarRotina = true;

    try {   
      await Swal.fire({
        title: 'Deseja realmente excluir esse Paciente?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sim, quero excluir',
        denyButtonText: `Não`,
      }).then((result) => {
        if (result.isDenied) {
          continuarRotina = false;
        }
      });

      if (!continuarRotina) {
        return
      }

      const response = await api.delete(`/patients/${id}`);

      if (response.data.message !== '') {
        Swal.fire('Deu Algo Errado',response.data.message,'error');
      } else {
        setPatients(patients.filter(patient => patient.id !== id));
        Swal.fire('Sucesso','Paciente excluido com sucesso !','success');
      }
    } catch (err) {
      Swal.fire('Deu Algo Errado','Erro ao excluir esse paciente !','error');
    };
  }

  return(
    <>
      <table style={{width: "100%"}}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de nascimento</th>
            <th>Sexo</th>
            <th>Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
        {patients.map((patient,i) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.birth_date}</td>
            <td>{patient.gender}</td> 
            <td>{patient.phone}</td>  
            <td>
              <button onClick={() => handleDeletePatient(patient.id)}type="button">
                <FcDeleteRow/>
              </button>
            </td>   
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default ListPatients;