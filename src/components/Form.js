import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import {renderOptionsData as data} from '../utils';
import "../Form.css";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return(
        
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
            </div>
        {!isSubmitted ? (<FormSignUp submitForm={submitForm} renderOptions={data}/>) : (<FormSuccess/>)}
        </div>
        
        
    );
}

export default Form;