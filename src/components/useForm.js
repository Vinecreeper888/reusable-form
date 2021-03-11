import {useState, useEffect} from 'react';

const useForm = (validateInfo, validate) => {
    const [values,setValues] = useState({
        username: "",
        email: "",
        number: "",
        country: ""
    })

    const [errors, setErrors] = useState({}); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            validateInfo();
        }
    },[errors])
 
    return {handleChange, values,handleSubmit,errors};
}

export default useForm;