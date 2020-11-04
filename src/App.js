import './App.css';
import { useState } from 'react';

function App() {
  const [userInputName, setUserInputName] = useState('');
  const [userInputNumber, setUserInputNumber] = useState('');
  const [userInputEmail, setUserInputEmail] = useState('');
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isUserNumValid, setIsUserNumValid] = useState(false);
  const [isUserEmailValid, setIsUserEmailValid] = useState(false);
  const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let onNameChange = (event) => {
    setUserInputName(event.target.value);
  }

  let onNumberChange = (event) => {
    setUserInputNumber(event.target.value);
  }

  let onEmailChange = (event) => {
    setUserInputEmail(event.target.value);
  }

  let onSubmit = () => {
    validateName();
    validateNum();
    validateEmail();
    setIsFormSubmit(true);
  }

  let validateName = () => {
    if(userInputName.length > 4) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }
  }

  let validateNum = () => {
    if(validEmailFormat.test(userInputEmail)) {
      setIsUserEmailValid(true);
    } else {
      setIsUserEmailValid(false);
    }
  }

  let validateEmail = () => {
    if(userInputNumber.length === 10) {
      setIsUserNumValid(true);
    } else {
      setIsUserNumValid(false);
    }
  }

  return (
    <div className='App'>
      <label>
        Name
        <input
          type="text"
          value={userInputName}
          onChange={onNameChange}
        /> 
        {isUserNameValid ? null : isFormSubmit ? <p>Enter valid name</p> : null}
      </label>
      <label> 
        Phone number
        <input
          type="number"
          value={userInputNumber}
          onChange={onNumberChange}
        /> 
        {isUserNumValid ? null : isFormSubmit ? <p>Enter valid phone number</p> : null}
      </label>
      <label>
        Email
        <input
          type="email"
          value={userInputEmail}
          onChange={onEmailChange}
        /> 
        {isUserEmailValid ? null : isFormSubmit ? <p>Enter valid email</p> : null}
      </label>
      <button type='submit' onClick={onSubmit}> Submit </button>
      
      {isUserNameValid && isUserNumValid && isUserEmailValid && setIsFormSubmit ? <h1> This form is submited</h1> : null}
    </div>
  );
}

export default App;
