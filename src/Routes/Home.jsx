import React from 'react'
import Card from '../Components/Card'
import {useContext} from "react";
import {ContextGlobal} from "../Components/utils/global.context"
import '../index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentist} = useContext(ContextGlobal);
  console.log(dentist);
  return (
    <main className="" >
      <h1>Home</h1>
      <div>
        {
          dentist.map((dentist)=>(
            <Card {...dentist} dentist={dentist} />
            // </div>
          ))
        }
      </div>
    </main>
  )
}

export default Home