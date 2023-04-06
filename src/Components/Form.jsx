import React from "react";
import {useState} from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');

  const onChangeInput = (event)=>{
    SetName(event.target.value)
  }
  
  onChangeInput = (event)=>{
    SetEmail(event.target.value)
  }

  const validName = (name) =>{
    return name.length >= 5
  }

  const validEmail = (email) => {
    const regex = /@/;
    return regex.test(email);
  };

  return (
    <div>
      <form>
      </form>
    </div>
  );
};

export default Form;
