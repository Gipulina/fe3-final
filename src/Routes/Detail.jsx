import { useParams } from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id }= useParams();
  const{dentist}= useContext(ContextGlobal);
  const currentDentist= dentist.find(dentist => dentist.id === parseInt(id));
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id {currentDentist?.id} - {currentDentist?.name}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        {currentDentist && (
          <div className='details'>
            <h3> Name     :</h3><h3>{currentDentist.name}</h3>
            <h3> Email    :</h3><h3>{currentDentist.email}</h3>
            <h3> Phone    :</h3><h3>{currentDentist.phone}</h3>
            <h3> Website  :</h3><h3>{currentDentist.website}</h3>
          </div>
        )}
    </>
  )
}

export default Detail;