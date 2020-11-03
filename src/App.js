import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [userInputName, setUserInputName] = useState('');
  const [userInputNumber, setUserInputNumber] = useState('');
  const [userInputEmail, setUserInputEmail] = useState('');
  const [isUserNameValid, setIsUserNameValid] = useState(false);

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
    if (userInputName.length >= 4 && validEmailFormat.test(userInputEmail) && userInputNumber.length >= 10) {
      console.log('values are valid');
      setIsUserNameValid(true);
    } else { 
      console.log('values are invalid');
      setIsUserNameValid(false);
    }
  }

  return (
    <div className='App'>
      <label>
        Name
        <input type="text" value={userInputName} onChange={onNameChange} /> 
        {/* {isUserNameValid ? null : <p>Enter valid name</p>} */}
      </label>
      <label>
        Phone number
        <input type="number" value={userInputNumber} onChange={onNumberChange}/> 
      </label>
      <label>
        Email
        <input type="email" value={userInputEmail} onChange={onEmailChange}/> 
      </label>
      <button type='submit' onClick={onSubmit}> Submit </button>
    </div>
  );
}

export default App;
