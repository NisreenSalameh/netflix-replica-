// InputComponent.js
import React from 'react';
import './Input.css'; // Import your CSS file

const Input = () => {
  return (
    <div>   
        <div className="input">
        <input type="email" name="email" placeholder="Email Address" />
        <a href="#" className="btn-rounded">
            <button>GET STARTED {`>`}</button>
        </a>
        </div>
        </div>
  );
};

export default Input;

