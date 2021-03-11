//whatver values that we type are correct or not
export default function validateInfo(values) {

    console.log('Validate',values);
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    //email
    if(!values.email) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }


    //number
    if(!values.number) {
        errors.number = "Number required"
    } else if(values.number.length > 10 || values.number.length < 10) {
        errors.number = "Phone Number should be exactly 10 digits. Please type the correct phone number"
    }

    //dropdown
    if(values.country === '' || values.country === 'Please Select') {
        //console.log('Dropdown', values.country);
        errors.country = "Select the right option"
    } 

    return errors;
}