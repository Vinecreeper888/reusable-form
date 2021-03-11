import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import "../Form.css";

function FormSignUp({submitForm, renderOptions}) {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate); 

    const [selectValue,setSelectValue] = useState('');

    function handleSelectChange (e) {
       // console.log('Selected value',e.target.value)
        handleChange(e);
        setSelectValue(e.target.value)
    }

    function renderOptionsList (items) {
        // console.log(items);
        return (
            items.map(item => (
                <option value={item} >{item}</option>
            ))
        );
    }

    return(
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Fill the form below!</h1>
                <div className="form-inputs">
                    <label 
                        htmlFor="username" 
                        className="form-label"
                    >
                     Username   
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label 
                        htmlFor="email" 
                        className="form-label"
                    >
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="number"
                        className="form-label"
                    >
                        Number
                    </label>
                    <input
                        id="number"
                        type="number"
                        name="number"
                        placeholder="Enter valid 10-digit number"
                        className="form-input"
                        value={values.number}
                        onChange={handleChange}
                    />
                    {errors.number && <p>{errors.number}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="single-select"
                        className="form-label"
                    >
                        Country:
                    </label>
                    <select 
                        name="country" 
                        className="form-input" 
                        value={selectValue} 
                        onChange={handleSelectChange}>
                        {renderOptionsList(renderOptions)}
                    </select>
                    {errors.country && <p>{errors.country}</p>}
                </div>
                

                <button className="form-input-btn" type="submit">
                     Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a
                    href="#">here</a>
                </span>
            </form>
        </div>
    );
}

export default FormSignUp;