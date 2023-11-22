import React, { useState } from 'react';
import './Input.css';
import { Link } from 'react-router-dom';

const Input = () => {

  const [isdisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    if (inputValue.trim() !== "") {
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }

  return (
    <div>   
        <div className="input">
        <input type="email" name="email" placeholder="Email Address"  value = {inputValue} onChange = {handleInputChange}/>
        <Link to="/movies" className="btn-rounded">
            <button disabled={isdisabled}>GET STARTED  {`>`}</button>
        </Link>
        </div>
        </div>
  );
};

export default Input;

