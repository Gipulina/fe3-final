import React from "react";
import {useState} from "react";
import '../Stylesheet/Form.css'
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setemailError] = useState('');

  const validName = (name) => {
    if(name.length < 5){
      setNameError('El nombre debe ser de al menos 5 caracteres');
    }else{
      setNameError('');
    }
  };

  const validEmail = (email) => {
    const regex =/^\S+@\S+\.\S+$/;
    if(!regex.test(email)){
      setemailError('El correo es incorrecto');
    }else{
      setemailError('');
    }
  };

  const onSubmit = (event)=> {
    event.preventDefault();
  };

  const onChangeName = (event) =>{
    setName(event.target.value);
    validName(event.target.value);
  };

  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
    validEmail(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
          Nombre:
          <input type="text" value={name} onChange={onChangeName} />
          </label>
          {nameError && <div class ="error">{nameError}</div>}
        </div>
        <div>
          <label>
          Email:
          <input type="email" value={email} onChange={onChangeEmail} />
          </label>
          {emailError && <div class ="error">{emailError}</div>}
        </div>
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default Form;
