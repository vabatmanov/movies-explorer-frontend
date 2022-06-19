import React, {useState} from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";

function Login({isLocation, isButton, onLogin}) {
  const [inputData, setInputData] = useState({email: '',password:''});

  function handleChangeInputData (e) {
    setInputData({...inputData,[e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(inputData);
  }

  return (
    <EntryWindows isLocation={isLocation} isButton={isButton} onSubmitForm={handleSubmit}>
      <label className='login__label' htmlFor='email'>E-mail
        <input className='login__input' type='text'  name='email' placeholder='Введите E-mail' value={inputData.email} onChange={handleChangeInputData}/>
      </label>
      <label className='login__label' htmlFor='password'>Пароль
        <input className='login__input' type='password' name='password' placeholder='Введите пароль' value={inputData.password} onChange={handleChangeInputData}/>
      </label>
      <span className='login__error-text'>Что-то пошло не так...</span>
    </EntryWindows>
  );
}

export default Login;
