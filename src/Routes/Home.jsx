import React from 'react'
import {useContext} from "react";
import {ContextGlobal} from "../Components/utils/global.context"
import '../index.css';
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentist} = useContext(ContextGlobal);
  console.log(dentist);
  return (
    <main>
      <Navbar/>
      <h1>Home</h1>
      <div>
        {
          dentist.map((dentist)=>(
            <Card {...dentist} dentist={dentist} />
          ))
        }
      </div>
      <Footer/>
    </main>
  )
}

export default Home;